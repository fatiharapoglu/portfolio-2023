import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";

import "../../styles/globals.scss";

export const metadata = {
    title: "Fatih Arapoğlu | Full-stack Developer",
    description: "Personal portfolio of Fatih Arapoğlu, made in 2023.",
    keywords: "portfolio, fatih, arapoğlu, arapoglu, fatih arapoglu, fatih arapoğlu, fettan, website",
    author: "Fatih Arapoğlu",
};

const oxygen = localFont({
    src: [
        {
            path: "../../fonts/Oxygen-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../fonts/Oxygen-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../fonts/Oxygen-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
});

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "tr" }];
}

const robotoMono = localFont({
    src: "../../fonts/RobotoMono.ttf",
    display: "swap",
    variable: "--font-roboto-mono",
});

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let messages;

    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body
                className={`${oxygen.className} ${robotoMono.variable}
                    relative overflow-x-hidden scroll-smooth bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-blue-300 selection:text-blue-900`}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <canvas id="canvas" className="fixed inset-0 -z-10 h-screen w-screen"></canvas>
                <Analytics />
            </body>
        </html>
    );
}
