import Image from "next/image";
import iconBack from "../../assets/icon-back.svg";
export const BackButton = ({ backFn }: { backFn: Function }) => {
  return (
    <div className="h-[40px] w-[100%]">
      <div className="cursor-pointer flex flex-row items-center gap-xxs" onClick={() => backFn()}>
        <Image src={iconBack} width={16} height={16} alt="back" className="h-[20px] w-[20px]"/>
        <p className="text-xl">Go Back</p>
      </div>
    </div>
  );
};
