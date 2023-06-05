import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import logo from "../../../public/logo.png";
import { smoothScroll } from "../utilities/scroll";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
    const [isHidden, setIsHidden] = useState(false);

    const t = useTranslations("Header");

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsHidden(currentScrollPos > prevScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                isHidden ? "header-hidden" : "header-visible"
            } sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-slate-900/90 bg-gradient-to-b from-slate-950/50 to-slate-900/90 px-4 text-xs shadow-sm backdrop-blur-sm md:h-20 md:px-20 md:text-sm`}
        >
            <motion.div
                initial={{ opacity: 0, mixBlendMode: "lighten" }}
                animate={{ opacity: 1, mixBlendMode: "lighten" }}
                transition={{ duration: 0.75 }}
                onClick={() => smoothScroll("")}
            >
                <Image
                    className="h-8 w-8 cursor-pointer rounded-full border border-slate-800/90 mix-blend-lighten transition-all duration-1000 hover:rotate-180 md:h-12 md:w-12"
                    src={logo}
                    alt="logo"
                />
            </motion.div>
            <ul className="font-roboto-mono flex items-center gap-4 md:gap-8">
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.75 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("about")}>
                        <span className=" text-amber-100">1.</span>
                        {t("link-1")}
                    </button>
                </motion.li>
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("toolbox")}>
                        <span className=" text-amber-100">2.</span>
                        {t("link-2")}
                    </button>
                </motion.li>
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("projects")}>
                        <span className=" text-amber-100">3.</span>
                        {t("link-3")}
                    </button>
                </motion.li>
                <motion.li
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
                >
                    <button onClick={() => smoothScroll("contact")}>
                        <span className=" text-amber-100">4.</span>
                        {t("link-4")}
                    </button>
                </motion.li>
                <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
                    <LanguageSwitch />
                </motion.li>
            </ul>
        </header>
    );
}
