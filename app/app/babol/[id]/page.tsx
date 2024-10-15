"use client";
import Image from "next/image";
import { Button } from "../../components/Button";
import EnvelopeIcon from "../../assets/icon-envelope.svg";
import ShareIcon from "../../assets/icon-share.svg";
import CloseIcon from "../../assets/icon-close-white.svg";
import { Iframe } from "../../components/babol-detail/Iframe";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getBabolExtrInfo, joinBabol } from "../../utils/babol";
import ModalLogin from "../../components/modals/ModalLogin";
import { supabase } from "../../utils/supabase";
import ModalInfoBabol from "../../components/modals/ModalInfoBabol";
import { toast } from "react-toastify";
import { getLoggedUserProfile } from "../../utils/user";
import ModalError from "../../components/modals/ModalInfo";

const Page = () => {
  const router = useRouter();
  const [babol, setBabol] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const userData = await supabase.auth.getSession();
      if (!userData?.data?.session) {
        setShowLoginModal(true);
      }
      const { data } = await getBabolExtrInfo(parseInt(params.id));
      setBabol(data);

      const { data: loggedUser } = await getLoggedUserProfile();
      const { data: partecipant, error: errorPartecipants } = await supabase
        .from("babol_partecipants")
        .select("*")
        .eq("profileID", loggedUser.id)
        .eq("babolID", params.id);

      if (partecipant?.length){
        
      setIsLoading(false);
        return;
      }else if(searchParams.get("invite_code") !== data?.invite_code){
        toast.error("Invite code not valid");
        return router.replace('/app/dashboard')
      }

      // If invite_code in url and invite_url is = data.invite_code
      if (
        searchParams.get("invite_code") === data?.invite_code &&
        userData?.data?.session
      ) {
        // Join babol
        const joined = await joinBabol(parseInt(params.id));
        switch (joined) {
          case "error":
            toast.error("Error joining babol");
            break;
          case "success":
            toast.success("Successfully joined babol");
            break;
          case "already_joined":
            // toast.success("You are already into the babol!");
            break;
        }
      }

      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);
  return (
    (!isLoading && babol && (
      <div className="flex flex-col md:flex-row md:items-start justify-center gap-2 md:gap-[32px]">
        {showLoginModal && <ModalLogin />}
        {showModalInfo && (
          <>
          <div className="md:hidden block">
          <ModalInfoBabol
            show={showModalInfo}
            onChange={setShowModalInfo}
            babolData={babol}
          />
          </div>
          <div className="hidden md:block">
           <ModalError closeFn={() => { setShowModalInfo(false)}} babolData={babol} />
          </div>
          </>
        )}
        <div className="md:w-2/6 w-full gap-0 md:gap-xl">
          <>
            <div className="flex flex-row justify-between">
              <h1 className="font-satoshiBold text-xxxl">{babol.name}</h1>
              <Image
                src={CloseIcon}
                width={35}
                height={35}
                alt="close"
                className="block md:hidden"
                onClick={() => {
                  router.push("/app/dashboard");
                }}
              />
            </div>
            <span className="hidden md:block">{babol.description}</span>
            <div className="hidden md:block">
              <Button
                kind="link"
                text="Show more info"
                customClasses="text-white"
              />
            </div>
          </>

          <div className="gap-xs hidden md:block">
            <p>Hosted by</p>
            <div className="flex flex-row items-center gap-xs">
              <Image
                src={
                  process.env.NEXT_PUBLIC_SUPABASE_USER_URL_STORAGE +
                  "/" +
                  babol.creator_id.uuid +
                  "/avatar.jpeg"
                }
                alt="logo"
                height={32}
                width={32}
                className="rounded-full"
              />
              <span>
                {babol.creator_id.full_name || babol.creator_id.email}
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-xs mt-[10px] md:mt-[32px]">
            <div
              className="flex flex-col gap-xxs justify-center items-center p-sm rounded-md bg-surfaceExtraDark w-1/2 cursor-pointer"
              onClick={() => {
                setShowModalInfo(true);
              }}
            >
              <Image src={EnvelopeIcon} alt="logo" height={24} width={24} />
              <span>Info</span>
            </div>
            <div
              className="flex flex-col gap-xxs justify-center items-center p-sm rounded-md bg-surfaceExtraDark w-1/2 cursor-pointer"
              onClick={() => {
                navigator.share({
                  url: window.location.href,
                  text: "Hi! Take a look at this babol!",
                });
              }}
            >
              <Image src={ShareIcon} alt="logo" height={24} width={24} />
              <span>Share</span>
            </div>
          </div>
          <p className="text-textInvertedSecondary text-md mt-0 md:mt-[32px] hidden md:block">
            Report event
          </p>
        </div>
        <div
          className="md:w-3/12 w-full rounded-xl bg-my_bg_image bg-cover p-1"
          style={{
            minHeight: "calc(100vh - 185px)",
          }}
        >
          <Iframe babolID={params.id} />
        </div>
      </div>
    )) || <div>Loading...</div>
  );
};
export default Page;
