import React from 'react'
import DashboardItem from './DashboardItem';
import Charts from './Charts';
import Customers from './Customers';
import Products from './Products';
import { AiOutlineSearch } from 'react-icons/ai';

function Dashboard() {
  return (
     <div className='flex flex-col gap-4'>
      <div className='px-4 flex justify-between items-center p-3'>
       <div><h4>Hello Shahrukh &#128075;,</h4></div>
       <div className='relative'>
        <AiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2'/>
        <input  type='text' placeholder='Search' 
        className='text-sm focus:outline-none active:outline-none h-9 w-[18rem] border border-gray-300 rounded-sm px-4 pl-8 shadow-md'/>
        </div>
        </div>
        <DashboardItem/>
        <div className='flex flex-row gap-4 w-full'>
         <Charts/>
         <Customers/>
        </div>
        <div >
         <Products/>
        </div>
     </div>
  )
}

export default Dashboard