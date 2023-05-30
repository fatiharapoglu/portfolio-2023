import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

export default function Header() {
    const [isHidden, setIsHidden] = useState(false);

    const scrollToTop = () => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    };

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
            } sticky top-0 z-50 flex h-24 w-full items-center justify-between bg-slate-900/90 px-24 text-sm backdrop-blur-sm`}
        >
            <div onClick={scrollToTop}>
                <Image
                    className="h-12 w-12 cursor-pointer rounded-full border border-slate-600 mix-blend-lighten"
                    src={logo}
                    alt="logo"
                />
            </div>
            <ul className="font-roboto-mono flex items-center gap-8">
                <li>
                    <Link href={"#about"}>
                        <span className="list-number">1.</span> About
                    </Link>
                </li>
                <li>
                    <Link href={"#toolbox"}>
                        <span className="list-number">2.</span> Toolbox
                    </Link>
                </li>
                <li>
                    <Link href={"#projects"}>
                        <span className="list-number">3.</span> Projects
                    </Link>
                </li>
                <li>
                    <Link href={"#resume"}>
                        <span className="list-number">4.</span> Resume
                    </Link>
                </li>
                <li>
                    <Link href={"#contact"}>
                        <span className="list-number">5.</span> Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
}
