import { ReactSVG } from "react-svg";

interface ToolCardProps {
    href: string;
    src: string;
    title: string;
    description: string;
}

export default function ToolCard({ href, src, title, description }: ToolCardProps) {
    return (
        <a
            href={href}
            target="_blank"
            className="flex flex-col rounded border border-slate-800/90 p-4 shadow-xl transition hover:bg-slate-800/90"
        >
            <div className="mb-4 h-6 w-6 rounded-full">
                <ReactSVG src={src} className="fill-current text-slate-200" />
            </div>
            <h2 className="font-roboto-mono text-md text-slate-200">{title}</h2>
            <p className="text-sm text-slate-500">{description}</p>
        </a>
    );
}
