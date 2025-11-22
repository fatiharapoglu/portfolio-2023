import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import "../../styles/globals.scss";

export const metadata = {
    title: "Fatih Arapoğlu | Full-Stack & Integration Developer",
    description: "Full-Stack & Integration Developer delivering enterprise integrations, self-hosted platforms, and modern web products.",
    keywords: "Fatih Arapoğlu, integration developer, full-stack developer, Next.js, MuleSoft, Salesforce, Supabase, Fettan, Ankara",
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

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
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
                    relative overflow-x-hidden scroll-smooth bg-slate-950 leading-relaxed text-slate-400 antialiased selection:bg-blue-300 selection:text-blue-900`}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <canvas id="canvas" className="fixed inset-0 -z-10 h-screen w-screen"></canvas>
            </body>
        </html>
    );
}
