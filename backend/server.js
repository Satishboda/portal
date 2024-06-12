const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT =  5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

const doctorsFilePath = 'C:\\Users\\taashee\\Desktop\\doctors-react-app\\src\\doctors.json'

console.log("path is",doctorsFilePath)
app.post('/register', (req, res) => {
  const newDoctor = req.body;
  console.log(newDoctor);

  fs.readFile(doctorsFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    const doctors = JSON.parse(data);
    const userExists = doctors.some(doc => doc.username === newDoctor.username);

    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    newDoctor.id = doctors.length ? doctors[doctors.length - 1].id + 1 : 1;
    newDoctor.role = 'user';
    newDoctor.status='registered'
    console.log("new doctor id is",newDoctor.id)
    console.log(newDoctor)
    doctors.push(newDoctor);

    fs.writeFile(doctorsFilePath, JSON.stringify(doctors,null,2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});
app.put('/update-doctor/:id', (req, res) => {
  console.log("update-doctor method is triggered");
  const { id } = req.params;
  console.log(id)
  const updatedDoctor = req.body;
  console.log(updatedDoctor);

  fs.readFile(doctorsFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    let doctors = JSON.parse(data);
    const doctorIndex = doctors.findIndex(doc => doc.id === parseInt(id));

    if (doctorIndex === -1) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Update doctor details
    doctors[doctorIndex] = { ...doctors[doctorIndex], ...updatedDoctor };

    fs.writeFile(doctorsFilePath, JSON.stringify(doctors,null,2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }

      res.status(200).json({ message: 'Doctor updated successfully' });
    });
  });
});


app.put('/approve-doctor/:id', (req, res) => {
    console.log("put method is triggered")
    const { id } = req.params;
  
    fs.readFile(doctorsFilePath, (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Error reading file' });
      }
  
      let doctors = JSON.parse(data);
      const doctorIndex = doctors.findIndex(doc => doc.id === parseInt(id));
  
      if (doctorIndex === -1) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
  
      doctors[doctorIndex].status = 'approved';
  
      fs.writeFile(doctorsFilePath, JSON.stringify(doctors,null,2), (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error writing file' });
        }
  
        res.status(200).json({ message: 'Doctor approved successfully' });
      });
    });
  });
  app.put('/reject-doctor/:id', (req, res) => {
    console.log("reject  method is triggered")
    const { id } = req.params;
  
    fs.readFile(doctorsFilePath, (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Error reading file' });
      }
  
      let doctors = JSON.parse(data);
      const doctorIndex = doctors.findIndex(doc => doc.id === parseInt(id));
  
      if (doctorIndex === -1) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
  
      doctors[doctorIndex].status = 'rejected';
  
      fs.writeFile(doctorsFilePath, JSON.stringify(doctors,null,2), (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error writing file' });
        }
  
        res.status(200).json({ message: 'Doctor rejected successfully' });
      });
    });
  });

  app.delete('/delete-doctor/:id', (req, res) => {
    console.log("delete method is triggered")
    const { id } = req.params;

    fs.readFile(doctorsFilePath, (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }

        let doctors = JSON.parse(data);
        const doctorIndex = doctors.findIndex(doc => doc.id === parseInt(id));

        if (doctorIndex === -1) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        // Remove the doctor from the array
        doctors.splice(doctorIndex, 1);

        fs.writeFile(doctorsFilePath, JSON.stringify(doctors,null,2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error writing file' });
            }

            res.status(200).json({ message: 'Doctor deleted successfully' });
        });
    });
});

  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
