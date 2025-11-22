import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import Title from "./Title";

export default function EnterpriseSummary() {
    const t = useTranslations("EnterpriseSummary");

    const getList = (key: string) => {
        const value = (t as any).raw ? (t as any).raw(key) : t(key, { returnObjects: true });
        if (Array.isArray(value)) return value as string[];
        if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
        return [];
    };

    const splitMeta = (meta: string) => {
        const parts = meta.split("|").map((p) => p.trim());
        return [parts[0] || meta, parts[1] || ""];
    };

    const roles = ["volthread", "odin", "ilkalem"];

    return (
        <section id="enterprise" className="flex flex-col">
            <Title count={2} title={t("title")} />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-sm md:text-base"
            >
                <div className="relative mt-4 flex flex-col gap-12">
                    <div className="pointer-events-none absolute left-1.5 top-0 hidden h-full border-l border-slate-800/60 md:block" aria-hidden />
                    {roles.map((role) => {
                        const baseKey = `items.${role}`;
                        const meta = t(`${baseKey}.meta`);
                        const bullets = getList(`${baseKey}.bullets`);
                        const tags = getList(`${baseKey}.tags`);

                        return (
                            <div key={role} className="grid items-start gap-4 md:grid-cols-[180px_1fr] md:gap-10">
                                <div className="relative pl-6 md:pl-0 md:text-right">
                                    <span className="absolute left-0 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border border-amber-200 bg-slate-950 md:block" />
                                    {(() => {
                                        const [dateLine, locationLine] = splitMeta(meta);
                                        return (
                                            <div className="font-roboto-mono text-[11px] uppercase tracking-[0.26em] text-amber-100">
                                                <div>{dateLine}</div>
                                                <div className="mt-1 text-slate-400">{locationLine}</div>
                                            </div>
                                        );
                                    })()}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold text-slate-300">
                                            {t(`${baseKey}.titlePrefix`)}
                                            <span className="italic font-normal text-slate-400"> {t(`${baseKey}.titleOrg`)}</span>
                                        </h3>
                                    </div>
                                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                                        {bullets.map((bullet, idx) => (
                                            <li key={`${role}-bullet-${idx}`} className="flex gap-3 leading-relaxed">
                                                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-amber-200 to-sky-300"></span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag: string) => (
                                            <span
                                                key={`${role}-tag-${tag}`}
                                                className="font-roboto-mono inline-flex items-center rounded-full border border-slate-800/60 bg-slate-900/40 px-3 py-1 text-[11px] tracking-[0.08em] text-amber-100 shadow-inner shadow-black/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
