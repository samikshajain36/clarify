import React, { useState } from 'react'
import '../Dashboard.css'
import { Link } from 'react-router-dom'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import CanvasJSReact from '@canvasjs/react-charts';

const dummyData = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  data: [{				
    type: "column",
    dataPoints: [
      { label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }
    ]
  }]
}


const data = [
  {
    icon: <i class="fa fa-credit-card" aria-hidden="true"></i>,
    payment: "0",
    title: "Paid"
  },
  {
    icon: <i class="fa fa-credit-card" aria-hidden="true"></i>,
    payment: "0",
    title: "UnPaid"
  },
  {
    icon: <i class="fa fa-clock-o" aria-hidden="true"></i>,
    payment: "0",
    title: "Overview"
  },
]

const Dashboard = () => {
 
  return (
    <div>
      <div className='flex'>
        <div className=' margin bgcolor1 mt-4 rounded-xl h-[300px] margin w-[700px]'>
          <div className=' px-6 py-4 flex justify-between'>
            <h1 className='font-bold'>Dashboard</h1>
            <div className='bg-white p-2 rounded-2xl'>
              <button>Last 30 Days</button>
            </div>
          </div>
          <div className="md:flex md:flex-row mx-3 sm:flex-col md:space-y-0 space-y-4 ">
            {data.map((item, id) => {
              return (<div className='rounded-3xl bg-white p-6 md:w-1/3 w-full md:me-4'>
                <div className='mb-2 p-3 rounded-full light-color-1 inline-block text-dark-green w-[50px]'>{item.icon}</div>
                <h1 className='font-bold text-3xl'>{item.payment}</h1>
                <h1 className='fot-bold text-xl'>{item.title}</h1>
              </div>
              )
            })}
          </div>

        </div>
        <div className='md:p-8 p-4 dark-green rounded-3xl lg:w-1/3 w-full text-white'>
          <div>
            <h1>Customer Name</h1>
            <h1>Invoice Amount</h1>
          </div>

        </div>
      </div>
      <div>
      <LineChart className='chart mt-2 light-color-1' width={800}  height={300} data={data}>
    <Line  points={[{x:0, y:900}, { y:900}]} stroke="gray" dot={false} type="monotone" dataKey="pv" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
      </div>
      <div>

      </div>

    </div>
  )

}

export default Dashboard