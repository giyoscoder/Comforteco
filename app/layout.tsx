
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import I18NextProvider from "@/components/I18NextProvider";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
// import MyApp from "./_app";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ремонт котлов в Ташкенте: быстро, качественно, доступно",
  description: "Сервисное обслуживание газовых котлов. Чистка, замена запчастей, монтаж. Ремонт газовых котлов любой сложности. СервисКотлов - тепло и уют в вашем доме!",

  icons: {
    icon: [
      {
        url: '/Assets/Images/favicon.png',
        href: '/Assets/Images/favicon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18NextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Contact />
          <Footer />
          {/* <MyApp /> */}
        </body>
      </html>
    </I18NextProvider>
  );
}
