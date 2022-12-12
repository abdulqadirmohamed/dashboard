import React from 'react'
import Chart from './Chart'
import Header from './Header'
import Sidebar from './Sidebar'
import Summery from './Summery'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function Home() {
  return (
    <div className='w-[100%] h-screen mx-auto'>
        <div className='grid grid-cols-6'>
            {/* sidebar */}
            <div className='col-span-1'>
                <Sidebar/>
            </div>
            {/* Body */}
            <div className='col-span-5'>
                <Header/>
                <div className='w-[95%] mx-auto py-5'>
                    {/* <Header/> */}
                    <Summery/>
                    <Chart/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home