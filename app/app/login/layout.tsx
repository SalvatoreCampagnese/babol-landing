import type { Metadata } from "next";
import IubendaScripts from "../../components/IubendaScripts";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
      <head></head>
      <body className="relative bg-app-gradient min-h-screen">
        <div className="p-[24px] flex flex-col gap-[24px] overflow-x-hidden" id="wrapper">
          <Header />
          <IubendaScripts />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
