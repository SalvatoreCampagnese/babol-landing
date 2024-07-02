"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function LinkPage() {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = window.navigator.userAgent;
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "iOS";
      }

      return "unknown";
    }
    setDevice(handleDeviceDetection());
  }, []);

  useEffect(() => {
    if (device === "iOS") {
      window.location.href = "https://apps.apple.com/it/app/babol/id6478817773";
    }
    return
  }, [device]);

  return (
    <div className="flex min-h-screen flex-col bg-[url('/bg-mobile.svg')] sm:bg-[url('/bg2.svg')] bg-cover bg-no-repeat h-[100vh] justify-center
        px-[10px]
        md:overflow-hidden
        text-center">
      {device === '' ? <div>
        <p className="text-[34px] md:text-[40px] text-center font-bold text-shadow" style={{
          lineHeight: '1.2'
        }}>We are redirecting you! <span className="text-[#A08CF3]">Please wait...</span></p>
      </div> : device !== "ios" && device !== "android" ? <div className="text-[20px] md:text-[26px] text-center font-bold text-shadow" style={{
        lineHeight: '1.2'
      }}>

        We were unable to determine your Operating System...<br /><br />

        We are still working on the Android application, but if you have an <span className="text-[#A08CF3] font-bold">iPhone</span>, what are you waiting for?<br /><br /><br />

        <Link href={"https://apps.apple.com/it/app/babol/id6478817773"}><Image src="/apple.png" className="inline" alt="Apple Logo" width={240} height={70} /></Link> <br /><br />
      </div> : <div className="text-[20px] md:text-[26px] text-center font-bold text-shadow" style={{
        lineHeight: '1.2'
      }}>

        If the redirect does not work and you got an <span className="text-[#A08CF3] font-bold">iPhone</span>, please click the button above!<br /><br />
        <Link href={"https://apps.apple.com/it/app/babol/id6478817773"}><Image src="/apple.png" className="inline" alt="Apple Logo" width={240} height={70} /></Link> <br /><br />
        We are still working on the Android application, stay tuned!<br /><br />
      </div>
      }
    </div>
  );
}
