import Image from "next/image";
import { ReactSVG } from "react-svg";
import { Tilt } from "react-tilt";

import { defaultTiltOptions } from "../utilities/defaultTiltOptions";

interface FeaturedProjectProps {
    liveLink: string;
    sourceLink: string;
    imageSrc: string;
    builtWith: string[];
    title: string;
    description: string;
}

export default function FeaturedProject({
    liveLink,
    sourceLink,
    imageSrc,
    builtWith,
    title,
    description,
}: FeaturedProjectProps) {
    return (
        <div className="mb-16 grid grid-cols-2 items-center gap-8">
            <div className="flex flex-col justify-center gap-4 text-right">
                <h2 className="font-roboto-mono text-sm text-red-200">Featured Project</h2>
                <a
                    href={liveLink}
                    target="_blank"
                    className="text-3xl font-bold text-slate-200 transition-colors duration-300 hover:text-red-300"
                >
                    {title}
                </a>
                <div className="text-md rounded-lg border border-slate-800/90 bg-slate-800/50 p-4 shadow-xl">
                    {description}
                </div>
                <div className="font-roboto-mono flex flex-wrap justify-end gap-1 text-xs text-red-200">
                    {builtWith.map((tech) => (
                        <span
                            key={`${title}-${tech}`}
                            className="inline-flex items-center justify-center rounded-full border border-slate-800/90 bg-slate-800/50 px-2 py-1 shadow-xl"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-2 flex gap-4 self-end">
                    <a href={sourceLink} target="_blank" className="transition-all duration-300 hover:scale-110">
                        <div className="h-6 w-6 rounded-full">
                            <ReactSVG
                                src="/svg/github-outline.svg"
                                className="fill-current text-slate-200 transition-colors hover:text-red-200"
                            />
                        </div>
                    </a>
                    <a href={liveLink} target="_blank" className="transition-all hover:scale-110">
                        <div className="h-6 w-6 rounded-full">
                            <ReactSVG
                                src="/svg/link.svg"
                                className="fill-current text-slate-200 transition-colors hover:text-red-200"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <Tilt options={defaultTiltOptions}>
                <a href={liveLink} target="_blank">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={750}
                        height={500}
                        className="rounded-xl border border-slate-800/90 shadow-xl brightness-75 transition-all hover:brightness-100"
                    />
                </a>
            </Tilt>
        </div>
    );
}
