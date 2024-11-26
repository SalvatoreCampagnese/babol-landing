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
        router.replace("https://www.babol.app/404?c=" + invite_code);
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
  return <></>;
}

export default InvitePage;
