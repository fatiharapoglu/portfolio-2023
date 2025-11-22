import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import FeaturedProject from "./FeaturedProject";
import Title from "./Title";

export default function Projects() {
    const t = useTranslations("Projects");

    return (
        <section id="projects" className="flex flex-col justify-center">
            <Title count={3} title={t("title")} />
            <FeaturedProject
                liveLink="https://fettan.net/"
                sourceLink="https://github.com/fatiharapoglu/chatapp-v3"
                imageSrc="/screenshots/fettan.png"
                builtWith={["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Supabase", "Redis", "Coolify", "Docker", "Nginx", "Cloudflare DNS", "Self-hosted"]}
                title={t("project-2")}
                linkLabel={t("project-2-link")}
                description={t("project-3")}
                align="right"
                isPrivate={true}
            />
            <FeaturedProject
                liveLink="https://twitter.fatiharapoglu.com.tr/"
                sourceLink="https://github.com/fatiharapoglu/twitter/"
                imageSrc="/screenshots/twitter.png"
                builtWith={["Next.js 13+", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Open Source"]}
                title={t("project-10")}
                linkLabel={t("project-10-link")}
                description={t("project-11")}
                align="left"
            />
            <FeaturedProject
                liveLink="https://briefdigest.vercel.app/"
                sourceLink="https://github.com/fatiharapoglu/news-app"
                imageSrc="/screenshots/ai-news.jpg"
                builtWith={["Next.js App Router", "TypeScript", "Supabase", "Shadcn/UI", "Server Actions", "Framer Motion", "Self-hosted"]}
                title={t("project-4")}
                linkLabel={t("project-4-link")}
                description={t("project-5")}
                align="right"
                isPrivate={true}
            />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-roboto-mono mt-8 flex flex-col items-center rounded-xl border border-slate-800/90 bg-slate-900/60 p-6 text-center text-sm text-slate-300 shadow-xl md:text-base"
            >
                <p>{t("project-8")}</p>
                <a href="https://github.com/fatiharapoglu" target="_blank" className="animated-link mt-2 font-semibold text-amber-100 transition-colors duration-300 hover:text-amber-200">
                    {t("project-9")}
                </a>
            </motion.div>
        </section>
    );
}
