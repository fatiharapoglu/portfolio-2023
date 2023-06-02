import { useEffect, useState } from "react";
import Image from "next/image";

import logo from "../../../public/logo.png";
import { smoothScroll } from "../utilities/scroll";

export default function Header() {
    const [isHidden, setIsHidden] = useState(false);

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
            } sticky top-0 z-50 flex h-24 w-full items-center justify-between border-b border-slate-800/90 bg-slate-900/90 px-24 text-sm shadow-sm backdrop-blur-sm`}
        >
            <div onClick={() => smoothScroll("")}>
                <Image
                    className="h-12 w-12 cursor-pointer rounded-full border border-slate-800/90 mix-blend-lighten transition-all duration-300 hover:scale-105"
                    src={logo}
                    alt="logo"
                />
            </div>
            <ul className="font-roboto-mono flex items-center gap-8">
                <li className="text-slate-300 transition-colors duration-300 hover:text-red-300">
                    <button onClick={() => smoothScroll("about")}>
                        <span className="list-number">1.</span> About
                    </button>
                </li>
                <li className="text-slate-300 transition-colors duration-300 hover:text-red-300">
                    <button onClick={() => smoothScroll("toolbox")}>
                        <span className="list-number">2.</span> Toolbox
                    </button>
                </li>
                <li className="text-slate-300 transition-colors duration-300 hover:text-red-300">
                    <button onClick={() => smoothScroll("projects")}>
                        <span className="list-number">3.</span> Projects
                    </button>
                </li>
                <li className="text-slate-300 transition-colors duration-300 hover:text-red-300">
                    <button onClick={() => smoothScroll("contact")}>
                        <span className="list-number">4.</span> Contact
                    </button>
                </li>
            </ul>
        </header>
    );
}
