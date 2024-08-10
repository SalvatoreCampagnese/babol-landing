import type { Metadata } from "next";
import IubendaScripts from "../../components/IubendaScripts";
import { Footer } from "../components/Footer";
import { HeaderDashboard } from "../components/HeaderDashboard";

export const metadata: Metadata = {
  title: "Babol App",
  description: "Organize your events in a new way! Everything in one place!",
};
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full">
        <div
          className="flex flex-col gap-lg overflow-x-hidden"
          id="wrapper"
        >
          <HeaderDashboard />
          <IubendaScripts />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
