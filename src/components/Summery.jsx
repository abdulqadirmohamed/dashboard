import React, { useState } from "react";

const Summery = () => {
  const [summeryData, setSummeryData] = useState([
    {id:1, total: 120, title: 'Total Employees', color: '#7226DF'},
    {id:2, total: 20, title: 'Total Employees', color: '#43BAFD'},
    {id:3, total: 12, title: 'Total Employees', color: '#FF8B4F'},
    {id:4, total: 40, title: 'Total Employees', color: '#FF4A7F'},
  ])
  return (
    <div className="grid grid-cols-4 gap-4">
      {summeryData.map((data)=>(
    
        <div className="bg-white py-7 px-5 rounded relative" key={data.id}>
          <div className="absolute right-4 top-2 text-gray cursor-pointer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </div>
          <div className="flex gap-5 items-center">
            <span className={`bg-lightGray text-${data.color} p-3 rounded-full`}>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </span>
            <div>
            <h1 className="font-bold text-lg text-black">{data.total}</h1>
            <span className="text-gray">{data.title}</span>
            </div>
          </div>
        </div>
      
      ))}
      
    </div>
  );
};

export default Summery;
