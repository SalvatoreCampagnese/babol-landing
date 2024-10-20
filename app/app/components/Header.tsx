"use client"
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { Button } from "./Button";
import { useState } from "react";
import { ModalDownloadApp } from "./modals/ModalDownloadApp";
import { useRouter } from "next/navigation";
export const Header = () => {
    const router = useRouter()
    const [showModalDownload, setShowModalDownload] = useState(false);
    return (
        <>
        <ModalDownloadApp open={showModalDownload} hideModal={() => setShowModalDownload(false)}/>

        <div className="flex h-[40px] flex-row justify-between items-center">
            <h1 className="text-4xl font-bold">
                <Image src={Logo} alt="Babol" width={108} height={32} className="cursor-pointer" onClick={() => {
                    router.push("/app/login");
                }}/>
            </h1>
            <Button text="Download the app" onClickFn={() => setShowModalDownload(true)}/>
        </div>
        </>
    );
}