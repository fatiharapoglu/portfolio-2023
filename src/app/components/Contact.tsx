"use client";

import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { useTranslations } from "next-intl";

import Title from "./Title";
import Socials from "./Socials";
import { smoothScroll } from "../utilities/scroll";

export default function Contact() {
    const t = useTranslations("Contact");

    const mail = "contact@fatiharapoglu.com.tr";
    const subject = "";
    const body = "";

    return (
        <section id="contact">
            <Title count={4} title={t("title")} />

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="mb-4 flex flex-col items-center justify-center">
                <h1 className="mb-4 text-center text-3xl font-bold text-slate-300">{t("contact-8")}</h1>
                <p className="mb-1 text-center text-sm md:text-base">{t("contact-9")}</p>
                <p className="mb-4 text-center text-sm md:text-base">{t("contact-10")}</p>
                <Socials />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.75 }} viewport={{ once: true }} className="my-8 text-center text-3xl font-bold text-slate-300">
                {t("contact-11")}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.25 }}
                viewport={{ once: true }}
                className="mx-auto flex w-fit flex-col items-center justify-center rounded-xl border border-slate-800/90 bg-slate-900 p-6 shadow-xl"
            >
                <div className="flex flex-col items-center px-6 py-6">
                    <h1 className="mb-3 text-center text-3xl font-bold text-slate-300">{t("contact-12")}</h1>
                    <p className="mb-6 text-center text-sm">{t("contact-13")}</p>

                    <a
                        href={`mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${body}`}
                        className="font-roboto-mono inline-block rounded border border-slate-800/90 px-6 py-3 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                    >
                        {t("contact-17")}
                    </a>

                    <span className="mt-3 text-xs text-slate-400">{mail}</span>
                </div>
            </motion.div>

            <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} className="mx-auto mt-16 flex justify-center" onClick={() => smoothScroll("")} aria-label="Back to top">
                <ReactSVG src="/svg/up.svg" className="fill-current p-2 text-slate-200 transition-all duration-300 hover:animate-bounce hover:text-amber-200" />
            </motion.button>
        </section>
    );
}
