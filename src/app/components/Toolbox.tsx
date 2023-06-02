import Title from "./Title";
import ToolCard from "./ToolCard";

export default function Toolbox() {
    return (
        <section id="toolbox" className="flex min-h-screen flex-col justify-center">
            <Title count={2} title="Technologies I Use" />
            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold text-slate-300">Languages</h1>
                <div className="grid grid-cols-6 gap-4">
                    <ToolCard
                        description="Scripting language"
                        href="https://www.javascript.com/"
                        src="/svg/javascript.svg"
                        title="JavaScript"
                    />
                    <ToolCard
                        description="Typed JavaScript superset"
                        href="https://www.typescriptlang.org/"
                        src="/svg/typescript.svg"
                        title="TypeScript"
                    />
                    <ToolCard
                        description="Markup language standard"
                        href="https://html5.org/"
                        src="/svg/html5.svg"
                        title="HTML5"
                    />
                    <ToolCard
                        description="Cascading style sheets"
                        href="https://www.css3.com/"
                        src="/svg/css3.svg"
                        title="CSS3"
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="mt-4 text-xl font-bold text-slate-300">JavaScript Libraries & Frameworks</h1>
                <div className="grid grid-cols-6 gap-4">
                    <ToolCard
                        description="JavaScript library"
                        href="https://react.dev/"
                        src="/svg/react.svg"
                        title="React.js"
                    />
                    <ToolCard
                        description="React.js framework"
                        href="https://nextjs.org/"
                        src="/svg/next.svg"
                        title="Next.js"
                    />
                    <ToolCard
                        description="JavaScript runtime environment"
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
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="mt-4 text-xl font-bold text-slate-300">CSS Tools & Frameworks</h1>
                <div className="grid grid-cols-6 gap-4">
                    <ToolCard
                        description="Utility first CSS framework"
                        href="https://tailwindcss.com/"
                        src="/svg/tailwindcss.svg"
                        title="Tailwind CSS"
                    />
                    <ToolCard
                        description="Front-end toolkit"
                        href="https://getbootstrap.com/"
                        src="/svg/bootstrap.svg"
                        title="Bootstrap"
                    />
                    <ToolCard
                        description="React UI library"
                        href="https://mui.com/"
                        src="/svg/mui.svg"
                        title="Material UI"
                    />
                    <ToolCard
                        description="CSS pre-processor"
                        href="https://sass-lang.com/"
                        src="/svg/sass.svg"
                        title="Sass"
                    />
                    <ToolCard
                        description="Animation library"
                        href="https://www.framer.com/motion/"
                        src="/svg/framer.svg"
                        title="Framer Motion"
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="mt-4 text-xl font-bold text-slate-300">Databases & Back-end Services</h1>
                <div className="grid grid-cols-6 gap-4">
                    <ToolCard
                        description="NoSQL database"
                        href="https://www.mongodb.com/"
                        src="/svg/mongodb.svg"
                        title="MongoDB"
                    />
                    <ToolCard
                        description="SQL database"
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
                        description="Firebase alternative"
                        href="https://supabase.com/"
                        src="/svg/supabase.svg"
                        title="Supabase"
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="mt-4 text-xl font-bold text-slate-300">Development Tools</h1>
                <div className="grid grid-cols-6 gap-4">
                    <ToolCard
                        description="TypeScript and Node.js ORM"
                        href="https://www.prisma.io/"
                        src="/svg/prisma.svg"
                        title="Prisma"
                    />
                    <ToolCard
                        description="Async state management"
                        href="https://tanstack.com/query/latest/"
                        src="/svg/reactquery.svg"
                        title="React Query"
                    />
                    <ToolCard description="Front-end tooling" href="https://vitejs.dev/" src="/svg/vite.svg" title="Vite" />
                    <ToolCard
                        description="Module bundler"
                        href="https://webpack.js.org/"
                        src="/svg/webpack.svg"
                        title="Webpack"
                    />
                    <ToolCard
                        description="Version control system"
                        href="https://git-scm.com/"
                        src="/svg/git.svg"
                        title="Git"
                    />
                    <ToolCard
                        description="OpenAI assistant"
                        href="https://openai.com/"
                        src="/svg/openai.svg"
                        title="ChatGPT"
                    />
                </div>
            </div>
        </section>
    );
}
