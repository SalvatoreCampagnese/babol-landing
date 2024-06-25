"use client";
import { useState, useEffect } from "react";
function DeleteAccount() {
    const [location, setLocation] = useState<string>("");
    // useeffect that get the current window location
    useEffect(() => {
        setLocation(window?.location?.href);
    }, []);
    return (
        <div className="flex min-h-screen flex-col bg-[url('/bg.svg')] bg-cover bg-no-repeat h-full justify-center items-center sm:px-[150px] sm:overflow-hidden">
            <p className="text-[24px] sm:text-[56px] text-center sm:text-left" style={{
                lineHeight: '1.2'
            }}>
                Log in into your account<br />
                Click on your Name on the top left (into the dashboard)<br />
                Click on &quot;Delete Account&quot; button

            </p>
        </div>
    );
}

export default DeleteAccount;