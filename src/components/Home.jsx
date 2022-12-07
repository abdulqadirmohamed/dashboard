import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Summery from './Summery'

function Home() {
  return (
    <div className='w-[100%] h-screen mx-auto'>
        <div className='grid grid-cols-6'>
            {/* sidebar */}
            <div className='shadow-md col-span-1'>
                <Sidebar/>
            </div>
            {/* Body */}
            <div className='col-span-5'>
                <Header/>
                <Summery/>
                body
            </div>
        </div>
    </div>
  )
}

export default Home