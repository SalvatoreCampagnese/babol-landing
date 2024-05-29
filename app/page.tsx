"use client"
import Image from "next/image";
import { createClient } from '@supabase/supabase-js'
import React from "react";


export default function Home() {
  const supabase = createClient('https://uofooaquvefawwmqfren.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZm9vYXF1dmVmYXd3bXFmcmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzI1MzIsImV4cCI6MjAxMTkwODUzMn0.iwFsx5tnVUUUIpxlH2p3hWxHsgqG9oXxilFg5h24RlI')
  const [email, setEmail] = React.useState('');
  const [registered, setRegistered] = React.useState(false);
  const [emailErr, setEmailErr] = React.useState(false);
  const [errorTerm, setErrorTerm] = React.useState(false);
  const [term, setTerm] = React.useState(false);
  const register = async () => {
    if(!term){
      setErrorTerm(true);
      return;
    }
    if (!email.includes('@') || !email.includes('.') || !email) {
      setEmailErr(true)
      return
    }
    setEmailErr(false)
    const { data, error } = await supabase
      .from('email_newsletter')
      .insert([{ email }])
    if (error) {
      alert('An error occurred')
    } else {
      setEmail('');
      setErrorTerm(false);
      setRegistered(true);
    }
  }

  return (
    <main className="flex min-h-screen flex-row bg-[url('/bg.svg')] bg-[100%] bg-no-repeat h-full">
      <div className="min-h-screen w-3/6 sm:block relative hidden">
        <div className="bg-[url('/cell.png')] min-h-full sm:bg-center bg-cover" >&nbsp;</div>
      </div>
      <div className="relative flex flex-col  before:rounded-full z-10 w-full sm:w-3/6 justify-center items-start px-[24px] sm:px-0">

        <Image
          src="/logo.svg"
          alt="Babol Logo"
          className="mb-12"
          width={280}
          height={60}
        />
        <p className="text-[28px] sm:text-[38px] ">
          <strong>Subscribe now</strong><br />to get updated on Babol
        </p>
        <input className="py-2 mt-10 text-left bg-transparent z-10 w-full sm:w-4/6 border-b h-[60px] text-3xl text-white focus:outline-none" placeholder="Email..." type='text'
          value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailErr && <p className="text-red-500">Email not valid!</p>}
        <div className="flex flex-row justify-center items-center mt-4 gap-2">
          <input type="checkbox" className="rounded-full h-[20px] w-[20px] bg-black" checked={term} onChange={(e) => setTerm(e.target.checked)}/> <span className={`${errorTerm ? 'text-red-600' :'text-white'}`}>Accept to receive any news about Babol!</span>
        </div>
        {registered ? <p className="text-white text-[25px] mt-8">You have been registered!</p> : <button className="px-4 py-2 text-white rounded-lg z-10 w-full sm:w-4/6 bg-[#5831F5] mt-10 h-[70px] text-[22px] font-bold" onClick={() => { register() }}>Let me know!</button>}
      </div>
    </main>
  );
}
