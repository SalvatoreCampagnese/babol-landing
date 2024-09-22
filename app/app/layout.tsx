"use client";
import IubendaScripts from "../components/IubendaScripts";
import { Footer } from "./components/Footer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full md:p-[24px] p-2">
        <div className="flex flex-col gap-lg overflow-x-hidden" id="wrapper">
          <IubendaScripts />

          <Suspense>{children}</Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}
