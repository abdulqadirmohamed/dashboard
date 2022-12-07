import React from 'react'
import SidebarOption from './SidebarOption'
import { FaPython } from 'react-icons/fa';




const Sidebar = () => {
    // const options = [{id:1, title:'Dashboard', ]
  return (
    <div className='h-screen bg-white p-8'>
        <h1>Logo</h1>
        <SidebarOption text="Dashboard"/>
        <SidebarOption text="Lessons"/>
        <SidebarOption text="Teachers"/>
        <SidebarOption text="Timetable"/>
        <SidebarOption text="Lecture Note"/>
    </div>
  )
}

export default Sidebar