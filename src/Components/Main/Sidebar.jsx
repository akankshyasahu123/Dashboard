import React from 'react';
import { Link } from 'react-router-dom';
import { TbSettings2,TbZoomMoney } from 'react-icons/tb';
import { LuLayoutDashboard,LuContact2} from 'react-icons/lu';
import { AiFillCodeSandboxSquare,AiOutlineSetting } from 'react-icons/ai';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-blue-900 hover:no-underline active:bg-neutral-600'

function Sidebar() {
  return (
    <div className="bg-blue-950 w-60 h-screen p-3 flex flex-col text-white">
      <div className='flex-1'>
        <div className='flex items-center gap-2 px-1 py-4'>
        <TbSettings2 fontSize={27}/><span className='text-neutral-100 text-lg'>Dashboard</span>
        </div>
      <ul>
        <li className='border border-none bg-blue-900'>
            <Link className={linkClasses}><LuLayoutDashboard fontSize={22}/>
            <span>Dashboard</span>
            </Link>
        </li>
        <li>
          <Link to="/product" className={linkClasses}><AiFillCodeSandboxSquare fontSize={22}/>
          <span>Product</span><BiChevronRight className='ml-12'/>
          </Link>
        </li>
        <li>
          <Link to="/customers" className={linkClasses}><LuContact2 fontSize={22}/>
          <span>Customers</span><BiChevronRight className='ml-6'/>
          </Link>
        </li>
        <li>
          <Link to="/income" className={linkClasses}><TbZoomMoney fontSize={22}/>
          <span>Income</span><BiChevronRight className='ml-11'/>
          </Link>
        </li>
        <li>
          <Link to="/promote" className={linkClasses}><AiOutlineSetting fontSize={22}/>
          <span>Promote</span><BiChevronRight className='ml-9'/>
          </Link>
        </li>
        <li>
          <Link to="/help" className={linkClasses}><RiQuestionnaireLine fontSize={22}/>
          <span>Help</span><BiChevronRight className='ml-16'/>
          </Link>
        </li>
      </ul>
    </div>
          <div className='flex space-between w-100% border border-none p-1 bg-blue-900'>
              <img src="https://www.esnleuven.be/sites/default/files/imce/saan_bollens-modified.png" alt="user-img" className="h-10 w-10"/>
            <div className='flex space-between items-center ml-2'>
              <div className='ml-2'>
              <h6 className='text-sm'>Evano</h6>
              <p className='text-xs'>Project Manager</p>
              </div>
            </div>
            </div>
    </div>
  );
}

export default Sidebar;