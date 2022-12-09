import React from 'react'
import SidebarOption from './SidebarOption'
import { FaPython } from 'react-icons/fa';




const Sidebar = () => {
    // const options = [{id:1, title:'Dashboard', ]
  return (
    <div className='h-screen bg-white p-8 fixed'>
        <h1 className='text-blue text-xl font-bold cursor-pointer'>Dashboard</h1>
        <SidebarOption text="Dashboard"/>
        <SidebarOption text="Employees"/>
        <SidebarOption text="Company"/>
        <SidebarOption text="Candidate"/>
        <SidebarOption text="Calander"/>
    </div>
  )
}

export default Sidebar