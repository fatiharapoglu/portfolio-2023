import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import FeaturedProject from "./FeaturedProject";
import Title from "./Title";

export default function Projects() {
    const t = useTranslations("Projects");

    const items = [
        {
            slug: "fettan",
            liveLink: "https://fettan.net/",
            sourceLink: "https://github.com/fatiharapoglu/chatapp-v3",
            imageSrc: "/screenshots/fettan.png",
            builtWith: ["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Supabase", "Redis", "Coolify", "Docker", "Nginx", "Cloudflare DNS", "Self-hosted"],
            align: "right" as const,
            isPrivate: true,
        },
        {
            slug: "twitter",
            liveLink: "https://twitter.fatiharapoglu.com.tr/",
            sourceLink: "https://github.com/fatiharapoglu/twitter/",
            imageSrc: "/screenshots/twitter.png",
            builtWith: ["Next.js 13+", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Open Source"],
            align: "left" as const,
        },
        {
            slug: "news",
            liveLink: "https://briefdigest.vercel.app/",
            sourceLink: "https://github.com/fatiharapoglu/news-app",
            imageSrc: "/screenshots/ai-news.jpg",
            builtWith: ["Next.js App Router", "TypeScript", "Supabase", "Shadcn/UI", "Server Actions", "Framer Motion", "Self-hosted"],
            align: "right" as const,
            isPrivate: true,
        },
    ];

    return (
        <section id="projects" className="flex flex-col justify-center">
            <Title count={3} title={t("title")} />
            {items.map((item) => (
                <FeaturedProject
                    key={item.slug}
                    liveLink={item.liveLink}
                    sourceLink={item.sourceLink}
                    imageSrc={item.imageSrc}
                    builtWith={item.builtWith}
                    title={t(`items.${item.slug}.title`)}
                    linkLabel={t(`items.${item.slug}.link`)}
                    description={t(`items.${item.slug}.description`)}
                    align={item.align}
                    isPrivate={item.isPrivate}
                />
            ))}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-roboto-mono mt-8 flex flex-col items-center rounded-xl border border-slate-800/90 bg-slate-900/60 p-6 text-center text-sm text-slate-300 shadow-xl md:text-base"
            >
                <p>{t("more.text")}</p>
                <a href="https://github.com/fatiharapoglu" target="_blank" className="animated-link mt-2 font-semibold text-amber-100 transition-colors duration-300 hover:text-amber-200">
                    {t("more.link")}
                </a>
            </motion.div>
        </section>
    );
}
