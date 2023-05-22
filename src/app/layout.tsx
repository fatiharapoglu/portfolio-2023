import localFont from "next/font/local";

import "../styles/globals.css";

export const metadata = {
    title: "Fatih Arapoğlu",
    description: "Personal portfolio of Fatih Arapoğlu, made in 2023.",
    keywords: "portfolio, fatih, arapoğlu, fatih arapoğlu, fettan",
    author: "Fatih Arapoğlu",
};

const oxygen = localFont({
    src: [
        {
            path: "../fonts/Oxygen-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/Oxygen-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Oxygen-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${oxygen.className}
                    scroll-smooth bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-blue-300 selection:text-blue-900`}
            >
                {children}
            </body>
        </html>
    );
}
