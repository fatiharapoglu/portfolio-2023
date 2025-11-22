import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-roboto-mono mb-8 mt-16 flex flex-col items-center text-xs leading-loose text-slate-500"
        >
            <p>
                Handcrafted by{" "}
                <a href="https://fatiharapoglu.com.tr" className="animated-link font-bold text-slate-400 transition-colors duration-300 hover:text-amber-100">
                    Fatih Arapoğlu
                </a>{" "}
                © 2025
            </p>
            <p>
                Powered by{" "}
                <a href="https://nextjs.org/" target="_blank" className="animated-link font-bold text-slate-400 transition-colors duration-300 hover:text-amber-100">
                    Next.js 13+
                </a>
                ,{" "}
                <a href="https://tailwindcss.com/" target="_blank" className="animated-link font-bold text-slate-400 transition-colors duration-300 hover:text-amber-100">
                    Tailwind CSS
                </a>{" "}
                & self-hosted with Coolify on my VPS.
            </p>
            <a href="https://github.com/fatiharapoglu/portfolio-2023/" target="_blank" className="flex items-center justify-center gap-2 transition-colors duration-300 hover:text-amber-100">
                <span className="animated-link">View latest source</span>
                <ReactSVG src="/svg/github-outline.svg" className="w-5 rounded-full fill-current text-slate-200 transition-all duration-300 hover:scale-110 hover:text-amber-200" />
            </a>
        </motion.footer>
    );
}
