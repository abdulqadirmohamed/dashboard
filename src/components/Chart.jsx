import React, { useState } from 'react'
// import Chart from "react-apexcharts";
import Chart from "react-apexcharts";




const Charts = () => {
  const [stateCharts, setStateCharts] = useState({
    options: {
      colors: ["#752cdf", "#01D79A"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });

  const [pieChart, setPieChar] = useState({
    series: [44, 55],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          labels: ['Team A', 'Team B'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },

          });

 

  return (
    <div className='mt-5'>
      <div className='grid grid-cols-3 items-center gap-4 overflow-hidden h-80'>
        {/* col1 */}
        <div className='flex items-center col-span-2 bg-white rounded-md overflow-hidden'>
          <div>
            <Chart
                  options={stateCharts.options}
                  series={stateCharts.series}
                  type="bar"
                  width="500"
                />
          </div>
          <div>
            <Chart
                  options={pieChart.options}
                  series={pieChart.series}
                  type="donut"
                  width="300"
                />
          </div>
        </div>
        {/* Col2 */}
        <div className='bg-white rounded-md h-full flex items-center justify-center'>
        <Chart
                  options={pieChart.options}
                  series={pieChart.series}
                  type="donut"
                  width="300"
                />
        </div>

      </div>
    </div>
  )
}

export default Charts