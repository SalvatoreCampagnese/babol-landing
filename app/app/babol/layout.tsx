"use client"
import { Suspense } from "react";
import IubendaScripts from "../../components/IubendaScripts";
import { Footer } from "../components/Footer";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full p-[24px] overflow-y-hidden">
        <div
          className="flex flex-col gap-lg overflow-x-hidden overflow-y-hidden"
          id="wrapper"
        >
          <div className="hidden md:block"><HeaderDashboard /></div>
          <IubendaScripts />
          <Suspense>{children}</Suspense>
          <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            toastClassName={"bg-surfaceBlack"}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}/>
        </div>
      </body>
    </html>
  );
}
