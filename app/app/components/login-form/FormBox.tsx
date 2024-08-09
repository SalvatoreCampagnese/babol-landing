"use client";
import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import { useSearchParams } from "next/navigation";
import { PinForm } from "./PinForm";
import { SignupForm } from "./SignupForm";
import { BackButton } from "./BackButton";

export const FormBox = () => {
  // Based on query param "step" we render different components
  const params = useSearchParams();
  const [step, setStep] = useState<string>("login");
  useEffect(() => {
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
        </div>
      </div>
    </div>
  );
};
