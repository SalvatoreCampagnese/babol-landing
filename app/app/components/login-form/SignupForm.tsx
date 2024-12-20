"use client";
import { HeaderBox } from "./HeaderBox";
import iconLogin from "../../assets/icon-login.svg";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { LabelAndSublabel } from "./InputWithLabel";
import ImageInput from "./ImageInput";
import { useAppDispatch, useAppSelector } from "../../lib/store";
import { setUserData } from "../../lib/signupSlice";
import { getLoggedUserProfile, updateProfile } from "../../utils/user";
import { supabase } from "../../utils/supabase";
import { decode } from "base64-arraybuffer";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export const SignupForm = () => {
  const [securityLevel, setSecurityLevel] = useState(0);
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const uploadPhoto = async () => {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError) throw { code: userError.status, message: userError.message };
    console.log(image, userData.user.id);
    if (!image) return;
    const base64 = image.split('base64,')[1]
    const buffer = Buffer.from(base64, 'base64');

    const { error: uploadError } = await supabase.storage.from('profile_photos').upload(`${userData.user.id}/avatar.jpeg`, buffer, {
      contentType: 'image/jpeg',
      upsert: true
    })
    if (uploadError) throw { code: uploadError.cause, message: uploadError.message };
  }

  const signupWithEmail = async (email: string) => {

    if(!userData?.firstName){
      toast.error('Insert your first name');
      return;
    }
    if(!userData?.lastName){
      toast.error('Insert your last name');
      return;
    }
    if(!userData?.birthDay || !userData?.birthMonth || !userData?.birthYear){
      toast.error('Insert your birthday correctly');
      return;
    }
    if(!userData?.password){
      toast.error('Insert a password');
      return;
    }

    const {data:loggedUser} = await getLoggedUserProfile();
    // upload image into bucket
    try{
      await uploadPhoto();
      const {data, error} = await updateProfile({
          id: loggedUser?.id,
          password:userData?.password,
          full_name: userData?.firstName+" "+userData?.lastName,
          birth_date: `${userData.birthMonth}-${userData?.birthDay}-${userData?.birthYear}`
      });
      if(error){
        toast.error('Error occurred, please retry.')
        return;
      }
    }catch(e){
      console.log(e);
      return;
    }
    router.replace("/app/dashboard");
  };
  useEffect(() => {
    let securityLevel = 0;
    // If password is longer than 6 characters add 1 to security level
    if (userData.password.length > 6) {
      securityLevel++;
    }
    // If password contains a number add 1 to security level
    if (userData.password.match(/\d+/)) {
      securityLevel++;
    }
    // If password contains a special character add 1 to security level
    if (userData.password.match(/[^A-Za-z0-9]+/)) {
      securityLevel++;
    }
    // If password contains an uppercase letter add 1 to security level
    if (userData.password.match(/[A-Z]+/)) {
      securityLevel++;
    }
    setSecurityLevel(securityLevel);
  }, [userData.password]);
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
              onChangeFn={(newValue: string) =>
                dispatch(setUserData({ ...userData, firstName: newValue }))
              }
              value={userData.firstName}
              type="firstname"
            />

            <Input
              placeholder="Last name"
              onChangeFn={(newValue: string) =>
                dispatch(setUserData({ ...userData, lastName: newValue }))
              }
              value={userData.lastName}
              type="lastname"
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
              onChangeFn={(newValue: number) =>
                dispatch(setUserData({ ...userData, birthDay: newValue }))
              }
              max={31}
              min={1}
              value={userData.birthDay?.toString() || ""}
              type="number"
              customClasses=""
            />
            <Input
              placeholder="Month"
              onChangeFn={(newValue: number) =>
                dispatch(setUserData({ ...userData, birthMonth: newValue }))
              }
              min={1}
              max={12}
              value={userData.birthMonth?.toString() || ""}
              type="number"
              customClasses=""
            />
            <Input
              placeholder="Year"
              onChangeFn={(newValue: number) =>
                dispatch(setUserData({ ...userData, birthYear: newValue }))
              }
              min={1990}
              max={2050}
              value={userData.birthYear?.toString() || ""}
              type="number"
              customClasses=""
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
              onChangeFn={(newValue: number) =>
                dispatch(setUserData({ ...userData, password: newValue }))
              }
              value={userData.password}
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
        </div>

        <div className="gap-2 flex flex-col">
          <LabelAndSublabel
            label="Add a profile picture"
            sublabel="Help your friends to recognize you.<br/>Everyone will be able to see your picture"
          />
          <div className="flex flex-col gap-2 justify-between">
            <ImageInput image={image} setImage={setImage} />
          </div>
        </div>

        <Button
          text="Create account"
          onClickFn={signupWithEmail}
          kind="primary"
          customClasses="h-lg text-lg font-satoshiBold"
        />
      </div>
    </div>
  );
};
