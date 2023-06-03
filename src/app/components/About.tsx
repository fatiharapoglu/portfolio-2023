import Image from "next/image";
import { Tilt } from "react-tilt";

import Title from "./Title";
import { defaultTiltOptions } from "../utilities/defaultTiltOptions";

export default function About() {
    return (
        <section id="about" className="flex h-screen flex-col">
            <Title count={1} title="About Me" />
            <div className="flex justify-between gap-4">
                <div className="w-7/12 text-justify">
                    <p>
                        As a Chemical Engineer who has made the exciting transition into the field of software development, I
                        can bring a unique combination of analytical thinking, problem solving skills, and a passion for
                        creating innovative digital solutions. My engineering background has equipped me with o deep
                        understanding of complex systems and the ability to break down challenging problems into manageable
                        parts. As a self taught web developer, now I am honing my technical expertise in programming
                        languages, web development frameworks and database technologies to design and develop cutting-edge
                        applications that meet the needs of users.
                    </p>
                    <p className="pt-4">
                        In line with my education and experience, I had the opportunity to work with different people, to
                        take part in a team and to learn how to produce together. For this reason, I will easily adapt. I’m
                        passionate about learning new technologies and am always looking for new opportunities to learn and
                        grow.
                    </p>
                    <p className="pt-4">
                        When I’m not coding, I like to spend my time playing guitar, and story based video games.
                    </p>
                </div>
                <Tilt options={defaultTiltOptions} className="relative mt-2 flex w-5/12 items-start justify-center">
                    <Image
                        src="/me.jpeg"
                        width={350}
                        height={350}
                        alt={"Picture of me"}
                        className="rounded-xl border border-slate-600 shadow-xl"
                    />
                </Tilt>
            </div>
        </section>
    );
}
