"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IconProfile = ({
  userData,
  _logout,
}: {
  userData: any;
  _logout: Function;
}) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event:any) => {
      if (!ref.current || !ref.current?.contains(event.target)) {
        setOpenSubMenu(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  return (
    <div className="flex flex-row gap-lg">
      {/* <Image src={iconBell} alt="Babol" width={24} height={24} /> */}
      <Image
        src={
          process.env.NEXT_PUBLIC_SUPABASE_USER_URL_STORAGE +
          "/" +
          userData?.uuid +
          "/avatar.jpeg"
        }
        alt="Babol"
        width={40}
        height={40}
        className="rounded-full cursor-pointer"
        onClick={() => {
          setOpenSubMenu(!openSubMenu);
        }}
      />
      {openSubMenu && (
        <div className="absolute top-20 right-6 bg-white rounded-md shadow-md p-4" ref={ref}>
          <div className="flex flex-col gap-xs">
            <span
              className="text-black font-satoshiBold cursor-pointer"
              onClick={() => {
                _logout();
              }}
            >
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default IconProfile;
