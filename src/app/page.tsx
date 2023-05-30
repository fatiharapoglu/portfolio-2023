"use client";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default function Home() {
    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimation(false);
        }, 3500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (animation) return <Loading />;

    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
