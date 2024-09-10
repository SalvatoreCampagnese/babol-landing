"use client";
import { HeaderBox } from "./HeaderBox";
import iconPassword from "../../assets/icon-password.svg";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { useAppSelector } from "../../lib/store";
import { loginWithEmail } from "../../utils/user";
import { supabase } from "../../utils/supabase";
import { useRouter } from "next/navigation";

export const PasswordForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userData = useAppSelector((state) => state.user);

  const _loginWithEmail = async () => {
    try {
        if(!password) {
            window.alert('Password is required');
            return;
        }
        console.log(userData, password);
        const response = await loginWithEmail(userData.email, password);
        if (response.error) {
            throw response.error;
        }
        window.location.href = "/app/dashboard";
      
    } catch (e: any) {
      window.alert(e);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if(userData.email === "") {
        router.push('/app/login?step=login');
    }
  }, [])
  const _resetPassword = async () => {
    if(!userData.email) {
        window.alert('Email is required');
        return;
    }
    await supabase.auth.resetPasswordForEmail(userData.email, {
        redirectTo: window.location.origin + "/app/login?step=reset-password&email=" + userData.email+ "&redirect=true"
    });
    router.push('/app/login?step=reset-password&email=' + userData.email);
  }
  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center">
      <HeaderBox
        icon={iconPassword}
        title="Welcome back! Enter your password"
        subTitle="You are loggin with the email"
          thirdTitle={userData.email}
      />
      <div className="flex flex-col gap-md">
        <Input
          placeholder="Password"
          onChangeFn={setPassword}
          value={password}
          type="password"
          kind="primary sm:min-w-352 w-full"
        />
        <div>
            <Button kind="link" text="Recovery Password" customClasses="text-black" onClickFn={_resetPassword} />
        </div>
        <Button
          text="Login"
          onClickFn={_loginWithEmail}
          kind="primary"
        />
      </div>
    </div>
  );
};
