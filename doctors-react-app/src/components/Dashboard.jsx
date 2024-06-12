import React from 'react'
import Navbar from './Navbar'
import doctors from '../doctors.json'
import './styles/SideNav.css'
import SideNavbar from './SideNavbar'
import CountOfDoctors from './CountOfDoctors'

const Dashboard = () => {
    console.log(doctors)
  return (
    

    <div className='d-flex'>
    <SideNavbar />
    <div>
    <Navbar/> 
     <CountOfDoctors/>
     </div>
      
    </div>
  )
}

export default Dashboard
