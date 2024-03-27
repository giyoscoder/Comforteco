'use client'
import Script from "next/script";
import type { Metadata } from "next";
import { useEffect } from "react";
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'http-equiv="Content-Type" content="text/html; charset=UTF-8'
}

function MyApp() {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        window.gtag('js', new Date());
        window.gtag('config', 'G-KZN196LQ65');
    }, [])

    return (
        <div>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            </Head>
            <body>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KZN196LQ65" />
            </body>
        </div>
    )
}

export default MyApp
