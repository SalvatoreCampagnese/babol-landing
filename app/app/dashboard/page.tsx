"use client"
import { useEffect } from "react";
import { TabsContainer } from "../components/dashboard/TabContainer";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";

const Page = () => {
  const router = useRouter();
  useEffect(() =>{
    const fetchUser = async () => {
      const { data: logged_user, error: error_user } = await supabase.auth.getUser();
      if(!logged_user || error_user)
        router.replace('/app/login')
    }
    fetchUser();
  }, [])
  return (
    <div className="flex flex-col min-h-screen px-4">
      <TabsContainer />
    </div>
  );
};
export default Page;
