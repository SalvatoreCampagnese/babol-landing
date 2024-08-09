import Image from "next/image";

export const HeaderBox = ({
  icon,
  title,
  subTitle,
  thirdTitle
}: {
  icon?: string;
  title?: string;
  subTitle?: string;
  thirdTitle?: string;
}) => {
  return (
    <div className="flex flex-col gap-xs">
      {icon && <Image src={icon} alt="icon" width={56} height={56} />}
      {title && <h1 className="text-xxxl leading-9 text-black font-satoshiBold" dangerouslySetInnerHTML={{__html: title}}></h1>}
      {subTitle && <p className="text-black text-xl leading-xl">{subTitle}</p>}
      {thirdTitle && <p className="text-infoMain font-bold text-xl leading-4">{thirdTitle}</p>}
    </div>
  );
};
