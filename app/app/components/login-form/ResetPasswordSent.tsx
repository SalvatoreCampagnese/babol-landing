"use client";
import { HeaderBox } from "./HeaderBox";
import iconInbox from "../../assets/icon-inbox.svg";
import iconPassword from "../../assets/icon-password.svg";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import iconApple from "../../assets/icon-apple.svg";
import iconGoogle from "../../assets/icon-google.svg";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { supabase } from "../../utils/supabase";
import { toast } from "react-toastify";

export const ResetPasswordSent = () => {
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState("");
  const [password, setPassword] = useState("");
  const [securityLevel, setSecurityLevel] = useState(0);
  const params = useSearchParams();
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    password: "",
    profilePicture: "",
  });
  useEffect(() => {
    setRedirect(params?.get("redirect") || "");
    //console.log(data);
    setEmail(params?.get("email") || "");
  }, [params]);

  useEffect(() => {
    let securityLevel = 0;
    // If password is longer than 6 characters add 1 to security level
    if (password.length > 6) {
      securityLevel++;
    }
    // If password contains a number add 1 to security level
    if (password.match(/\d+/)) {
      securityLevel++;
    }
    // If password contains a special character add 1 to security level
    if (password.match(/[^A-Za-z0-9]+/)) {
      securityLevel++;
    }
    // If password contains an uppercase letter add 1 to security level
    if (password.match(/[A-Z]+/)) {
      securityLevel++;
    }
    setSecurityLevel(securityLevel);
  }, [password]);


  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center items-center">
      {!redirect && <>
        <Image src={iconInbox} width={175} height={160} alt={"inbox icon"} />
        <div className="flex flex-col gap-md">
          <span className="text-[24px] font-satoshiBold text-black font-bold">We have sent an email to<br /><span className="text-[24px] font-satoshiBold text-infoMain font-bold">{email}</span></span>
          <span className="text-textSecondary text-lg">
            Check your email inbox and use the link we sent to set new password and login in Babol!
          </span>
          <div className="p-sm bg-surfaceAccentExtraLight rounded-md w-full items-center text-black">
            Not in your inbox? Check your spam folder or <span className="font-bold underline text-black cursor-pointer" onClick={() => {
              if (!email) {
                toast.error('Email is required');
                return;
              }
              supabase.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin + "/app/login?step=reset-password&email=" + email + "&redirect=true"
              });
            }}>request a new link</span>
          </div>

          <Button text="Go to login" kind="primary" onClickFn={() => window.location.href = "?step=login"} />
        </div>
      </>}
      {redirect && <div className="flex flex-col gap-md gap-[38px]">
        <HeaderBox icon={iconPassword} title="Create new secure password" subTitle="Set up a secure password to regain access to your account at" thirdTitle={email} />
        <div className="flex flex-col gap-2 justify-between">
          <Input
            placeholder="Password"
            onChangeFn={(newValue: string) =>
              setPassword(newValue)
            }
            value={password}
            type="password"
          />
          <div className="flex flex-row gap-2 justify-between">
            {
              /* Password strength indicator */
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className={"w-3/12 h-2  rounded-lg " + (index < securityLevel ? "bg-green-400" : "bg-surfaceExtraLight")} />
              ))
            }
          </div>
          <span className="text-textTertiary">Choose a strong password</span>
        </div>
        <Button text="Reset password" kind="primary" onClickFn={() => {
          if (password.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return;
          }
          supabase.auth.updateUser({ password }).then((response) => {
            if (response.error) {
              toast.error(response.error.message);
              return;
            }
            toast.success('Password updated successfully');
            window.location.href = "/app/login?step=login";
          });
        }} />
      </div>
      }
    </div>
  );
};
