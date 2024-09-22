"use client";
import { Suspense, use, useEffect, useRef, useState } from "react";
import { LoginForm } from "./LoginForm";
import { useRouter, useSearchParams } from "next/navigation";
import { PinForm } from "./PinForm";
import { SignupForm } from "./SignupForm";
import { BackButton } from "./BackButton";
import { getUserData, setUserData } from "../../lib/signupSlice";
import { useAppDispatch, useAppSelector } from "../../lib/store";
import { PasswordForm } from "./PasswordForm";
import { ResetPasswordSent } from "./ResetPasswordSent";

export const FormBox = () => {
  const params = useSearchParams();
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<string>("login");
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    password: "",
    profilePicture: "",
  });
  useEffect(() => {
    //console.log(data);
    setStep(params?.get("step") || "login");
  }, [params]);

  return (
    <div className="sm:w-3/6 md:w-2/6 w-full">
      <div className="flex flex-col gap-md w-full justify-center items-center">
        {step !== "login" && (
          <BackButton
            backFn={() => {
              if (step === "pin") {
                window.location.href = "/app/login?step=login";
              }
              if (step === "signup") {
                window.location.href = "/app/login?step=pin";
              }
            }}
          />
        )}
        <div className="bg-[#fff] rounded-[24px] px-md sm:px-xxxl sm:py-xxl py-xl flex justify-center items-center w-full">
          {step === "login" && <LoginForm />}
          {step === "pin" && <PinForm />}
          {step === "signup" && <SignupForm />}
          {step === "password" && <PasswordForm />}
          {step === "reset-password" && (
            <Suspense>
              <ResetPasswordSent />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};
