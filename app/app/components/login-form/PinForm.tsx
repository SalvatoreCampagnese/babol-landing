"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Input } from "./Input";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import iconApple from "../../assets/icon-apple.svg";
import iconGoogle from "../../assets/icon-google.svg";
import Pin from "./PinInput";
export const PinForm = () => {
  const numberOfDigits = 6;
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState<string | null>(null);
  const otpBoxReference = useRef<any>([]);

  function handleChange(value: string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e: any, index: number) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  useEffect(() => {
    const correctOTP = "123456";
    if (otp.join("") !== "" && otp.join("") !== correctOTP) {
      setOtpError("❌ Wrong OTP Please Check Again");
    } else {
      setOtpError(null);
    }
  }, [otp]);
  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center">
      <HeaderBox
        icon={iconLogin}
        title={`Confirm your identity!
        <br/>    Check your inbox`}
        subTitle="We’ve sent a 6-digit code to"
        thirdTitle="myemail@email.com"
      />
      <div className="flex flex-col gap-[16px]">
        {/* input splitted in 6 number inputs */}
        <div className="flex items-center gap-4">
          <Pin />
        </div>
      </div>
    </div>
  );
};
