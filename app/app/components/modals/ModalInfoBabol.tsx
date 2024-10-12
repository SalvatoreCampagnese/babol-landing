import Image from "next/image";
import { FormBox } from "../login-form/FormBox";
import BottomSheet from "./BottomSheet";

const ModalInfoBabol = ({
    show,
    onChange,
    babolData
}: any) => {
  return (
    <BottomSheet onChange={onChange} isOpen={show} disableSwipe={false} bodyClassName="text-black p-4" containerClassName={"min-h-10/12"}>
        <h1 className="text-2xl text-black">{babolData?.name}</h1>
        <h2 className="text-black mt-2">{babolData?.description}</h2>
        <div className="flex flex-col">
            <p className="text-black text-sm mt-4">Category</p>
            <div className="px-4 py-1 text-black font-bold gap-2 w-fit bg-surfaceAccentExtraLight rounded-full mt-1">{babolData?.category?.emoji}&nbsp;{babolData?.category?.name}</div>
        </div>
        <div className="flex flex-col">
            <p className="text-black text-sm mt-4">Hosted by</p>
            <div className="px-2 py-1 text-black font-bold w-fit bg-surfaceAccentExtraLight rounded-full mt-1 flex flex-row gap-1"><Image src={process.env.NEXT_PUBLIC_SUPABASE_USER_URL_STORAGE+"/"+babolData?.creator_id?.uuid+"/avatar.jpeg"} height={25} width={25} alt="avatar" className="rounded-full" /> {babolData?.creator_id?.full_name}</div>
        </div>        
    </BottomSheet>
  );
};

export default ModalInfoBabol;
