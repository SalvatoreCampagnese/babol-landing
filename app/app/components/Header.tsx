"use client"
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { Button } from "./Button";
import { useState } from "react";
import { ModalDownloadApp } from "./modals/ModalDownloadApp";
export const Header = () => {
    const [userData, setUserData] = useState<any>(null);
    const [showModalDownload, setShowModalDownload] = useState(false);
    return (
        <>
        {showModalDownload && <ModalDownloadApp hideModal={() => setShowModalDownload(false)}/>}

        <div className="flex h-[40px] flex-row justify-between items-center">
            <h1 className="text-4xl font-bold">
                <Image src={Logo} alt="Babol" width={108} height={32} className="cursor-pointer" onClick={() => {
                    window.location.href = "/login";
                }}/>
            </h1>
            <Button text="Download the app" onClickFn={() => setShowModalDownload(true)}/>
        </div>
        </>
    );
}