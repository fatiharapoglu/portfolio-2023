"use client";

import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { useTranslations } from "next-intl";

import Title from "./Title";
import Socials from "./Socials";
import { smoothScroll } from "../utilities/scroll";

export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <section id="contact">
            <Title count={4} title={t("title")} />

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="mb-4 flex flex-col items-center justify-center">
                <p className="mb-2 text-center text-sm md:text-base">{t("intro")}</p>
                <p className="mb-4 text-center text-sm md:text-base text-slate-300">{t("cta")}</p>
                <Socials />
            </motion.div>

            <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} className="mx-auto mt-16 flex justify-center" onClick={() => smoothScroll("")} aria-label="Back to top">
                <ReactSVG src="/svg/up.svg" className="fill-current p-2 text-slate-200 transition-all duration-300 hover:animate-bounce hover:text-amber-200" />
            </motion.button>
        </section>
    );
}
