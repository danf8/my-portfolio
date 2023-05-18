import Image from "next/image";
import aboutData from '@/public/about-data.json';

const Header = () => {
    return (
        <header id="about" name='about' className=' bg-blueish-50 object-cover flex flex-col py-10 px-0 md:max-w-none md:h-96 md:w-screen  md:grid grid-row-3 md:col-3 md:grid-flow-col '>
            <Image id="pro-pic" placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/xQAAukB5vvocQUAAAAASUVORK5CYII=' height={256} width={248} className=' h-mobile-pic w-mobile-pic md:h-64 md:w-62 md:row-span-3 md:col-start-3 md:col-span-1 md:justify-items-start self-center rounded-full' src={aboutData[0].pic} alt="Daniel Fields Picture" />
            <h2 id="about-name" className=' pt-10 md:pt-0 pb-4 md:pb-0 leading-10 w-82 md:w-128 md:col-start-2 md:col-end-3 font-bold text-3xl text-peach-50 self-center md:justify-self-start md:self-end '>Hi, my name is Dan, I am Software Engineer</h2>
            <p id="my-info" className='about-info  w-82 md:w-128 md:col-start-2 md:col-end-3 text-peach-50 text-base font-normal self-center md:justify-self-start md:self-center'>{aboutData[0].about}</p>
            <h2 id="about-tech" className='about-info pt-1.5 md:pt-2  w-82 md:w-128 md:col-start-2 md:col-end-3 text-peach-50 font-bold self-center md:justify-self-start text-3xl'>Technologies I Often Use:</h2>
            <p id="about-tech" className='about-info pt-1.5 md:pt-0  w-82 md:w-128 md:col-start-2 md:col-end-3 text-peach-50 text-base font-normal self-center md:justify-self-start '> {aboutData[0].technologies}</p>
            <style jsx>{`
                #pro-pic{
                    width: auto;
                    height: auto;
                 }
            `}
            </style>
         </header>
    );
}

export default Header;