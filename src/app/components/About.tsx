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
                    <p>{t("paragraph-1")}</p>
                    <p className="pt-4">{t("paragraph-2")}</p>
                    <p className="pt-4">{t("paragraph-3")}</p>
                    <p className="pt-4">{t("paragraph-4")}</p>
                    <p className="pt-4">{t("paragraph-5")}</p>
                </div>
                <Tilt options={defaultTiltOptions} className="mt-2 flex items-start justify-center xl:w-5/12">
                    <Image src="/me.jpeg" width={350} height={350} alt={"Picture of me"} className="rounded-xl border border-slate-600 shadow-xl" />
                </Tilt>
            </motion.div>
        </section>
    );
}
