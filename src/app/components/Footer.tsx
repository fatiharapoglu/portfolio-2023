import { ReactSVG } from "react-svg";

export default function Footer() {
    return (
        <footer className="font-roboto-mono mb-8 mt-32 flex flex-col items-center text-sm leading-relaxed">
            <p>Designed & built by Fatih Arapoğlu © 2023</p>
            <p>
                with{" "}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    className="font-bold transition-colors duration-300 hover:text-red-200"
                >
                    Next.js
                </a>
                ,{" "}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="font-bold transition-colors duration-300 hover:text-red-200"
                >
                    Tailwind CSS
                </a>{" "}
                and deployed on{" "}
                <a
                    href="https://vercel.com/"
                    target="_blank"
                    className="font-bold transition-colors duration-300 hover:text-red-200"
                >
                    Vercel
                </a>
                .
            </p>
            <a href="https://github.com/fatiharapoglu/portfolio-2023/" className="mt-2" target="_blank">
                <ReactSVG
                    src="/svg/github.svg"
                    className="w-6 rounded-full fill-current text-slate-200 transition-all duration-300 hover:scale-110 hover:text-red-200"
                />
            </a>
        </footer>
    );
}
