import type { Metadata } from "next";
import IubendaScripts from "../../components/IubendaScripts";
import { Footer } from "../components/Footer";
import { HeaderDashboard } from "../components/HeaderDashboard";

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
      <body className="relative px-xxl py-lg flex flex-col gap-[32px] bg-surfaceBlack overflow-hidden">
        <HeaderDashboard />
        <IubendaScripts />
        {children}
      </body>
    </html>
  );
}
