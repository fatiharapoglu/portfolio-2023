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
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between gap-4 xl:flex-row"
            >
                <div className="text-justify text-sm md:text-base xl:w-7/12">
                    <p>
                        {t("about-1")}
                        <strong className="text-slate-300/90">{t("about-2")}</strong>
                        {t("about-3")}
                    </p>
                    <p className="pt-4">
                        {t("about-4")} <strong className="text-slate-300/90">{t("about-5")}</strong>
                    </p>
                    <p className="pt-4">
                        {t("about-6")}{" "}
                        <a
                            href="https://www.youtube.com/user/f3tt4n/"
                            target="_blank"
                            className="animated-link font-semibold text-slate-300/90 transition-colors duration-300 hover:text-amber-200"
                        >
                            {t("about-7")}
                        </a>
                        ,{" "}
                        <a
                            href="https://steamcommunity.com/id/f3tt4n/"
                            target="_blank"
                            className="animated-link font-semibold text-slate-300/90 transition-colors duration-300 hover:text-amber-200"
                        >
                            {t("about-8")}
                        </a>{" "}
                        {t("about-9")}
                    </p>
                </div>
                <Tilt options={defaultTiltOptions} className="mt-2 flex items-start justify-center xl:w-5/12">
                    <Image
                        src="/me.jpeg"
                        width={350}
                        height={350}
                        alt={"Picture of me"}
                        className="rounded-xl border border-slate-600 shadow-xl"
                    />
                </Tilt>
            </motion.div>
        </section>
    );
}
