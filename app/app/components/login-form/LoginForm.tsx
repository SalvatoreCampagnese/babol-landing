"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "../Button";
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
        />
      </div>
    </div>
  );
};
