import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { LuMenuSquare,LuWallet } from 'react-icons/lu';
import { BsHandbag } from 'react-icons/bs';

function DashboardItem() {
  return (
    <div className='flex gap-4 w-full'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-200 shadow-lg'>
          <AiOutlineDollarCircle className='text-2xl'/>
        </div>
        <div className='flex items-center flex-col'>
        <span className='text-sm text-gray-500 font-light'>Earning</span>
          <strong className='text-lg text-gray-700 font-semibold'>$198k</strong>
          <span className='text-sm text-green-500 pl-2'>&#8593; 37.8%  <span className='text-xs text-gray-600 font-normal'>this month</span></span>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-purple-300 shadow-lg'>
          <LuMenuSquare className='text-2xl '/>
        </div>
        <div className='flex flex-col items-center'>
        <span className='text-sm text-gray-500 font-light'>Orders</span>
          <strong className='text-lg text-gray-700 font-semibold'>$2.4k</strong>
          <span className='text-sm text-red-600 pl-2'>&#8595;  2% <span className='text-xs text-gray-600 font-normal'>this month</span></span>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-300 shadow-lg'>
          <LuWallet className='text-2xl '/>
        </div>
        <div className='flex flex-col items-center'>
        <span className='text-sm text-gray-500 font-light'>Balance</span>
          <strong className='text-lg text-gray-700 font-semibold'>$2.4k</strong>
          <span className='text-sm text-red-600 pl-2'>&#8595; 2% <span className='text-xs text-gray-600 font-normal'>this month</span></span>
        </div>
        </BoxWrapper>
      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-pink-300 shadow-lg'>
          <BsHandbag className='text-2xl '/>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <strong className='text-lg text-gray-700 font-semibold'>$89k</strong>
          <span className='text-sm text-green-500 pl-2'> &#8593;   11% <span className='text-xs text-gray-600 font-normal'>this week</span></span>
        </div>
      </BoxWrapper>
    </div>
  )
}

export default DashboardItem

function BoxWrapper({children}){
  return(
      <div className='bg-white rounded-sm  w-[16rem] p-6 m-6 flex-1 border rounded-lg border-gray-200 flex items-center shadow-lg'>{children}</div>
  )
}