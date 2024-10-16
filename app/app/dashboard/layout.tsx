import { Suspense } from "react";
import IubendaScripts from "../../components/IubendaScripts";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-surfaceBlack min-h-screen overflow-x-hidden max-w-full md:p-[24px] p-2" id="wrapper">
      <HeaderDashboard />
      <IubendaScripts />
      <Suspense>{children}</Suspense>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
