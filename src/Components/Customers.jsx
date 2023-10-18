import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const data = [
    { name: ' A', value: 300 },
    { name: ' B', value: 500 },
    { name: ' C', value: 700 },
  ];

function Customers() {
  return (
    <div className='w-[20rem] h-[20rem] bg-white p-2 rounded-sm border border-gray-200 flex flex-col shadow-lg'>
      <strong className='text-gray-700 font-bold p-1'>Customers</strong>
      <h4 className='font-light p-1'>Customers that buy products</h4>
      <div className='w-full mt-3 flex-1 text-xs'>
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#a21caf"
            dataKey="value"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Customers