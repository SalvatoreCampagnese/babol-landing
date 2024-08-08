"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "../Button";
import { LabelAndSublabel } from "./InputWithLabel";
import { ImageInput } from "./ImageInput";
const signupWithEmail = (email: string) => {
  console.log("Sign up with email", email);
  window.location.href = "/app/dashboard";
};
export const SignupForm = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center">
      <HeaderBox icon={iconLogin} />
      <div className="flex flex-col gap-lg">
        <div className="gap-2 flex flex-col">
          <LabelAndSublabel
            label="What’s your name?"
            sublabel="Let us know how to properly address you"
          />
          <div className="flex flex-row gap-2">
            <Input
              placeholder="First name"
              onChangeFn={setEmail}
              value={email}
              type="email"
            />

            <Input
              placeholder="Last name"
              onChangeFn={setEmail}
              value={email}
              type="email"
            />
          </div>
        </div>

        <div className="gap-2 flex flex-col">
          <LabelAndSublabel
            label="What’s your date of birth?"
            sublabel="It's just between us. Your privacy matters"
          />
          <div className="flex flex-row gap-2 justify-between">
            <Input
              placeholder="Day"
              onChangeFn={setEmail}
              value={email}
              type="email"
              customClasses="max-w-[112px]"
            />
            <Input
              placeholder="Month"
              onChangeFn={setEmail}
              value={email}
              type="email"
              customClasses="max-w-[112px]"
            />
            <Input
              placeholder="Year"
              onChangeFn={setEmail}
              value={email}
              type="email"
              customClasses="max-w-[112px]"
            />
          </div>
        </div>

        <div className="gap-2 flex flex-col">
          <LabelAndSublabel
            label="Secure your account!"
            sublabel="Password should be minimum 6 digits long"
          />
          <div className="flex flex-col gap-2 justify-between">
            <Input
              placeholder="Password"
              onChangeFn={setEmail}
              value={email}
              type="email"
            />
            <div className="flex flex-row gap-2 justify-between">
              {
                /* Password strength indicator */
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="w-20 h-2 bg-surfaceExtraLight rounded-lg" />
                ))
              }
            </div>
            <span className="text-textTertiary">Choose a strong password</span>
          </div>
        </div>

        <div className="gap-2 flex flex-col">
          <LabelAndSublabel
            label="Add a profile picture"
            sublabel="Help your friends to recognize you.<br/>Everyone will be able to see your picture"
          />
          <div className="flex flex-col gap-2 justify-between">
            <ImageInput />
          </div>
        </div>

        <Button
          text="Create account"
          onClickFn={signupWithEmail}
          kind="primary big"
        />
      </div>
    </div>
  );
};
