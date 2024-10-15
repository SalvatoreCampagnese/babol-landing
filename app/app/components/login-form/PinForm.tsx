"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Button } from "../Button";
import Pin from "./PinInput";
import { useState } from "react";
import { supabase } from "../../utils/supabase";
import { loginWithEmail, verifyUser } from "../../utils/user";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../lib/store";
import { toast } from "react-toastify";
export const PinForm = () => {
  const userData = useAppSelector((state) => state.user);
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useRouter();
  const _resendOtp = async () => {
    if (!counter) {
      setCounter(60);
      try {
        const { error } = await supabase.auth.resend({ email: userData.email, type: 'signup' })
        if (error) throw error;
        const interval = setInterval(() => {
          setCounter((prev) => {
            if (prev === 0) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        toast.success('We sent you a new link!, Check your inbox');
      } catch (e: any) {
        toast.error(e.message);
      }
    }
  }
  const authenticateUser = async () => {
    setLoading(true);
    verifyUser(userData.email, value.join(''))
    .then(({ error }) => {
        if (error) {
            return Promise.reject(error.message);
        }
        return loginWithEmail(userData.email, process.env.NEXT_PUBLIC_USER_DEFAULT_PASSWORD || '');
    })
    .then(({ data, error }) => {
        if (error || !data) {
            return Promise.reject(error!.message);
        }
        navigation.push('?step=signup');
    })
    .catch((error) => {
      toast.error(error.message);
    })
    .finally(() => {
        setLoading(false);
    });

}
  return (
    <>
      <div className="w-full h-full flex flex-col gap-[48px] justify-center">
        <HeaderBox
          icon={iconLogin}
          title={`Confirm your identity!
        <br/>    Check your inbox`}
          subTitle="We’ve sent a 6-digit code to"
          thirdTitle={userData.email}
        />
        <div className="flex flex-col gap-md">
          {/* input splitted in 6 number inputs */}
          <div className="flex items-center gap-4 flex-col">
            <Pin value={value} setValue={setValue} />
            <div className="flex flex-row gap-2 w-full justify-start">
              <Button text={counter ? counter.toString() : "Resend OTP"} kind="link" onClickFn={_resendOtp} />
            </div>
          </div>
          <Button
            text="Continue"
            kind="primary"
            customClasses="h-lg text-lg font-satoshiBold"
            onClickFn={() => authenticateUser()}
          />
        </div>
      </div>
    </>
  );
};
