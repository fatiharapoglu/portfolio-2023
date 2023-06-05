import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import Title from "./Title";
import ToolCard from "./ToolCard";

export default function Toolbox() {
    const t = useTranslations("Toolbox");

    return (
        <section id="toolbox" className="flex flex-col justify-center">
            <Title count={2} title={t("title")} />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
            >
                <h1 className="text-center text-xl font-bold text-slate-300 lg:text-left">{t("toolbox-2")}</h1>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                    <ToolCard
                        description={t("toolbox-3")}
                        href="https://www.javascript.com/"
                        src="/svg/javascript.svg"
                        title="JavaScript (ES6+)"
                    />
                    <ToolCard
                        description={t("toolbox-4")}
                        href="https://www.typescriptlang.org/"
                        src="/svg/typescript.svg"
                        title="TypeScript"
                    />
                    <ToolCard description={t("toolbox-5")} href="https://html5.org/" src="/svg/html5.svg" title="HTML5" />
                    <ToolCard description={t("toolbox-6")} href="https://www.css3.com/" src="/svg/css3.svg" title="CSS3" />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col gap-4"
            >
                <h1 className="text-center text-xl font-bold text-slate-300 lg:text-left">{t("toolbox-7")}</h1>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                    <ToolCard description={t("toolbox-8")} href="https://react.dev/" src="/svg/react.svg" title="React.js" />
                    <ToolCard
                        description="React.js framework"
                        href="https://nextjs.org/"
                        src="/svg/next.svg"
                        title="Next.js (13+)"
                    />
                    <ToolCard
                        description={t("toolbox-9")}
                        href="https://nodejs.org/"
                        src="/svg/nodedotjs.svg"
                        title="Node.js"
                    />
                    <ToolCard
                        description="Node.js framework"
                        href="https://expressjs.com/"
                        src="/svg/express.svg"
                        title="Express.js"
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col gap-4"
            >
                <h1 className="text-center text-xl font-bold text-slate-300 lg:text-left">{t("toolbox-10")}</h1>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                    <ToolCard
                        description="CSS framework"
                        href="https://tailwindcss.com/"
                        src="/svg/tailwindcss.svg"
                        title="Tailwind CSS"
                    />
                    <ToolCard
                        description={t("toolbox-11")}
                        href="https://getbootstrap.com/"
                        src="/svg/bootstrap.svg"
                        title="Bootstrap"
                    />
                    <ToolCard description={t("toolbox-12")} href="https://mui.com/" src="/svg/mui.svg" title="Material UI" />
                    <ToolCard description={t("toolbox-13")} href="https://sass-lang.com/" src="/svg/sass.svg" title="Sass" />
                    <ToolCard
                        description={t("toolbox-14")}
                        href="https://www.framer.com/motion/"
                        src="/svg/framer.svg"
                        title="Framer Motion"
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col gap-4"
            >
                <h1 className="text-center text-xl font-bold text-slate-300 lg:text-left">{t("toolbox-15")}</h1>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                    <ToolCard
                        description={t("toolbox-16")}
                        href="https://www.mongodb.com/"
                        src="/svg/mongodb.svg"
                        title="MongoDB"
                    />
                    <ToolCard
                        description={t("toolbox-17")}
                        href="https://www.postgresql.org/"
                        src="/svg/postgresql.svg"
                        title="PostgreSQL"
                    />
                    <ToolCard
                        description="Google BaaS"
                        href="https://firebase.google.com/"
                        src="/svg/firebase.svg"
                        title="Firebase"
                    />
                    <ToolCard
                        description={t("toolbox-18")}
                        href="https://supabase.com/"
                        src="/svg/supabase.svg"
                        title="Supabase"
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-col gap-4"
            >
                <h1 className="text-center text-xl font-bold text-slate-300 lg:text-left">{t("toolbox-19")}</h1>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                    <ToolCard
                        description={t("toolbox-20")}
                        href="https://www.prisma.io/"
                        src="/svg/prisma.svg"
                        title="Prisma"
                    />
                    <ToolCard
                        description={t("toolbox-21")}
                        href="https://tanstack.com/query/latest/"
                        src="/svg/reactquery.svg"
                        title="React Query"
                    />
                    <ToolCard description={t("toolbox-22")} href="https://vitejs.dev/" src="/svg/vite.svg" title="Vite" />
                    <ToolCard
                        description={t("toolbox-23")}
                        href="https://webpack.js.org/"
                        src="/svg/webpack.svg"
                        title="Webpack"
                    />
                    <ToolCard description={t("toolbox-24")} href="https://git-scm.com/" src="/svg/git.svg" title="Git" />
                    <ToolCard
                        description={t("toolbox-25")}
                        href="https://openai.com/"
                        src="/svg/openai.svg"
                        title="ChatGPT"
                    />
                </div>
            </motion.div>
        </section>
    );
}
