"use client";
import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import { useSearchParams } from "next/navigation";
import { PinForm } from "./PinForm";
import { SignupForm } from "./SignupForm";

export const FormBox = () => {
  // Based on query param "step" we render different components
  const params = useSearchParams();
  const [step, setStep] = useState<string>("login");
  useEffect(() => {
    setStep(params?.get("step") || "login");
  }, [params]);
  return (
    <div className="bg-[#fff] rounded-[24px] px-md sm:px-xxxl sm:py-xxl py-xl flex justify-center items-center w-full sm:w-fit">
      {step === "login" && <LoginForm />}
      {step === "pin" && <PinForm />}
      {step === "signup" && <SignupForm />}
    </div>
  );
};
