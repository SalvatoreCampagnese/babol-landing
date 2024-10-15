"use client"
import IubendaScripts from "../../components/IubendaScripts";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ReduxProvider from "../StoreProvider";
import { supabase } from "../utils/supabase";
import { useEffect } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const fetchSession = async () => {

      // If signed in, redirect to dashboard
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        //window.location.href = "/app/dashboard";
      }
    }
    fetchSession();
  },[]);
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
