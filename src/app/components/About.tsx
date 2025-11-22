import Image from "next/image";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useTranslations } from "next-intl";

import Title from "./Title";
import { defaultTiltOptions } from "../utilities/defaultTiltOptions";

export default function About() {
    const t = useTranslations("About");

    return (
        <section id="about" className="flex flex-col">
            <Title count={1} title={t("title")} />
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="flex flex-col justify-between gap-4 xl:flex-row">
                <div className="text-justify text-sm md:text-base xl:w-7/12">
                    <p>{t.rich("paragraph-1", { strong: (chunks) => <strong className="text-slate-200">{chunks}</strong> })}</p>
                    <p className="pt-4">{t.rich("paragraph-2", { strong: (chunks) => <strong className="text-slate-200">{chunks}</strong> })}</p>
                    <p className="pt-4">{t.rich("paragraph-3", { strong: (chunks) => <strong className="text-slate-200">{chunks}</strong> })}</p>
                    <p className="pt-4">{t.rich("paragraph-4", { strong: (chunks) => <strong className="text-slate-200">{chunks}</strong> })}</p>
                    <p className="pt-4">{t.rich("paragraph-5", { strong: (chunks) => <strong className="text-slate-200">{chunks}</strong> })}</p>
                </div>
                <Tilt options={defaultTiltOptions} className="mt-2 flex items-start justify-center xl:w-5/12">
                    <Image src="/me.jpeg" width={350} height={350} alt={"Picture of me"} className="rounded-xl border border-slate-600 shadow-xl" />
                </Tilt>
            </motion.div>
        </section>
    );
}
