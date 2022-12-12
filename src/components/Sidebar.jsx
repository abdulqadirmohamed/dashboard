import React from 'react'
import SidebarOption from './SidebarOption'
import { FaPython } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Sidebar = () => {
    // const options = [{id:1, title:'Dashboard', ]
  return (
    <div className='h-screen bg-white p-8 fixed'>
        <Link to="/" className='text-blue text-xl font-bold cursor-pointer'>Dashboard</Link>
        <SidebarOption text="Dashboard"/>
        <SidebarOption text="Employees"/>
        <SidebarOption text="Company"/>
        <SidebarOption text="Candidate"/>
        <SidebarOption text="Calander"/>
    </div>
  )
}

export default Sidebar