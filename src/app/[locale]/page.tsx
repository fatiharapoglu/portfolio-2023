"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { starField } from "../utilities/starField.js";

export default function HomePage() {
    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimation(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        starField();
    }, []);

    if (animation) return <Loading />;

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
