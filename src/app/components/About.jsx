import Image from "next/image";

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                As a Chemical Engineer who has made the exciting transition into the field of software development, I can
                bring a unique combination of analytical thinking, problem solving skills, and a passion for creating
                innovative digital solutions. My engineering background has equipped me with o deep understanding of complex
                systems and the ability to break dewn challenging problems inte manageable parts. As a software or web
                developer, I am honing my technical expertise in programming languages, web developement frameworks and
                database technologies to design and develop cutting-edge applications that meet the needs of users.
            </p>
            <p>When I’m not coding, I like to spend my time playing guitar, and story based video games.</p>
            <div>
                <Image src="/me.jpeg" width={250} height={250} alt={"Picture of me"} />
            </div>
        </div>
    );
}
