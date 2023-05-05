import Image from "next/image";
import aboutData from '@/public/about-data.json';

const Header = () => {
    return (
        <header id="about" name='about' className=' bg-blueish-50 object-cover h-96 w-screen grid grid-row-3 col-3 grid-flow-col'>
            <h2 id="about-name" className='about-me col-start-2 col-end-3 text-3xl text-peach-50 justify-self-center self-end '>Hi, I am Dan, Software Engineer</h2>
            <p id="my-info" className='about-info about-me col-start-2 col-end-3 text-peach-50 justify-self-center self-center'>{aboutData[0].about}</p>
            <p id="about-tech" className='about-info about-me col-start-2 col-end-3 text-peach-50 justify-self-center '>Technologies I Often Use:{aboutData[0].technologies}</p>
            <Image priority={true} width={240} height={256} className='row-span-3 col-start-3 col-span-1 justify-items-start self-center rounded-full' src='/images/headshot.png' alt="Daniel Fields Picture" />
            <style jsx>{`
                .about-me {
                    width: 506px;
                }
                .about-info{
                    animation: fadein 1s linear ;
                    animation-play-state: paused;
                    animation-delay: calc(var(--scroll) * -12s);
                  
                    animation-iteration-count: 1;
                    animation-fill-mode: both;
                }
                @keyframes fadein {
                    from {
                        opacity: 0;
                    }to {
                        opacity: 1;
                    }
                }
            `}
            </style>
         </header>
    );
}

export default Header;