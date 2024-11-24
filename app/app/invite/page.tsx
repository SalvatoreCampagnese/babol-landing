"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { getLoggedUserProfile } from "../utils/user";
function InvitePage() {
  // http://babol.app/app/invite?c=te6d8l2bx9
  const router = useRouter();
  const searchParams = useSearchParams();
  const invite_code = searchParams.get("c");

  useEffect(() => {
    const fetchBabolByInvite = async () => {
      const loggedUser = await getLoggedUserProfile();
      if (!loggedUser) {
        router.replace("https://www.babol.app/app/login");
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
