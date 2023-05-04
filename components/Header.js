import { softwareEngineer } from "@/public/aboutData";


const Header = () => {
    const aboutMe = [softwareEngineer];
    const info = aboutMe.map((d, i) => { return d});
    return (
        <header id="about" name='about' className=' bg-blueish-50 object-cover h-96 w-screen grid grid-row-3 col-3 grid-flow-col'>
            <h2 id="about-name" className='about-me col-start-2 col-end-3 text-3xl text-peach-50 justify-self-center self-end '>Hi, I am Dan, Software Engineer</h2>
            <p id="my-info" className='about-info about-me col-start-2 col-end-3 text-peach-50 justify-self-center self-center'>{info[0].about}</p>
            <p id="about-tech" className='about-info about-me col-start-2 col-end-3 text-peach-50 justify-self-center '>Technologies I Often Use:{info[0].technologies}</p>
            <img className='row-span-3 col-start-3 col-span-1 justify-items-start self-center h-64 w-60 rounded-full' src="https://media.licdn.com/dms/image/C5603AQGdPDXSWn9vAA/profile-displayphoto-shrink_400_400/0/1517051906603?e=1688601600&v=beta&t=FSqe7Fn68JyG-oRy4zZ3x_tHWRjybSjRepwz7Phh0fs" alt="" />
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