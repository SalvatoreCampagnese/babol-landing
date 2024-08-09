"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "../Button";
import iconApple from "../../assets/icon-apple.svg";
import iconGoogle from "../../assets/icon-google.svg";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const signupWithEmail = (email: string) => {
    console.log("Sign up with email", email);
    window.location.href = "/app/login?step=pin";
  }
  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center">
      <HeaderBox
        icon={iconLogin}
        title="Welcome in Babol"
        subTitle="The new way to manage your event."
        thirdTitle="All in one space."
      />
      <div className="flex flex-col gap-md">
        <Input
          placeholder="Email"
          onChangeFn={setEmail}
          value={email}
          type="email"
          kind="primary sm:min-w-352 w-full"
        />
        <Button
          text="Continue with Email"
          onClickFn={signupWithEmail}
          kind="primary"
        />
        {/* HR WITH OR TEXT IN MIDDLE*/}
        <div className="flex items-center gap-md w-full">
          <hr className="w-2/4 border-[#606672] border-1" />
          <p className="text-[#606672]">or</p>
          <hr className="w-2/4 border-[#606672] border-1" />
        </div>

        <div className="flex flex-row gap-md">
          <Button
            icon={iconGoogle}
            kind="secondary"
            customClasses="h-lg text-lg font-satoshiBold"
          />
          <Button
            icon={iconApple}
            kind="secondary"
            customClasses="h-lg text-lg font-satoshiBold"
          />
        </div>
      </div>
    </div>
  );
};
