"use client";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import loadingGif from "../../public/animated-logo.gif";
import Image from "next/image";

export default function Home() {
    let animation = false;

    if (animation)
        return (
            <div className="flex h-screen select-none items-center justify-center">
                <Image src={loadingGif} alt="loading" className="mix-blend-multiply" />
            </div>
        );

    return (
        <div className="">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
