"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

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
        if (animation) return;

        let cancelled = false;
        let idleId: number | undefined;
        let timeoutId: number | undefined;

        const startStarField = async () => {
            try {
                const { starField } = await import("../utilities/starField.js");
                if (!cancelled) {
                    starField();
                }
            } catch (error) {
                console.error("Starfield failed to start", error);
            }
        };

        const requestIdleCallbackFn = (window as any).requestIdleCallback as ((cb: () => void, opts?: { timeout?: number }) => number) | undefined;

        if (typeof requestIdleCallbackFn === "function") {
            idleId = requestIdleCallbackFn(startStarField, { timeout: 1500 });
        } else {
            timeoutId = window.setTimeout(startStarField, 800);
        }

        return () => {
            cancelled = true;
            if (idleId) {
                (window as any).cancelIdleCallback?.(idleId);
            }
            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [animation]);

    if (animation) return <Loading />;

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
