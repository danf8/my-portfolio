import Link from 'next/link';

const Nav = (props) => {
  // sticky top-0 z-50
    return(
      <nav id='nav-comp' className='py-7 px-10 flex justify-between text-blueish-50'>
       <Link scroll={false} className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300' href='#'><h1>Daniel Fields</h1></Link>
        <ul className='flex items-center space-x-7'>
          <Link scroll={false} className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300' href='#projects'>
            <li>Works</li>
          </Link>
          <Link scroll={false} className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300' href='#footer'>
            <li>Resume</li>
          </Link>
          <Link scroll={false} className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300' href='#about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
};

export default Nav;