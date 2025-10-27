import { ReactSVG } from "react-svg";

export default function Socials() {
    return (
        <div className="flex gap-2">
            <a href="https://github.com/fatiharapoglu/" target="_blank" className="flex flex-col rounded border border-slate-800/90 p-4 shadow-xl transition-colors duration-300 hover:bg-slate-800/90  hover:text-amber-100">
                <ReactSVG src="/svg/github.svg" className="w-8 rounded-full fill-current text-slate-200" />
            </a>
            <a href="https://www.linkedin.com/in/fatiharapoglu/" target="_blank" className="flex flex-col rounded border border-slate-800/90 p-4 shadow-xl transition-colors duration-300 hover:bg-slate-800/90  hover:text-amber-100">
                <ReactSVG src="/svg/linkedin.svg" className="w-8 rounded-full fill-current text-slate-200" />
            </a>
            <button onClick={() => window.open("mailto:contact@fatiharapoglu.com.tr")} className="flex flex-col rounded border border-slate-800/90 p-4 shadow-xl transition-colors duration-300 hover:bg-slate-800/90  hover:text-amber-100">
                <ReactSVG src="/svg/gmail.svg" className="w-8 rounded-full fill-current text-slate-200" />
            </button>
        </div>
    );
}
