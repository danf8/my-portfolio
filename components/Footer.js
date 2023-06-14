import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Link from 'next/link';

const Footer = (props) =>{
    const year = new Date().getFullYear()
    return (
        <footer id='footer' className=' md:max-w-none flex justify-between items-center bg-blueish-50'>
        <div className='flex pl-5'>
            <Link href='https://www.linkedin.com/in/daniel-fields-se/' target='_blank'><AiFillLinkedin className='text-peach-50 h-12 w-12 md:transition md:ease-in-out md:delay-50 md:hover:translate-y-1 md:hover:scale-110 md:duration-300'/></Link>
            <Link href='https://github.com/danf8' target='_blank'><AiFillGithub className='text-peach-50 h-12 w-12 md:transition md:ease-in-out md:delay-50 md:hover:translate-y-1 md:hover:scale-110 md:duration-300'/></Link>
        </div>
        <p className='max-w-xs text-peach-50 text-xs md:text-sm text-center'>I hope you enjoyed my portfolio, I developed this using Next.js and Tailwinds</p>
        <p className= 'text-peach-50 text-center text-xs md:text-sm pr-5'>Copyright &copy; All Rights Reserved Daniel Fields Portfolio {year}</p>
        <style jsx>{`
           footer {
            height: 97px;
           }
        `}</style>
      </footer>
    );
};

export default Footer;