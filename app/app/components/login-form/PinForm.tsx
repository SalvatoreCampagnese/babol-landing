"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Button } from "../Button";
import Pin from "./PinInput";
export const PinForm = () => {
  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center">
      <HeaderBox
        icon={iconLogin}
        title={`Confirm your identity!
        <br/>    Check your inbox`}
        subTitle="We’ve sent a 6-digit code to"
        thirdTitle="myemail@email.com"
      />
      <div className="flex flex-col gap-md">
        {/* input splitted in 6 number inputs */}
        <div className="flex items-center gap-4 flex-col">
          <Pin />
          <div className="flex flex-row gap-2 w-full justify-start">
            <Button
              text="Resend OTP"
              kind="link"
            />
            </div>
        </div>
        <Button
          text="Continue"
          kind="primary big"
          onClickFn={() => {
            window.location.href = "/app/login?step=signup";
          }}
        />
      </div>
    </div>
  );
};
