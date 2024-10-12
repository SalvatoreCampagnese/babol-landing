"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "../Button";
import iconApple from "../../assets/icon-apple.svg";
import iconGoogle from "../../assets/icon-google.svg";
import { getUserByEmail, signupWithEmail } from "../../utils/user";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";
import { useAppDispatch, useAppSelector } from "../../lib/store";
import { setUserData } from "../../lib/signupSlice";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useRouter();
  const password = process.env.NEXT_PUBLIC_USER_DEFAULT_PASSWORD || "";
  const userState = useAppSelector((state:any) => state.user);
  const dispatch = useAppDispatch();

  const _signupWithEmail = async () => {
    setIsLoading(true);
    try {
      dispatch(setUserData({ email, password }));
      const { data: user, error } = await getUserByEmail(email);
      console.log('user', user, error)
      if (error?.code === 'PGRST116') {
        await handleNewAccount();
        return;
      }
      if (error) throw error.message;

      if (user && !user.password_changed && (user.google || user.apple)) {
        await handleExistingAccount(false, user.apple ? 'apple' : user.google ? 'google' : undefined);
        return;
      }

      await handleExistingAccount(true)
    } catch (e: any) {
      window.alert(e);
    } finally {
      setIsLoading(false);
    }
  }

  const handleNewAccount = async () => {
    const { error } = await signupWithEmail(email, password);
    if (error) throw error.message;
    navigation.push('?step=pin');
  }
  const handleExistingAccount = async (hasPasswordChanged: boolean, providerType?: 'google' | 'apple') => {
    if (!hasPasswordChanged) {
      if (providerType) {
        window.alert('Please sign in with your ' + providerType + ' account');
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) { console.log(error.message); return error.message; }
    }

    navigation.push('?step=password');
  }

  const loginWithProvider = async (provider: 'google' | 'apple') => {
    console.log(window.location.origin)
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options:{
        redirectTo: window.location.origin+"/app/dashboard"
      }
    });
    if (error) { console.log(error.message); return error.message; }
  }

  return (
    <div className="w-full h-full flex flex-col gap-[48px] justify-center">
      <HeaderBox
        icon={iconLogin}
        title="Welcome in Babol"
        subTitle="The new way to manage your event."
        thirdTitle="All in one space."
      />
      <div className="flex flex-col gap-md">
        <Input
          placeholder="Email"
          onChangeFn={setEmail}
          value={email}
          type="email"
          kind="primary sm:min-w-352 w-full"
        />
        <Button
          text="Continue with Email"
          onClickFn={_signupWithEmail}
          kind="primary"
        />
        {/* HR WITH OR TEXT IN MIDDLE*/}
        <div className="flex items-center gap-md w-full">
          <hr className="w-2/4 border-[#606672] border-1" />
          <p className="text-[#606672]">or</p>
          <hr className="w-2/4 border-[#606672] border-1" />
        </div>

        <div className="flex flex-row gap-md">
          <Button
            icon={iconGoogle}
            kind="secondary"
            onClickFn={() => loginWithProvider('google')}
            customClasses="h-lg text-lg font-satoshiBold"
          />
          <Button
            icon={iconApple}
            kind="secondary"
            onClickFn={() => loginWithProvider('apple')}
            customClasses="h-lg text-lg font-satoshiBold"
          />
        </div>
      </div>
    </div>
  );
};
