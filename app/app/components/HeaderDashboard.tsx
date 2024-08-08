import Image from "next/image";
import Logo from "../assets/logo.svg";
import { Button } from "./Button";
import avatar from "../assets/icon-profile.svg";
import iconBell from "../assets/icon-bell.svg";
import iconSettings from "../assets/icon-settings.svg";
export const HeaderDashboard = () => {
    return (
        <div className="flex h-[40px] flex-row justify-between">
            <h1 className="text-4xl font-bold">
                <Image src={Logo} alt="Babol" width={108} height={32} />
            </h1>
            <div className="flex flex-row gap-lg">
                <Image src={avatar} alt="Babol" width={40} height={40} className="rounded-full" />
                <div className="flex flex-row gap-md">
                    <Image src={iconBell} alt="Babol" width={24} height={24} />
                    <Image src={iconSettings} alt="Babol" width={24} height={24} />
                </div>
            </div>
        </div>
    );
}