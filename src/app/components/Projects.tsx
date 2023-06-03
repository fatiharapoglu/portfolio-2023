import { useState } from "react";

import FeaturedProject from "./FeaturedProject";
import Title from "./Title";
import SecondaryProject from "./SecondaryProject";

export default function Projects() {
    const [isLoadedMore, setIsLoadedMore] = useState(false);

    const handleLoadMore = () => {
        setIsLoadedMore(true);
    };

    return (
        <section id="projects" className="flex min-h-screen flex-col justify-center">
            <Title count={3} title="Some Projects I’ve Built" />
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
                title="Twitter Clone"
                description="A comprehensive clone of Twitter, with a familiar interface and a range of essential features such as
                profiles, tweets & replies, followings, likes & retweets, notifications and direct messaging system and
                more."
                align="right"
            />
            <FeaturedProject
                liveLink="https://fatiharapoglu.github.io/photo-tag/"
                sourceLink="https://github.com/fatiharapoglu/photo-tag/"
                imageSrc="/screenshots/phototag.png"
                builtWith={["React.js", "Firebase", "Sass", "React Router", "JavaScript", "Github Pages"]}
                title="Photo-Tag"
                description="A photo tagging game of PlayStation Universe. Players select a level and must find 3 hidden characters which are pre-defined. Your score is the time passed and saved when you find all 3 characters. 4 unique PlayStation levels. Leaderboards for all levels that updates in realtime."
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
                description="A simple blog built with MERN stack. Headless CMS for admin, CRUD operations on mongoDB database with admin authorization, comment section for each blog post, snackbar feedback, rate limiter for users to comment and more."
                align="right"
            />
            <FeaturedProject
                liveLink="https://fatiharapoglu.github.io/battleship/"
                sourceLink="https://github.com/fatiharapoglu/battleship/"
                imageSrc="/screenshots/battleship.png"
                builtWith={["JavaScript", "Sass", "Webpack", "Jest", "Github Pages"]}
                title="Battleship"
                description="A battleship game built with pure JavaScript. Smart AI that plays similarly to a human without cheating. Ship placement supports drag and drop for better user experience. Announcer text that helps and informs you with certain situations, and more."
                align="left"
            />
            {!isLoadedMore && (
                <button
                    className="font-roboto-mono inline-block self-center rounded border border-slate-800/90 px-8 py-4 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                    onClick={handleLoadMore}
                >
                    Load more
                </button>
            )}
            {isLoadedMore && (
                <div className="mt-16 flex flex-col">
                    <h1 className="mb-8 text-center text-xl font-bold text-slate-300">Other Noteworthy Projects</h1>
                    <section className="mb-8 grid grid-cols-3 gap-4">
                        <SecondaryProject
                            builtWith={["React.js"]}
                            title="CV Generator"
                            description="Users can create their own resume and download it in a PDF format."
                            liveLink="https://fatiharapoglu.github.io/cv-generator/"
                            sourceLink="https://github.com/fatiharapoglu/cv-generator/"
                        />
                        <SecondaryProject
                            builtWith={["Node.js", "Express.js", "EJS", "Bootstrap", "mongoDB"]}
                            title="Members Only"
                            description="Message board with CRUD operations, user and admin model, premium user privilages."
                            liveLink="https://express-members-only.cyclic.app/"
                            sourceLink="https://github.com/fatiharapoglu/members-only/"
                        />
                        <SecondaryProject
                            builtWith={["React.js", "Sass"]}
                            title="RGBPC Components"
                            description="A simple React shopping cart application."
                            liveLink="https://fatiharapoglu.github.io/shop-rgb/"
                            sourceLink="https://github.com/fatiharapoglu/shop-rgb/"
                        />
                        <SecondaryProject
                            builtWith={["React.js", "Sass"]}
                            title="The Memory League"
                            description="A React memory game of League of Legends. The goal of the game is to avoid clicking the same champion twice."
                            liveLink="https://fatiharapoglu.github.io/memory-lol/"
                            sourceLink="https://github.com/fatiharapoglu/memory-lol/"
                        />
                        <SecondaryProject
                            builtWith={["JavaScript", "HTML", "CSS"]}
                            title="myTask"
                            description="A comprehensive To-do app created with pure JavaScript, HTML and CSS."
                            liveLink="https://fatiharapoglu.github.io/to-do/"
                            sourceLink="https://github.com/fatiharapoglu/to-do/"
                        />
                        <SecondaryProject
                            builtWith={["JavaScript", "Webpack", "Sass"]}
                            title="Weather App"
                            description="Geolocation supporting weather app that gives forecast for the next 5 days, built with OpenWeatherMap API."
                            liveLink="https://fatiharapoglu.github.io/weather/"
                            sourceLink="https://github.com/fatiharapoglu/weather/"
                        />
                    </section>
                    <a
                        href="https://github.com/fatiharapoglu"
                        target="_blank"
                        className="font-roboto-mono inline-block self-center rounded border border-slate-800/90 px-8 py-4 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                    >
                        Interested in more? Check out my Github.
                    </a>
                </div>
            )}
        </section>
    );
}
