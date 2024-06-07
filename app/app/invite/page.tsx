"use client";
import { useState, useEffect } from "react";
function InvitePage() {
    const [location, setLocation] = useState<string>("");
    // useeffect that get the current window location
    useEffect(() => {
        setLocation(window?.location?.href);
    }, []);
    return (
        <div className="flex min-h-screen flex-col bg-[url('/bg.svg')] bg-cover bg-no-repeat h-full justify-center items-center sm:px-[150px] sm:overflow-hidden">
            <p className="text-[34px] sm:text-[56px] text-center sm:text-left" style={{
                lineHeight: '1.2'
            }}>
                Do you already have Babol? <a className="text-[#A08CF3]" style={{ fontFamily: 'satoshiBold' }} href={location}>Click Here</a>
            </p>
            <p className="text-[20px] sm:text-[24px] text-center sm:text-left" style={{
                lineHeight: '1.2'
            }}>
                or download it <a className="text-[#A08CF3]" style={{ fontFamily: 'satoshiBold' }} href={location}>HERE</a>
            </p>
        </div>
    );
}

export default InvitePage;