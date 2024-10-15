import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "../Button";

function ModalError({closeFn, babolData}:{closeFn:Function, babolData:any}) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event:any) => {
      if (!ref.current || !ref.current?.contains(event.target)) {
        closeFn()
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border w-96 shadow-lg rounded-md bg-white" ref={ref}>
          <div className="text-left">
            <h1 className="text-2xl text-black">{babolData?.name}</h1>
            <h2 className="text-black mt-2">{babolData?.description}</h2>
            <div className="flex flex-col">
                <p className="text-black text-md mt-4">Category</p>
                <div className="px-4 py-1 text-black font-bold gap-2 w-fit bg-surfaceAccentExtraLight rounded-full mt-1">{babolData?.category?.emoji}&nbsp;{babolData?.category?.name}</div>
            </div>
            <div className="flex flex-col">
                <p className="text-black text-md mt-4">Hosted by</p>
                <div className="px-2 py-1 text-black font-bold w-fit bg-surfaceAccentExtraLight rounded-full mt-1 flex flex-row gap-1"><Image src={process.env.NEXT_PUBLIC_SUPABASE_USER_URL_STORAGE+"/"+babolData?.creator_id?.uuid+"/avatar.jpeg"} height={25} width={25} alt="avatar" className="rounded-full" /> {babolData?.creator_id?.full_name}</div>
            </div>        
          </div>
          <div className="w-full flex justify-center">
            <Button text={"Close"} onClickFn={() => closeFn()} customClasses="mt-4 max-h-xxl"></Button>
          </div>
        </div>
      </div>
    );
  }
  export default ModalError