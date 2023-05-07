import {AiFillGithub} from 'react-icons/ai';
import {BiLink} from 'react-icons/bi';
import Link from 'next/link';
import Header from './Header';
import projectData from '@/public/project-data.json';
import Image from 'next/image';

const Main = () => {

    const showProject = projectData.map((p, i) => {
       return(
             <section key={i} id='p1' className='border-t border-blueish-50 md:m-zero-auto md:mb-23 h-117 md:h-61 md:w-224 py-6 md:py-12 grid grid-cols-2  md:grid-cols-3 md:grid-flow-col  md:max-w-none '>
                <Image id='project-pic' height={242} width={331} className='w-80 drop-shadow-4xl col-span-2 md:row-span-2 md:col-start-1 md:col-end-2 md:col-span-1 justify-self-center self-center rounded-md' src={p.pic} alt=""  />
                <h2 className='font-bold md:pl-16 md:col-start-2 md:col-span-2 text-3xl text-bg-blueish-50 md:justify-self-start self-center md:my-5 md:w-49'>{p.name}</h2>
                <Link className='col-start-2 col-end-2 row-start-2 md:pl-16 self-center md:self-end' href={p['github-frontend']} target='_blank'><AiFillGithub className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300 w-9 h-9 md:h-10 md:w-10'/></Link>
                {p['github-backend'] !== null ? (
                    <Link className='md:pl-16 text-xsm col-start-2 col-end-2 row-start-2 justify-self-end self-center md:self-end ' href={p['github-backend']} target='_blank'><AiFillGithub className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300 w-9 h-9 md:h-6 md:w-6'/>Backend</Link>
                    ) : ''}
                   <Link className='md:pl-16 col-start-2 col-end-2 row-start-2 justify-self-center self-center md:self-end' href={p.deployed} target='_blank'><BiLink className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300 w-9 h-9 md:h-10 md:w-10' /></Link>
                    <p className='md:pl-16 not-italic  md:col-start-2 col-span-2 md:row-start-2 text-bg-blueish-50 md:justify-self-start self-end md:self-start '>{p.description}</p>
                <style jsx>{`

                `}</style>
          </section>
       );
    });
 
     return (
        <>
            <Header/>
            <main id='projects' name='projects' className='my-info bg-peach-50 pb-10 md:max-w-none'>
                <h1 id='featured' className='leading-10 text-center text-4xl'>Featured Works</h1>
                {showProject}
            <style jsx>{`
                #featured {
                    height: 60px;
                    margin: 54px 0 40px 0;
                }
                #projects{
                    flex-grow: 1;
                }
                .my-info {
                    animation: showme 8s linear ;
                    animation-play-state: paused;
                    animation-delay: calc(var(--scroll) * -1s);
                
                    animation-iteration-count: 1;
                    animation-fill-mode: both;
                }
                @keyframes showme {
                    from {
                    opacity: 1;
                    }to {
                    opacity: 0;
                    }
                }
            `}
            </style>
            </main>
       </>
     );
}

export default Main;