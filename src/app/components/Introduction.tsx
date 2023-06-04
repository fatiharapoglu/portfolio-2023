import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

import { smoothScroll } from "../utilities/scroll";

export default function Introduction() {
    return (
        <section className="flex h-[calc(100vh-5rem)] flex-col justify-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-roboto-mono pb-6 pl-1 text-lg text-amber-100"
            >
                Hello, my name is
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pb-4 text-6xl font-bold text-slate-300"
            >
                Fatih Arapoğlu.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pb-6 text-6xl font-bold text-slate-400"
            >
                I build web applications,
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-r from-sky-300 to-amber-200 bg-clip-text pb-6 text-4xl font-bold text-transparent"
            >
                and I am satisfied only with a beautiful solution.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-2/3"
            >
                I’m a <strong className="text-slate-300">Full-stack Developer</strong> who loves to work with modern{" "}
                <strong className="text-slate-300">JavaScript</strong>. My proficiency spans the complete web development
                spectrum, utilizing my diverse background in both chemical engineering and full-stack programming. Currently,
                I’m focused on learning everything related to Full-stack Web Development.
            </motion.div>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.25 }}
                className="font-roboto-mono mt-6 inline-flex gap-2 self-start rounded border border-slate-800/90 bg-slate-900 px-8 py-4 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                onClick={() => smoothScroll("projects")}
            >
                View my projects <ReactSVG src="/svg/up.svg" className="rotate-180 fill-current text-slate-300" />
            </motion.button>
        </section>
    );
}
