import Link from 'next/link';
import { useState } from 'react';


const Nav = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id='nav-comp' className=' h-15 md:max-w-none md:h-25 py-7 px-10 flex justify-between items-center text-blueish-50' >
      <Link scroll={false} href='/'>
        <h1>Daniel Fields</h1>
      </Link>
      <ul className='hidden md:flex items-center space-x-7'>
        <Link scroll={false} className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300' href='/#projects'>
          <li>Works</li>
        </Link>
        <Link scroll={false} className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300' href='/resume'>
          <li>Resume</li>
        </Link>
        <Link scroll={false} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300' href='/#about'>
          <li>About</li>
        </Link>
      </ul>
      <div className='md:hidden relative'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='relative group'>
          <div className='relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[44px] h-[44px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
            <div className='transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 animate-bounce text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
              </svg>
            </div>
            <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3'>
              <div className='bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6'></div>
              <div className='bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75'></div>
              <div className='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100'></div>
            </div>
          </div>
        </button> 
        {isMenuOpen && ( 
          <ul className='absolute top-full left-0 mt-2 rounded-md shadow-lg bg-white'>
            <Link scroll={false} className='' href='/#projects'>
              <li>Works</li>
            </Link>
            <Link scroll={false} className='' href='/resume'>
              <li>Resume</li>
            </Link>
            <Link scroll={false} className='' href='/#about'>
              <li>About</li>
            </Link>
          </ul>
          )
        }
      </div>
    </nav>
  );
};

export default Nav;