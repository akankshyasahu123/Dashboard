import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
        <div className='flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden'>
        <Sidebar/>
        <div className='flex-1'>
        <div className='flex gap-4'>{<Outlet/>}</div>
        </div>
        </div>
  )
}

export default Layout