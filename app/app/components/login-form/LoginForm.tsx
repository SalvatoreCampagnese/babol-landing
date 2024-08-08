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
  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center">
      <HeaderBox
        icon={iconLogin}
        title="Welcome in Babol"
        subTitle="The new way to manage your event."
        thirdTitle="All in one space."
      />
      <div className="flex flex-col gap-[16px]">
        <Input
          placeholder="Email"
          onChangeFn={setEmail}
          value={email}
          type="email"
        />
        <Button
          text="Continue with Email"
          onClickFn={(e: any) => console.log("Login")}
          height="56px"
          fontSize="17px"
          borderRadius="16px"
        />
        {/* HR WITH OR TEXT IN MIDDLE*/}
        <div className="flex items-center gap-[16px] w-full">
          <hr className="w-2/4 border-[#606672] border-1" />
          <p className="text-[#606672]">or</p>
          <hr className="w-2/4 border-[#606672] border-1" />
        </div>

        <div className="flex flex-row gap-[16px]">
          <Button
            icon={iconGoogle}
            backgroundColor="bg-light-gray"
            onClickFn={(e: any) => console.log("Login")}
            height="56px"
            fontSize="17px"
            borderRadius="16px"
            width="w-1/2"
          />
          <Button
            icon={iconApple}
            backgroundColor="bg-light-gray"
            onClickFn={(e: any) => console.log("Login")}
            height="56px"
            fontSize="17px"
            borderRadius="16px"
            width="w-1/2"
          />
        </div>
      </div>
    </div>
  );
};
