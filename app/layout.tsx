import "./globals.css";
import Script from "next/script";
import IubendaScripts from "./components/IubendaScripts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Babol Web dashboard',
  description: 'Babol is the application that allow you to have all the informations about your event in a single place!',
}
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
      <body className={"overflow-x-hidden bg-app-gradient min-h-screen"}>
        <IubendaScripts />
        {children}
      </body>
    </html>
  );
}
