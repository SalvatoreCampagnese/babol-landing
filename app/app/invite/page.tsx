"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { getLoggedUserProfile } from "../utils/user";
import Link from "next/link";
import Image from "next/image";
import iosQrCode from "../assets/ios.png";
import androidQrCode from "../assets/android.png";
function InvitePage() {
  // http://babol.app/app/invite?c=te6d8l2bx9
  const router = useRouter();
  const searchParams = useSearchParams();
  const invite_code = searchParams.get("c");

  useEffect(() => {
    const fetchBabolByInvite = async () => {
      const userData = await supabase.auth.getSession();
      if (!userData?.data?.session) {
        //router.replace("https://www.babol.app/app/login");
        return;
      }
      const { data: babol, error: errorBabol } = await supabase
        .from("babols")
        .select("id")
        .eq("invite_code", invite_code)
        .single();
      if (!babol || errorBabol) {
        router.replace("/app/");
        return;
      }

      router.push(`/app/babol/${babol.id}?invite_code=${invite_code}`);
    };
    fetchBabolByInvite();
  }, [invite_code]);
  return (
    <>
      <div className="fixed w-full h-fit rounded-md flex flex-col bg-white text-black p-4 md:p-16 text-center overflow-y-scroll relative">
        <h1 className="text-3xl font-satoshiBold text-black bold">
          Join Babol
        </h1>
        If you are not automatically redirect, click the link below
        <br />
        <Link
          href={"babol://app/invite?c=" + invite_code}
          className="text-xl font-satoshiBold font-bold"
        >
          OPEN INVITE
        </Link>
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="mt-6 flex flex-col md:gap-2">
            <h3 className="text-black font-satoshiBold text-xl md:text-3xl">
              Download the iOS app
            </h3>
            <span className="text-black">
              Scan the QR code or{" "}
              <Link
                href={"https://apps.apple.com/us/app/babol/id6478817773"}
                target="_blank"
              >
                click here
              </Link>
            </span>
            <Image src={iosQrCode} alt="qr-code" width={1000} height={1000} />
          </div>
          <div className="flex flex-col md:flex-row md:gap-16">
            <div className="mt-6 flex flex-col md:gap-2">
              <h3 className="text-black font-satoshiBold text-xl md:text-3xl">
                Download the android app
              </h3>
              <span className="text-black">
                Scan the QR code or{" "}
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.babol.app&pli=1"
                  }
                  target="_blank"
                >
                  click here
                </Link>
              </span>
              <Image
                src={androidQrCode}
                alt="qr-code"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <span className="text-black mt-4">
          For all other info go to{" "}
          <Link href={"www.babol.app"}>www.babol.app</Link>
        </span>
      </div>
    </>
  );
}

export default InvitePage;
