import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import FeaturedProject from "./FeaturedProject";
import Title from "./Title";
import SecondaryProject from "./SecondaryProject";

export default function Projects() {
    const [isLoadedMore, setIsLoadedMore] = useState(false);

    const t = useTranslations("Projects");

    const handleLoadMore = () => {
        setIsLoadedMore(true);
    };

    return (
        <section id="projects" className="flex flex-col justify-center">
            <Title count={3} title={t("title")} />
            <FeaturedProject
                liveLink="https://twitter-next13.vercel.app/"
                sourceLink="https://github.com/fatiharapoglu/twitter/"
                imageSrc="/screenshots/twitter.png"
                builtWith={[
                    "Next.js 13+",
                    "TypeScript",
                    "Supabase",
                    "PostgreSQL",
                    "Material UI",
                    "Prisma",
                    "React Query",
                    "Framer Motion",
                    "Sass",
                    "Vercel",
                ]}
                title={t("project-2")}
                description={t("project-3")}
                align="right"
            />
            <FeaturedProject
                liveLink="https://fatiharapoglu.github.io/photo-tag/"
                sourceLink="https://github.com/fatiharapoglu/photo-tag/"
                imageSrc="/screenshots/phototag.png"
                builtWith={["React.js", "Firebase", "Sass", "React Router", "JavaScript", "Github Pages"]}
                title="Photo-Tag"
                description={t("project-4")}
                align="left"
            />
            <FeaturedProject
                liveLink="https://mern-blog-front-end.netlify.app/"
                sourceLink="https://github.com/fatiharapoglu/blog-frontend/"
                imageSrc="/screenshots/blog.png"
                builtWith={[
                    "MERN Stack",
                    "REST API",
                    "Node.js",
                    "Express.js",
                    "React.js",
                    "Vite",
                    "MongoDB",
                    "Sass",
                    "Netlify",
                ]}
                title="MERN Blog"
                description={t("project-5")}
                align="right"
            />
            <FeaturedProject
                liveLink="https://fatiharapoglu.github.io/battleship/"
                sourceLink="https://github.com/fatiharapoglu/battleship/"
                imageSrc="/screenshots/battleship.png"
                builtWith={["JavaScript", "Sass", "Webpack", "Jest", "Github Pages"]}
                title={t("project-6")}
                description={t("project-7")}
                align="left"
            />
            {!isLoadedMore && (
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="font-roboto-mono inline-block self-center rounded border border-slate-800/90 bg-slate-900 px-8 py-4 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                    onClick={handleLoadMore}
                >
                    {t("project-8")}
                </motion.button>
            )}
            {isLoadedMore && (
                <div className="mt-16 flex flex-col">
                    <h1 className="mb-8 text-center text-xl font-bold text-slate-300">{t("project-9")}</h1>
                    <section className="mb-8 grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <SecondaryProject
                            builtWith={["React.js"]}
                            title={t("project-10")}
                            description={t("project-11")}
                            liveLink="https://fatiharapoglu.github.io/cv-generator/"
                            sourceLink="https://github.com/fatiharapoglu/cv-generator/"
                            animationDelay={0.1}
                        />
                        <SecondaryProject
                            builtWith={["Node.js", "Express.js", "EJS", "Bootstrap", "mongoDB"]}
                            title={t("project-12")}
                            description={t("project-13")}
                            liveLink="https://express-members-only.cyclic.app/"
                            sourceLink="https://github.com/fatiharapoglu/members-only/"
                            animationDelay={0.2}
                        />
                        <SecondaryProject
                            builtWith={["React.js", "Sass"]}
                            title={t("project-14")}
                            description={t("project-15")}
                            liveLink="https://fatiharapoglu.github.io/shop-rgb/"
                            sourceLink="https://github.com/fatiharapoglu/shop-rgb/"
                            animationDelay={0.3}
                        />
                        <SecondaryProject
                            builtWith={["React.js", "Sass"]}
                            title="The Memory League"
                            description={t("project-16")}
                            liveLink="https://fatiharapoglu.github.io/memory-lol/"
                            sourceLink="https://github.com/fatiharapoglu/memory-lol/"
                            animationDelay={0.4}
                        />
                        <SecondaryProject
                            builtWith={["JavaScript", "HTML", "CSS"]}
                            title="myTask"
                            description={t("project-17")}
                            liveLink="https://fatiharapoglu.github.io/to-do/"
                            sourceLink="https://github.com/fatiharapoglu/to-do/"
                            animationDelay={0.5}
                        />
                        <SecondaryProject
                            builtWith={["JavaScript", "Webpack", "Sass"]}
                            title={t("project-18")}
                            description={t("project-19")}
                            liveLink="https://fatiharapoglu.github.io/weather/"
                            sourceLink="https://github.com/fatiharapoglu/weather/"
                            animationDelay={0.6}
                        />
                    </section>
                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        href="https://github.com/fatiharapoglu"
                        target="_blank"
                        className="font-roboto-mono inline-block self-center rounded border border-slate-800/90 bg-slate-900 px-8 py-4 text-xs text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90 md:text-sm lg:text-base"
                    >
                        {t("project-20")}
                    </motion.a>
                </div>
            )}
        </section>
    );
}
