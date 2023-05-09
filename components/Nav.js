import Link from 'next/link';
import { useState } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const changeMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id='nav-comp' className='bg-peach-50 static w-screen h-15 md:max-w-none md:h-25 md:pr-30 py-7 px-10 flex justify-end md:justify-between items-center text-blueish-50 ' >
      <Link className='hidden md:flex md:pl-24 hover:translate-y-1 hover:opacity-75 hover:scale-110 duration-300 transition ease-in-out delay-50 ' scroll={false} href='/'>
        <h1 className='text-2xl'>Daniel Fields</h1>
      </Link>
      <ul className='hidden md:flex md:text-lg items-center space-x-7'>
        <Link scroll={false} className='transition ease-in-out delay-50 hover:translate-y-1 hover:opacity-75 hover:scale-110 duration-300' href='/#projects'>
          <li>Works</li>
        </Link>
        <Link scroll={false} className='transition ease-in-out delay-50 hover:translate-y-1 hover:opacity-75 hover:scale-110 duration-300' href='/resume'>
          <li>Resume</li>
        </Link>
        <Link scroll={false} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:opacity-75 hover:scale-110 duration-300' href='/#about'>
          <li>About</li>
        </Link>
        <Link scroll={false} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:opacity-75 hover:scale-110 duration-300' href='/#footer'>
          <li>Contact</li>
        </Link>
      </ul>
      <div onClick={changeMenuState}  className='md:hidden relative'>
          <RxHamburgerMenu  className='relative flex flex-col overflow-hidden items-center justify-center w-[44px] h-[44px]'/>
        {isMenuOpen && ( 
          <ul className='absolute top-full left-0 mt-2 rounded-md shadow-lg bg-white'>
            <Link className='' scroll={false} href='/'>
              <h1>Home</h1>
            </Link>
            <Link scroll={false} className='' href='/#projects'>
              <li>Works</li>
            </Link>
            <Link scroll={false} className='' href='/resume'>
              <li>Resume</li>
            </Link>
            <Link scroll={false} className='' href='/#about'>
              <li className='' >About</li>
            </Link>
            <Link scroll={false} className='' href='/#footer'>
          <li>Contact</li>
        </Link>
          </ul>
          )
        }
      </div>
    </nav>
  );
};

export default Nav;