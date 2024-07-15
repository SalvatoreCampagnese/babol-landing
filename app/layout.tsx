import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import IubendaScripts from "./components/IubendaScripts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Babol App",
  description: "Organize your events in a new way! Everything in one place!",
};
const myPolicy = 63663365;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" />
      <Script src="https://unpkg.com/split-type" />
      <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js" />
      
      <Script src="/animation.js" />
      </head>
        <IubendaScripts />
      <body>{children}</body>
    </html>
  );
}
