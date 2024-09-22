"use client"
import "./globals.css";
import Script from "next/script";
import IubendaScripts from "./components/IubendaScripts";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <html lang="en">
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" />
        <Script src="https://unpkg.com/split-type" />
        <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js" />

        <Script src="/animation.js" />
      </head>
      <body className={isDashboard ? "relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full md:p-[24px] p-2" : "overflow-x-hidden bg-app-gradient min-h-screen"}>
        <IubendaScripts />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
