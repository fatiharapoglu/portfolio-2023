import { motion } from "framer-motion";

export default function Title({ count, title }: { count: number; title: string }) {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 mt-8 text-center text-2xl font-bold text-slate-300 md:text-3xl lg:text-4xl"
        >
            <div className="flex items-center">
                <div className="h-px w-1/2 bg-slate-800/90"></div>
                <span className="pl-4 text-2xl text-amber-100">{count}.</span>
                <span className="whitespace-nowrap px-4">{title}</span>
                <div className="h-px w-1/2 bg-slate-800/90"></div>
            </div>
        </motion.h1>
    );
}
