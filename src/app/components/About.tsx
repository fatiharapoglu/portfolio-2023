import Image from "next/image";

import Title from "./Title";

export default function About() {
    return (
        <section id="about" className="flex h-screen flex-col justify-center">
            <Title count={1} title="About Me" />
            <div className="flex justify-between gap-6">
                <div className="w-3/4 text-justify">
                    <p>
                        As a Chemical Engineer who has made the exciting transition into the field of software development, I
                        can bring a unique combination of analytical thinking, problem solving skills, and a passion for
                        creating innovative digital solutions. My engineering background has equipped me with o deep
                        understanding of complex systems and the ability to break down challenging problems into manageable
                        parts. As a software or web developer, I am honing my technical expertise in programming languages,
                        web development frameworks and database technologies to design and develop cutting-edge applications
                        that meet the needs of users.
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
                    <strong className="block pt-4">TLDR;</strong>
                    <ul className="list-inside list-disc pt-4 text-left marker:text-red-200">
                        <li>Deep understanding of complex systems due to the engineering background.</li>
                        <li>
                            Focused on technical expertise in programming languages, web development frameworks, and database
                            technologies.
                        </li>
                        <li>
                            Strong inclination towards continuous learning and staying up-to-date with the latest industry
                            trends.
                        </li>
                        <li>Adaptable to changing technologies and evolving project requirements.</li>
                        <li>Has a creative mindset, always seeking innovative solutions to problems.</li>
                    </ul>
                </div>
                <div>
                    <Image
                        src="/me.jpeg"
                        width={250}
                        height={250}
                        alt={"Picture of me"}
                        className="rounded-xl border border-slate-600 transition-all hover:translate-y-20 hover:rotate-6 hover:scale-110"
                    />
                </div>
            </div>
        </section>
    );
}
