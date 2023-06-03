import { ReactSVG } from "react-svg";

import { smoothScroll } from "../utilities/scroll";

export default function Introduction() {
    return (
        <section className="flex h-[calc(100vh-5rem)] flex-col justify-center gap-4">
            <h1 className="font-roboto-mono pb-2 pl-1 text-lg text-red-200">Hello, my name is</h1>
            <div className="text-6xl font-bold text-slate-300">Fatih Arapoğlu.</div>
            <div className="text-6xl font-bold text-slate-400">I build web applications.</div>
            <div className="w-2/3 pt-2">
                I’m a <strong className="text-red-200">Full-stack Developer</strong> who loves to work with modern{" "}
                <strong className="text-red-200">JavaScript</strong>. My proficiency spans the complete web development
                spectrum, utilizing my diverse background in both chemical engineering and full-stack programming. Currently,
                I’m focused on learning everything related to Full-stack Web Development.
            </div>
            <button
                className="font-roboto-mono mt-4 inline-flex gap-2 self-start rounded border border-slate-800/90 px-8 py-4 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                onClick={() => smoothScroll("projects")}
            >
                View my projects <ReactSVG src="/svg/up.svg" className="rotate-180 fill-current text-slate-300" />
            </button>
        </section>
    );
}
