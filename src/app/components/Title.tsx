import { motion } from "framer-motion";

export default function Title({ count, title }: { count: number; title: string }) {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-roboto-mono mb-16 mt-8 text-center text-4xl font-bold text-slate-300"
        >
            <div className="flex items-center">
                <div className="h-px w-1/2 bg-slate-800/90"></div>
                <span className="list-number pl-4">{count}.</span>
                <span className="whitespace-nowrap px-4">{title}</span>
                <div className="h-px w-1/2 bg-slate-800/90"></div>
            </div>
        </motion.h1>
    );
}
