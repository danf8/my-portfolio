import {AiFillGithub} from 'react-icons/ai';
import {BiLink} from 'react-icons/bi';
import Link from 'next/link';
import Header from './Header';
import projectData from '@/public/project-data.json'

const Main = () => {

    const showProject = projectData.map((p, i) => {
       return(
             <section key={i} id='p1' className='py-12 grid grid-row-3 grid-cols-3 grid-flow-col '>
                <h2 className='font-bold col-start-2 col-span-2 text-3xl text-bg-blueish-50 justify-self-start self-end my-5 w-49'>{p.name}</h2>
                <p className=' not-italic col-start-2 col-span-2 row-start-2 text-bg-blueish-50 justify-self-start self-start '>{p.description}</p>
                <Link className='col-start-2 col-end-2 row-start-2 self-end' href={p['github-frontend']} target='_blank'><AiFillGithub className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300 h-10 w-10'/></Link>
                {p['github-backend'] !== null ? (
                   <Link className='text-xsm col-start-2 col-end-2 row-start-2 justify-self-end self-end ' href={p['github-backend']} target='_blank'><AiFillGithub className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300 h-6 w-6'/>Backend</Link>
                   ) : ''}
                   <Link className='col-start-2 col-end-2 row-start-2 justify-self-center self-end' href={p.deployed} target='_blank'><BiLink className='transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300 h-10 w-10' /></Link>
                <img id='project-pic' className='drop-shadow-4xl row-span-2 col-start-1 col-end-2 col-span-1 justify-self-center self-center h-48 w-45 rounded-md' src={p.pic} alt="" />
                <style jsx>{`
                   #p1{
                      width: 898px;
                      height: 242px;
                      margin: 0 auto;
                      border-top: 1px solid #21243D;
                      margin-bottom: 48px;
                   }
                   #project-pic{
                      width: 238.56px;
                      height: 192px;
                   }
                `}</style>
          </section>
       );
    });
 
     return (
        <>
            <Header/>
            <main id='projects' name='projects' className='my-info bg-peach-50 pb-10'>
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
                    animation: showme 5s linear ;
                    animation-play-state: paused;
                    animation-delay: calc(var(--scroll) * -15s);
                
                    animation-iteration-count: 1;
                    animation-fill-mode: both;
                }
    
                @keyframes showme {
                    from {
                    opacity: 0;
                    }to {
                    opacity: 1;
                    }
                }
            `}
            </style>
            </main>
       </>
     );
}

export default Main;