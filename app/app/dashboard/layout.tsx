"use client"
import type { Metadata } from "next";
import IubendaScripts from "../../components/IubendaScripts";
import { Footer } from "../components/Footer";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { Suspense } from "react";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full md:p-[24px] p-2">
        <div
          className="flex flex-col gap-lg overflow-x-hidden"
          id="wrapper"
        >
          <HeaderDashboard />
          <IubendaScripts />

          <Suspense>{children}</Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}
