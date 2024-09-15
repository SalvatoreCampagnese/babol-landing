import { Suspense } from "react";
import { FormBox } from "../components/login-form/FormBox";
import { supabase } from "../utils/supabase";
import { redirect } from 'next/navigation'
export default async function App() {
  const isLogged = await supabase.auth.getSession();
  console.log(isLogged);
  if (isLogged?.data?.session) {
    redirect("/app/dashboard");
  }
  return (
    <div className="w-full h-full flex justify-center">
      <Suspense>
        <FormBox />
      </Suspense>
    </div>
  );
}
