import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { LiaAngleDownSolid } from 'react-icons/lia';

function Products() {
  return (
      <div className='bg-white h-[14rem] m-5 p-2'>
        <div className='flex justify-between items-center'>
        <div><strong className='text-neutral-900 font-bold'>Product Sell</strong></div>
        <div className='relative'>
           <AiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2'/>
           <input  type='text' placeholder='Search' 
            className='text-sm focus:outline-none active:outline-none h-8 w-[16rem] border border-gray-300 rounded-sm px-4 pl-8 mr-3 shadow-md'/>
           <button className='text-sm font-light shadow-md p-2'>Last 30 days<LiaAngleDownSolid className='inline-block '/> </button>
        </div>
        </div>
        <div className='bg-white h-24 px-4 m-1 p-2'>
      <table>
        <thead>
          <tr>
            <th className='font-light float-left'>Product Name</th>
            <th className='font-light'>Stock</th>
            <th className='font-light'>Price</th>
            <th className='font-light'>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="Prdouct-Name" className='flex space-between '>
              <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000" alt="Abstract 3D" 
              className='h-8 w-12'/>
              <div>
              <h4>Abstract 3D</h4>
              <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </td>
            <td>32 in stock</td>
            <td>$ 45.99</td>
            <td>20</td>
          </tr>
          <tr>
            <td data-column="Prdouct-Name" className='flex space-between'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRLAuuJazv_Yswg9f91iAQeZSvjOwcafscg&usqp=CAU" alt="Sarphens Illustration" 
              className='h-8 w-12'/>
              <div>
              <h4>Sarphens Illustration</h4>
              <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </td>
            <td>32 in stock</td>
            <td>$ 45.99</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Products