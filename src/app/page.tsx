"use client";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
    let animation = null;

    if (animation) return <div>ƒ</div>;

    return (
        <div className="">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
