import Image from "next/image";

export const HeaderBox = ({
  icon,
  title,
  subTitle,
  thirdTitle
}: {
  icon: string;
  title: string;
  subTitle: string;
  thirdTitle?: string;
}) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <Image src={icon} alt="icon" width={56} height={56} />
      <h1 className="text-[28px] font-[800] text-black" dangerouslySetInnerHTML={{__html: title}}></h1>
      <p className="text-black text-[17px] leading-[17px]">{subTitle}</p>
      <p className="text-[#5831F5] font-bold text-[17px] leading-[17px]">{thirdTitle}</p>
    </div>
  );
};
