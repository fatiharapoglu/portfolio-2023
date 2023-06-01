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
            />
            <FeaturedProject
                liveLink="https://fatiharapoglu.github.io/photo-tag/"
                sourceLink="https://github.com/fatiharapoglu/photo-tag/"
                imageSrc="/screenshots/phototag.png"
                builtWith={["React.js", "Firebase", "Sass", "React Router", "JavaScript", "Github Pages"]}
                title="Photo-Tag"
                description="A photo tagging game of PlayStation Universe. Players select a level and must find 3 hidden characters which are pre-defined. Your score is the time passed and saved when you find all 3 characters. 4 unique PlayStation levels. Leaderboards for all levels that updates in realtime."
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
            />
            <FeaturedProject
                liveLink="https://fatiharapoglu.github.io/battleship/"
                sourceLink="https://github.com/fatiharapoglu/battleship/"
                imageSrc="/screenshots/battleship.png"
                builtWith={["JavaScript", "Sass", "Webpack", "Jest", "Github Pages"]}
                title="Battleship"
                description="A battleship game built with pure JavaScript. Smart AI that plays similarly to a human without cheating. Ship placement supports drag and drop for better user experience. Announcer text that helps and informs you with certain situations, and more."
            />
            {!isLoadedMore && (
                <button
                    className="font-roboto-mono inline-block self-center rounded border border-slate-800/90 px-8 py-4 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                    onClick={handleLoadMore}
                >
                    Load more
                </button>
            )}
            {isLoadedMore && (
                <section className="mt-16 grid grid-cols-3">
                    <SecondaryProject />
                    <SecondaryProject />
                    <SecondaryProject />
                    <SecondaryProject />
                    <SecondaryProject />
                    <SecondaryProject />
                </section>
            )}
        </section>
    );
}
