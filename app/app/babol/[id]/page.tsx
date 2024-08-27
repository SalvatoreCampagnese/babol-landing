"use client"
import Image from "next/image";
import { Button } from "../../components/Button";
import { TabsContainer } from "../../components/dashboard/TabContainer";
import EnvelopeIcon from "../../assets/icon-envelope.svg";
import ShareIcon from "../../assets/icon-share.svg";
import { Iframe } from "../../components/babol-detail/Iframe";
import bg1 from "../../assets/babol-bg/bg1.png";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getBabolExtrInfo } from "../../utils/babol";
const Page = () => {
  const [babol, setBabol] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams<{ id: string }>()
  useMemo(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const {data} = await getBabolExtrInfo(parseInt(params.id));
      setBabol(data);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id])
  return !isLoading && babol && <div className="flex flex-col md:flex-row md:items-start justify-center gap-[32px]">
      <div className="md:w-2/6 w-full gap-xl">
        <>
          <h1 className="font-satoshiBold text-xxxl">{babol.name}</h1>
          <span>
           {babol.description}
          </span>
          <Button kind="link" text="Show more info" customClasses="text-white" />
        </>

        <div className="gap-xs">
          <p>Hosted by</p>
          <div className="flex flex-row items-center gap-xs">
            <Image src={process.env.NEXT_PUBLIC_SUPABASE_USER_URL_STORAGE+"/"+babol.creator_id.uuid+"/avatar.jpeg"} alt="logo" height={32} width={32} className="rounded-full" />
            <span>{babol.creator_id.full_name || babol.creator_id.email}</span>
          </div>
        </div>

        <div className="flex flex-row gap-xs mt-[32px]">
          <div className="flex flex-col gap-xxs justify-center items-center p-sm rounded-md bg-surfaceExtraDark w-[100px] cursor-pointer">
            <Image src={EnvelopeIcon} alt="logo" height={24} width={24} />
            <span>Contact</span>
          </div>
          <div className="flex flex-col gap-xxs justify-center items-center p-sm rounded-md bg-surfaceExtraDark w-[100px] cursor-pointer">
            <Image src={ShareIcon} alt="logo" height={24} width={24} />
            <span>Share</span>
          </div>
        </div>
        <p className="text-textInvertedSecondary text-md  mt-[32px]">Report event</p>
      </div>
      <div className="md:w-3/12 w-full rounded-xl bg-my_bg_image bg-cover p-1" style={{
        minHeight: "calc(100vh - 185px)"
      }}>
        <Iframe babolID={params.id} />
      </div>
    </div> || <div>Loading...</div>
};
export default Page;
