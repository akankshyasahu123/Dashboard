import React from 'react';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Jan',
       uv: 0,
    },
    { name: 'Feb',
        uv: 0,
    },
    { name: 'Mar',
        uv: 0,
     },
    { name: 'Apr',
        uv: 0,
     },
    { name: 'May',
        uv: 0,
    },
    { name: 'Jun',
        uv: 0,
    },
    { name: 'Jul',
      uv: 0,
    },
    { name: 'Aug',
      uv: 5000,
    },
    { name: 'Sep',
      uv: 0,
    },
    { name: 'Oct',
        uv: 0,
   },
    { name: 'Nov',
      uv: 0,
    },
    { name: 'Dec',
      uv: 0,
    }
   ]

function Charts() {
  return (
    <div className='h-[20rem] bg-white ml-7 p-4 rounded-sm border border-gray-200 flex flex-col flex-1 shadow-lg'>
      <div className='flex justify-between'>
      <div>
      <strong className='text-gray-700 font-bold'>Overview</strong>
      <h4 className='font-light'>Monthly Earning</h4>
      </div>
      <button className='font-light shadow-lg p-2'>Quarterly <LiaAngleDownSolid className='inline-block'/></button>
      </div>
    <div className='w-full mt-3 flex-1 text-xs'>
    <ResponsiveContainer width="90%" height="80%">
        <BarChart width={300} height={200} data={data}
         margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,}}>
          <Bar dataKey="uv" fill="#6d28d9" className=''/>
          <XAxis dataKey="name"/>
        </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
  )
}

export default Charts