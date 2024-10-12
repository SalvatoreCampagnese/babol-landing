"use client"
import { useEffect } from "react";
import { supabase } from "./utils/supabase";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    // redirect based on user's auth state
    useEffect(() => {
        const fetchSession = async () => {

            // If signed in, redirect to dashboard
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                router.replace("/app/dashboard");
            }else{
                router.replace("/app/login");
            }
        }
        fetchSession();
    }, []);
    return <></>
}