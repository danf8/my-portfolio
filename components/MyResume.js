import Link from "next/link";
import resumeData from '@/public/resume-data.json';

const MyResume = () => {

    const myProjects = resumeData[0].projects.map((p, i) => {
        return(
            <div key={i}>
                <p className="font-bold">{p.title} | {p.role} | {p.date}</p>
                <ul className="list-disc list-inside">
                    <li>{p.features}</li>
                </ul>
            </div>
        )
    });


    const workExperience = resumeData[0].experience.map((p, i) => {
        return(
            <div key={i}>
                <p className="font-bold">{p.company} | {p.title} | {p.location} | {p.startDate}</p>
                <ul className="list-disc list-inside">
                    <li>{p.responsibilities}</li>
                </ul>
            </div>
        )
    });

    const myEducation = resumeData[0].education.map((p, i) => {
        return(
            <div key={i} className="grid grid-cols-2 grid-rows-2 ">
                <p className="font-bold">{p.name}</p>
                <p className="justify-self-end bold">{p.location}</p>
                <p className="">{p.degree}</p>
                <p className="justify-self-end ">{p.endDate}</p>
            </div>
        )
    });

    const myResume = resumeData.map((data, i) => {
        return(
            <div key={i} id="projects" className="flex flex-col">
                <div id="about" className="flex flex-row justify-center">
                    <h1>{data.name}</h1>
                    <Link href={data.linkedin} className="px-1" target="_blank">| Linkedin |</Link>
                    <Link href={data.github} target="_blank"> Github |</Link>
                    <Link href="" className="pl-1">Email</Link>
                </div>
                <div className="grid grid-cols-10">
                    <div className="col-start-2 col-end-10">
                    <section className="section">
                        <h3>Summary</h3>
                        <p>{data.summary}</p>
                    </section>
                    <section>
                        <h3>TECHNICAL SKILLS</h3>
                            <p>{data.skills}</p>
                    </section>
                    <section>
                        <h3>SOFTWARE DEVELOPMENT PROJECTS</h3>
                        {myProjects}
                    </section>
                    <section>
                        <h3>PROFESSIONAL EXPERIENCE</h3>
                        {workExperience}
                    </section>
                    <section className="pb-5">
                        <h3>EDUCATION</h3>
                        {myEducation}
                    </section>
                    </div>
                </div>
                <style jsx>{`

                    h3{
                        border-bottom: 1px solid #21243D;
                        font-weight: bold;
                        font-size: 20px;
                        margin: 10px 0 10px 0;
                    } 
                `}</style>
            </div>
        )
    });

    return myResume;
} 

export default MyResume;