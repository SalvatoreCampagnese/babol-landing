"use client"
import IubendaScripts from "../../components/IubendaScripts";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { supabase } from "../utils/supabase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ReduxProvider from "../StoreProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router= useRouter()
  useEffect(() => {
    const fetchSession = async () => {

      // If signed in, redirect to dashboard
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace('/app/dashboard')
      }
    }
    fetchSession();
  },[]);
  return (
    <html lang="en">
      <head></head>
      <ReduxProvider>
      <body className="relative bg-app-gradient min-h-screen">
        <div className="p-[24px] flex flex-col gap-[24px] overflow-x-hidden" id="wrapper">
          <Header />
          <IubendaScripts />
          {children}
        </div>
        <Footer />
      </body>
      </ReduxProvider>
    </html>
  );
}
