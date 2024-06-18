"use client"
import Image from "next/image";
import Link from "next/link";


export default function ThankYou() {
  return (
    <>
      <div className="box overflow-visible w-screen">
        <div className="circle"></div>
      </div>
      <main className="flex min-h-screen flex-col bg-[url('/bg-mobile.svg')] sm:bg-[url('/bg2.svg')] bg-cover bg-no-repeat h-[100vh] justify-center
        px-[10px]
        md:overflow-hidden">
        <div className="flex flex-row w-full p-[16px] md:px-[42px] md:mt-4 absolute top-0">
          <Image
            src="/logo.svg"
            alt="Babol Logo"
            className="md:mb-12 cursor-pointer"
            width={108}
            height={25}
          />
        </div>
        <div className="flex flex-col mt-6 md:mt-0 md:h-full gap-20 md:gap-10 sm:gap-2 w-full justify-center items-center">
        <p className="text-[34px] md:text-[56px] text-center" style={{
              lineHeight: '1.2'
            }}>
              Thanks!<br />you&#39;re on the <strong className="text-[#A08CF3]" style={{ fontFamily: 'satoshiBold' }}>waitlist!.</strong>
            </p>
            <p className="text-[18px] text-center">
            Your submission has been received! <br/>
            We&apos;re rolling out access to Babol week by week.<br/><br/>
            See you soon — Team Babol
            </p>
            <div className="mt-12 flex-row justify-center gap-[16px] hidden md:flex">
              <span>Follow us</span>
              <div className="flex flex-row gap-[16px] z-10">
                <Link href={"https://www.instagram.com/babol.app/"} className="cursor-pointer"><Image src="/instagram.svg" alt="Linkedin" width={24} height={24} /></Link>
                <Link href={"https://linkedin.com/aa"} className="cursor-pointer"><Image src="/linkedin.svg" alt="Linkedin" width={24} height={24} className="cursor-pointer" /></Link>
              </div>
            </div>
        </div>
      </main>
    </>

  );
}
