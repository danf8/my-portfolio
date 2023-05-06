import Image from "next/image";
import aboutData from '@/public/about-data.json';

const Header = () => {
    return (
        <header id="about" name='about' className=' bg-blueish-50 object-cover flex flex-col py-10 px-0 w-92 max-w-mobile md:max-w-none md:h-96 md:w-screen  md:grid grid-row-3 md:col-3 md:grid-flow-col '>
            <Image id="pro-pic" height={256} width={248} className=' h-mobile-pic w-mobile-pic md:h-64 md:w-62 md:row-span-3 md:col-start-3 md:col-span-1 md:justify-items-start self-center rounded-full' src={aboutData[0].pic} alt="Daniel Fields Picture" />
            <h2 id="about-name" className=' pt-10 md:pt-0 pb-4 md:pb-0 leading-10 w-82 md:w-128 md:col-start-2 md:col-end-3 font-bold text-3xl text-peach-50 self-center md:justify-self-center md:self-end '>Hi, I'm Dan, a Software Engineer</h2>
            <p id="my-info" className='about-info  w-82 md:w-128 md:col-start-2 md:col-end-3 text-peach-50 text-base font-normal self-center md:justify-self-center md:self-center'>{aboutData[0].about}</p>
            <p id="about-tech" className='about-info pt-1.5 md:pt-0  w-82 md:w-128 md:col-start-2 md:col-end-3 text-peach-50 text-base font-normal self-center md:justify-self-center '>Technologies I Often Use: {aboutData[0].technologies}</p>
            <style jsx>{`
                .about-info{
                    animation: fadein 1s linear ;
                    animation-play-state: paused;
                    animation-delay: calc(var(--scroll) * -3s);
                  
                    animation-iteration-count: 1;
                    animation-fill-mode: both;
                }
                #pro-pic{
                    width: auto;
                    height: auto;
                 }

                @keyframes fadein {
                    from {
                        opacity: 1;
                    }to {
                        opacity: 0;
                    }
                }
            `}
            </style>
         </header>
    );
}

export default Header;