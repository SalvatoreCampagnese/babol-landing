"use client"
import IubendaScripts from "../../components/IubendaScripts";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { supabase } from "../utils/supabase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ReduxProvider from "../StoreProvider";
import { getLoggedUserProfile } from "../utils/user";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router= useRouter()
  useEffect(()=>{
    const getLoggedData = async () => {
      const {data:loggedUser} = await getLoggedUserProfile();
      console.log('loggedUser',loggedUser)
      if(loggedUser?.id && !loggedUser?.initialized){
        router.replace('/app/login?step=signup');
      }else if(loggedUser?.id){
        router.replace('/app/dashboard')
      }
    }
    getLoggedData();
  },[])
  return (
    <>
      <ReduxProvider>
      <div className="relative bg-app-gradient min-h-screen">
        <div className="p-[24px] flex flex-col gap-[24px] overflow-x-hidden" id="wrapper">
          <Header />
          <IubendaScripts />
          {children}
        </div>
        <Footer />
      </div>
      </ReduxProvider>
    </>
  );
}
