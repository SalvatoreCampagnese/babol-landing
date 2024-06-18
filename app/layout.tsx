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
      <body className={"overflow-hidden"}>{children}</body>
        <IubendaScripts />
    </html>
  );
}
