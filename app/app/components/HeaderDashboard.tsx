"use client"
import Image from "next/image";
import Logo from "../assets/logo.svg";
import avatar from "../assets/icon-profile.svg";
import iconBell from "../assets/icon-bell.svg";
import iconSettings from "../assets/icon-settings.svg";
import { useEffect, useState } from "react";
import { getLoggedUserProfile, logout } from "../utils/user";
export const HeaderDashboard = () => {
    const [userData, setUserData] = useState<any>(null);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getLoggedUserProfile();
            setUserData(response?.data);
        }
        fetchData();
    }, []);
    const _logout = async () => {
        await logout();
        window.location.href = "/app/login";
    }
    return (
        <div className="flex h-[40px] flex-row justify-between">    
            <h1 className="text-4xl font-bold cursor-pointer">
                <Image src={Logo} alt="Babol" width={108} height={32}  onClick={
                    () => {
                        window.location.href = "/app/dashboard";
                    }
                }/>
            </h1>
            <div className="flex flex-row gap-lg">
                <Image src={iconBell} alt="Babol" width={24} height={24} />
                <Image src={process.env.NEXT_PUBLIC_SUPABASE_USER_URL_STORAGE+"/"+userData?.uuid+"/avatar.jpeg"} alt="Babol" width={40} height={40} className="rounded-full cursor-pointer" onClick={() => {
                    setOpenSubMenu(!openSubMenu);
                }}/>
                {
                    openSubMenu && <div className="absolute top-20 right-6 bg-white rounded-md shadow-md p-4">
                        <div className="flex flex-col gap-xs">
                            <span className="text-black font-satoshiBold cursor-pointer" onClick={() => {
                                _logout();
                            }}>Logout</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}