"use client"
import Image from "next/image";
import { createClient } from '@supabase/supabase-js'
import React, { useEffect } from "react";
import LottieIphone from "./components/LottiePlayer";
import Link from "next/link";
import LottieButton from "./components/LottieButton";


export default function Home() {
  const supabase = createClient('https://uofooaquvefawwmqfren.supabase.co', process.env.NEXT_PUBLIC_SUPABASE || "")
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [emailErr, setEmailErr] = React.useState(false);
  const register = async () => {
    setIsLoading(true)
    if (!email.includes('@') || !email.includes('.') || !email) {
      setEmailErr(true)
      setIsLoading(false)
      return
    }
    setEmailErr(false)
    const { data, error } = await supabase
      .from('email_newsletter')
      .insert([{ email }])
    if (error) {
      alert('An error occurred')
      setIsLoading(false)
    } else {
      setEmail('');
      window.location.href = '/thank-you'
    }
    setIsLoading(false)
  }

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const circle: any = document.querySelector('.circle');
      if (circle) {
        const x = e.clientX;
        const y = e.clientY;
        const newPosX = x - 60;
        const newPosY = y - 60;
        circle.style.transform = `translate3d(${newPosX}px, ${newPosY}px, 0px)`;
      }
    };

    const box = document.querySelector('.box');
    const body = document.querySelector('body')!;
    if (box && body) {
      body.addEventListener('mousemove', handleMouseMove);
      box.addEventListener('click', handleMouseMove);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (box) {
        body.removeEventListener('mousemove', handleMouseMove);
        box.removeEventListener('click', handleMouseMove);
      }
    };
  }, []);
  return (
    <>
      <div className="box overflow-visible w-full">
        <div className="circle"></div>
      </div>
      <main className="flex min-h-screen flex-col bg-[url('/bg-mobile.svg')] sm:bg-[url('/bg.svg')] bg-cover bg-no-repeat md:h-[100vh] md:justify-center justify-end
        sm:px-[0px]
        md:px-[10px]
        2xl:px-[340px]
        md:overflow-hidden">
        <div className="flex flex-row w-full p-[16px] md:px-[42px] md:mt-4">
          <Image
            src="/logo.svg"
            alt="Babol Logo"
            className="md:mb-12 cursor-pointer"
            width={108}
            height={25}
          />
          <div className="md:hidden justify-end flex w-full">
            <div className="flex flex-row gap-[16px]">
              <Link href={"https://www.instagram.com/babol.app/"}><Image src="/instagram.svg" alt="Linkedin" width={24} height={24} className="cursor-pointer" /></Link>
              <Link href={"https://linkedin.com/aa"}><Image src="/linkedin.svg" alt="Linkedin" width={24} height={24} /></Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-6 md:mt-0 md:h-full gap-20 md:gap-10 sm:gap-2">
          <div className="relative flex flex-col  before:rounded-full z-10 w-full md:w-3/6 justify-center items-center md:items-start md:pl-[42px] px-[10px] md:px-[0px]">
            <p className="text-[34px] md:text-[56px] text-center md:text-left" style={{
              lineHeight: '1.2'
            }}>
              The new way to<br />manage your event.<br /><strong className="text-[#A08CF3]" style={{ fontFamily: 'satoshiBold' }}>All in one place.</strong>
            </p>
            <p className="mt-[56px] mb-[24px] text-white text-[18px] text-center md:text-left">
              Join the beta and transform event management today!
            </p>
            <div className="flex flex-row bg-[#FFFFFF1F] rounded-[16px] pl-[16px] py-[4px] pr-[4px] gap-[4px] border border-white">
              <input
                className="py-2 text-left bg-transparent z-10 flex h-[48px] w-[231px] text-[17px] text-white focus:outline-none placeholder-white "
                placeholder="Enter your email"
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <button className="p-[16px] rounded-[12px] text-white z-10 bg-[#101011] h-[48px] text-[17px] font-bold justify-center items-center flex whitespace-nowrap" onClick={() => { register() }}>{!isLoading ? "Join beta" : <LottieButton />}</button>
            </div>
            {emailErr && <p className="text-red-400 text-[14px] md:text-[16px]">An error occurred! Please verify your email or try again.</p>}
            <p className="mt-2 text-[12px] md:text-[16px]">
              By joining the beta program you accept our <Link className="font-bold text-[#A08CF3]" href={"/terms_conditions.pdf"}>Terms & Conditions</Link>
            </p>
            <div className="absolute bottom-0 pb-[42px] flex-row justify-center gap-[16px] hidden md:flex">
              <span>Follow us</span>
              <div className="flex flex-row gap-[16px]">
                <Link href={"https://www.instagram.com/babol.app/"}><Image src="/instagram.svg" alt="Linkedin" width={24} height={24} className="cursor-pointer" /></Link>
                <Link href={"https://linkedin.com/aa"}><Image src="/linkedin.svg" alt="Linkedin" width={24} height={24} /></Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/6 relative flex md:justify-end md:items-end items-center justify-center h-full md:mt-[15px]">
            <LottieIphone />
          </div>
        </div>
      </main>
    </>

  );
}
