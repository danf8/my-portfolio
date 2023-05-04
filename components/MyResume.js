import Link from "next/link";
import resumeData from '@/public/resume-data.json';

const MyResume = () => {

    const myProjects = resumeData[0].projects.map((p, i) => {
        return(
            <div key={i}>
                <h5>{p.title} | {p.role} | {p.date}</h5>
                <ul>
                    <li>{p.features}</li>
                </ul>
            </div>
        )
    });

    const workExperience = resumeData[0].experience.map((p, i) => {
        return(
            <div key={i}>
                <h5>{p.company} | {p.title} | {p.location} | {p.startDate}</h5>
                <ul>
                    <li>{p.responsibilities}</li>
                </ul>
            </div>
        )
    });

    const myEducation = resumeData[0].education.map((p, i) => {
        return(
            <div key={i}>
                <h5>{p.name}</h5>
                <h5>{p.endDate}</h5>
                <h5>{p.degree}</h5>
            </div>
        )
    });

    const myResume = resumeData.map((data, i) => {
        return(
            <div key={i}>
                <div>
                    <h1>{data.name}</h1>
                    <Link href={data.linkedin}>Linkedin</Link>
                    <Link href={data.github}>Github</Link>
                    <Link href="">Email</Link>
                </div>
                <section>
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
                <section>
                    <h3>EDUCATION</h3>
                    {myEducation}
                </section>
            </div>
        )
    });

    return myResume;
} 

export default MyResume;