import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

interface SecondaryProjectProps {
    liveLink: string;
    sourceLink: string;
    builtWith: string[];
    title: string;
    description: string;
    animationDelay: number;
}

export default function SecondaryProject({
    liveLink,
    sourceLink,
    builtWith,
    title,
    description,
    animationDelay,
}: SecondaryProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: animationDelay }}
            viewport={{ once: true }}
            className="flex h-full flex-col gap-4 rounded-xl bg-slate-800/50 p-4 shadow-xl md:aspect-square"
        >
            <div className="flex w-full justify-between rounded-full">
                <ReactSVG src="/svg/app.svg" className="fill-current text-amber-100" />
                <div className="flex gap-4">
                    <a href={sourceLink} target="_blank">
                        <ReactSVG
                            src="/svg/github-outline.svg"
                            className="cursor-pointer fill-current transition-all duration-300 hover:scale-110 hover:text-amber-200"
                        />
                    </a>
                    <a href={liveLink} target="_blank">
                        <ReactSVG
                            src="/svg/link.svg"
                            className="cursor-pointer fill-current transition-all duration-300 hover:scale-110 hover:text-amber-200"
                        />
                    </a>
                </div>
            </div>
            <a
                href={liveLink}
                target="_blank"
                className="text-xl font-bold text-slate-200 transition-colors duration-300 hover:text-amber-200"
            >
                {title}
            </a>
            <p className="text-sm">{description}</p>
            <div className="font-roboto-mono mt-auto flex flex-wrap justify-end gap-1 text-xs text-amber-100">
                {builtWith.map((tech) => (
                    <span
                        key={`${title}-${tech}`}
                        className="inline-flex items-center justify-center rounded-full border border-slate-800/90 bg-slate-800/50 px-2 py-1 text-xs shadow-xl"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
