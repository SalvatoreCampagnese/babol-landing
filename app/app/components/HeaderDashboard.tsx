"use client";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { getLoggedUserProfile, logout } from "../utils/user";
import Link from "next/link";
import IconProfile from "./IconProfile";
import { useEffect, useState } from "react";
export const HeaderDashboard = async () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await getLoggedUserProfile();
      setUserData(userData);
    };
    fetchData();
  }, []);
  const _logout = async () => {
    await logout();
    window.location.href = "/app/login";
  };
  return (
    <div className="flex h-[40px] flex-row justify-between">
      <h1 className="text-4xl font-bold cursor-pointer">
        <Image
          src={Logo}
          alt="Babol"
          width={108}
          height={32}
          onClick={() => {
            window.location.href = "/app/dashboard";
          }}
        />
      </h1>
      {userData ? (
        <IconProfile userData={userData} _logout={_logout} />
      ) : (
        <div className="flex flex-row gap-lg">
          <Link href={"Download the app"} className="font-satoshi text-white">
            Download the app
          </Link>
        </div>
      )}
    </div>
  );
};
