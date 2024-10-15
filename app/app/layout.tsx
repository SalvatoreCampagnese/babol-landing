"use client";
import IubendaScripts from "../components/IubendaScripts";
import { Footer } from "./components/Footer";
import { Suspense } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full md:p-[24px] p-2">
        <ReactQueryProvider>
          <div className="flex flex-col gap-lg overflow-x-hidden" id="wrapper">
            <IubendaScripts />
            {children}
          </div>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
