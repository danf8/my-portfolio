import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Link from 'next/link';

const Footer = (props) =>{
    const year = new Date().getFullYear()
    return (
        <footer id='footer' className='flex justify-between w-screen items-center bg-blueish-50'>
        <div className='flex pl-5'>
            <Link href='https://www.linkedin.com/in/daniel-fields-se/' target='_blank'><AiFillLinkedin className='text-peach-50 h-12 w-12 transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300'/></Link>
            <Link href='https://github.com/danf8' target='_blank'><AiFillGithub className='text-peach-50 h-12 w-12 transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300'/></Link>
        </div>
        <p className= 'text-peach-50 text-sm pr-5'>Copyright &copy; All Rights Reserved Daniel Fields Portfolio {year}</p>
        <style jsx>{`
           footer {
            height: 97px;
           }
        `}</style>
      </footer>
    );
};

export default Footer;