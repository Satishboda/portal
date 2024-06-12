import { BrowserRouter, Routes,Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DoctorProfile from './components/DoctorProfile';
import './components/styles/SideNav.css'
import Doctors from './components/Doctors';
import ImageSlider from './components/ImageSlider';
import AllDoctors from './components/AllDoctors';




function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageSlider/>}/>
        <Route path='logout' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        

        {/* <Route path='slider' element={<ImageSlider/>}/> */}
        <Route path='approved' element={<Doctors/>}/>
        <Route path='doctor/:id' element={<DoctorProfile/>}/>
        <Route path='register' element={<Register/>}/> 
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='alldoctors' element={<AllDoctors/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
