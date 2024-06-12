import React from 'react';
import SideNavbar from './SideNavbar';
import Navbar from './Navbar';
import ApprovedDoctors from './ApprovedDoctors';
import AllDoctors from './AllDoctors';
import CountOfDoctors from './CountOfDoctors';

const Doctors = () => {
    const username=localStorage.getItem("name");
  return (
    
    <div className='d-flex'>
    <SideNavbar />
    <div>
    <Navbar/> 
     <ApprovedDoctors/>
     </div>
     
      
    </div>
  );
}

export default Doctors;
