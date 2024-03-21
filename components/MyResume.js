import Link from "next/link";
import resumeData from '@/public/resume-data.json';

// const MyResume = () => {

//     const myProjects = resumeData[0].projects.map((p, i) => {
//         const projData = p.features.map((feat) => {
//             return(<li key={i}>{feat}</li>)
//         });

//         return(
//             <div key={i}>
//                 <p className="font-bold">{p.title} | {p.role} | {p.date}</p>
//                 <ul className="list-disc list-inside">
//                     {projData}
//                 </ul>
//             </div>
//         )
//     });

//     const workExperience = resumeData[0].experience.map((p, i) => {
//         const response = p.responsibilities.map((resp) => {
//             return(<li key={i}>{resp}</li>)
//         });

//         return(
//             <div key={i}>
//                 <p className="font-bold">{p.company} | {p.title} | {p.location} | {p.startDate}</p>
//                 <ul className="list-disc list-inside">
//                     {response}
//                 </ul>
//             </div>
//         )
//     });

//     const myEducation = resumeData[0].education.map((p, i) => {
//         return(
//             <div key={i} className="grid grid-cols-2 grid-rows-2 ">
//                 <p className="font-bold">{p.name}</p>
//                 <p className="justify-self-end bold">{p.location}</p>
//                 <p className="">{p.degree}</p>
//                 <p className="justify-self-end ">{p.endDate}</p>
//             </div>
//         )
//     });

//     const myResume = resumeData.map((data, i) => {
//         return(
//             <div key={i} id="projects" className="close-menu flex flex-col">
//                 <div id="about" className="flex flex-row justify-center gap-x-0.5 ">
//                     <p>{data.name}</p>
//                     <div>
//                         <Link href={data.linkedin} className="text-sky-600" target="_blank">| Linkedin |</Link>
//                         <Link className="text-sky-600" href={data.github} target="_blank"> Github |</Link>
//                     </div>
//                     <Link className=" text-sky-600" href="../images/dfResume.pdf" target="_blank"> Download</Link>
//                 </div>
//                 <div className="grid grid-cols-10">
//                     <div className="col-start-2 col-end-10">
//                     <section className="section">
//                         <h3>Summary</h3>
//                         <p>{data.summary}</p>
//                     </section>
//                     <section>
//                         <h3>TECHNICAL SKILLS</h3>
//                             <p>{data.skills}</p>
//                     </section>
//                     <section>
//                         <h3>SOFTWARE DEVELOPMENT PROJECTS</h3>
//                         {myProjects}
//                     </section>
//                     <section>
//                         <h3>PROFESSIONAL EXPERIENCE</h3>
//                         {workExperience}
//                     </section>
//                     <section className="pb-5">
//                         <h3>EDUCATION</h3>
//                         {myEducation}
//                     </section>
//                     </div>
//                 </div>
//                 <style jsx>{`
//                     h3{
//                         border-bottom: 1px solid #21243D;
//                         font-weight: bold;
//                         font-size: 20px;
//                         margin: 10px 0 10px 0;
//                     } 
//                 `}</style>
//             </div>
//         )
//     });
//     return myResume;
// };

export default MyResume;