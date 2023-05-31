import Title from "./Title";
import ToolCard from "./ToolCard";

export default function Toolbox() {
    return (
        <section id="toolbox" className="flex min-h-screen flex-col justify-center">
            <Title count={2} title="Technologies I Use" />
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="text-xl font-bold">Languages</h1>
                <div className="grid grid-cols-4 gap-4">
                    <ToolCard
                        description=""
                        href="https://www.javascript.com/"
                        src="/svg/javascript.svg"
                        title="JavaScript"
                    />
                    <ToolCard
                        description=""
                        href="https://www.typescriptlang.org/"
                        src="/svg/typescript.svg"
                        title="TypeScript"
                    />
                    <ToolCard description="" href="https://html5.org/" src="/svg/html5.svg" title="HTML5" />
                    <ToolCard description="" href="https://www.css3.com/" src="/svg/css3.svg" title="CSS3" />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="text-xl font-bold">Frameworks</h1>
                <div className="grid grid-cols-3 gap-4">
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
                        description="Node.js framework"
                        href="https://expressjs.com/"
                        src="/svg/express.svg"
                        title="Express.js"
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="text-xl font-bold">CSS Tools / Frameworks</h1>
                <div className="grid grid-cols-5 gap-4">
                    <ToolCard
                        description="NoSQL database"
                        href="https://www.mongodb.com/"
                        src="/svg/mongodb.svg"
                        title="Bootstrap"
                    />
                    <ToolCard
                        description="SQL database"
                        href="https://www.postgresql.org/"
                        src="/svg/postgresql.svg"
                        title="Tailwind"
                    />
                    <ToolCard
                        description="Google BaaS"
                        href="https://firebase.google.com/"
                        src="/svg/firebase.svg"
                        title="Material UI"
                    />
                    <ToolCard
                        description="Firebase alternative"
                        href="https://supabase.com/"
                        src="/svg/supabase.svg"
                        title="Sass"
                    />
                    <ToolCard
                        description="Firebase alternative"
                        href="https://supabase.com/"
                        src="/svg/supabase.svg"
                        title="Framer Motion"
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <h1 className="text-xl font-bold">Databases / Back-end Services</h1>
                <div className="grid grid-cols-4 gap-4">
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
        </section>
    );
}
