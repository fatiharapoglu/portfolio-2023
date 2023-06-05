import Image from "next/image";
import { ReactSVG } from "react-svg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { defaultTiltOptions } from "../utilities/defaultTiltOptions";

interface FeaturedProjectProps {
    liveLink: string;
    sourceLink: string;
    imageSrc: string;
    builtWith: string[];
    title: string;
    description: string;
    align?: "left" | "right";
}

export default function FeaturedProject({
    liveLink,
    sourceLink,
    imageSrc,
    builtWith,
    title,
    description,
    align = "right",
}: FeaturedProjectProps) {
    const t = useTranslations("FeaturedProject");

    return (
        <div className="mb-16 grid items-center gap-8 md:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`flex flex-col justify-center gap-4 ${align === "right" ? "text-right" : "text-left"}`}
            >
                <h2 className="font-roboto-mono text-sm text-amber-100">{t("title")}</h2>
                <a
                    href={liveLink}
                    target="_blank"
                    className="text-3xl font-bold text-slate-200 transition-colors duration-300 hover:text-amber-200"
                >
                    {title}
                </a>
                <div className="rounded-lg border border-slate-800/90 bg-slate-800/50 p-4 text-sm shadow-xl md:text-base">
                    {description}
                </div>
                <div
                    className={`font-roboto-mono flex flex-wrap gap-1 text-xs text-amber-100 ${
                        align === "right" ? "justify-end" : "justify-start"
                    }`}
                >
                    {builtWith.map((tech) => (
                        <span
                            key={`${title}-${tech}`}
                            className="inline-flex items-center justify-center rounded-full border border-slate-800/90 bg-slate-800/50 px-2 py-1 shadow-xl"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className={`mt-2 flex gap-4 ${align === "right" ? "self-end" : "self-start"}`}>
                    <a href={sourceLink} target="_blank" className="transition-all duration-300 hover:scale-110">
                        <div className="h-6 w-6 rounded-full">
                            <ReactSVG
                                src="/svg/github-outline.svg"
                                className="fill-current text-slate-200 transition-colors hover:text-amber-100"
                            />
                        </div>
                    </a>
                    <a href={liveLink} target="_blank" className="transition-all hover:scale-110">
                        <div className="h-6 w-6 rounded-full">
                            <ReactSVG
                                src="/svg/link.svg"
                                className="fill-current text-slate-200 transition-colors hover:text-amber-100"
                            />
                        </div>
                    </a>
                </div>
            </motion.div>
            <Tilt options={defaultTiltOptions} className={`${align === "right" ? "md:order-last" : "md:order-first"}`}>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <a href={liveLink} target="_blank">
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={750}
                            height={500}
                            className="rounded-xl border border-slate-800/90 shadow-xl brightness-75 transition-all hover:brightness-100"
                        />
                    </a>
                </motion.div>
            </Tilt>
        </div>
    );
}
