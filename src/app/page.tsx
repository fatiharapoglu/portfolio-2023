"use client";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default function Home() {
    let animation = true;

    if (animation) return <Loading />;

    return (
        <div className="">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
