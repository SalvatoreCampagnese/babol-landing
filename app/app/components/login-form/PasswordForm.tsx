"use client";
import { HeaderBox } from "./HeaderBox";
import iconPassword from "../../assets/icon-password.svg";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "../Button";
import { useAppSelector } from "../../lib/store";
import { loginWithEmail } from "../../utils/user";

export const PasswordForm = () => {
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
  const _resetPassword = async () => {
    
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
