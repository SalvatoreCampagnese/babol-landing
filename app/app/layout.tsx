import type { Metadata } from "next";
import IubendaScripts from "../components/IubendaScripts";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Babol App",
  description: "Organize your events in a new way! Everything in one place!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="p-[24px] flex flex-col gap-[24px] bg-app-gradient overflow-x-hidden">
        <Header />
        <IubendaScripts />
        {children}
        <Footer />
      </body>
    </html>
  );
}
