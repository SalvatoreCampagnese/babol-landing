"use client"
import IubendaScripts from "../../components/IubendaScripts";
import { Footer } from "../components/Footer";
import { HeaderDashboard } from "../components/HeaderDashboard";
import ReduxProvider from "../StoreProvider";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full p-[24px] ">
        <div
          className="flex flex-col gap-lg overflow-x-hidden"
          id="wrapper"
        >
          <HeaderDashboard />
          <IubendaScripts />
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
