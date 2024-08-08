import Image from "next/image";

export const Button = ({
  text,
  onClickFn,
  height = "40px",
  backgroundColor = "bg-[#101011]",
  borderRadius = "12px",
  fontSize = "14px",
  icon,
  width = ""
}: {
  text?: string;
  onClickFn: Function;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fontSize?: string;
  icon?: string;
  width?: string;
}) => {
  return (
    <button
      className={`${backgroundColor} rounded-[${borderRadius}] p-[16px] h-[${height}] flex justify-center items-center text-[${fontSize}] ${width}`}
    >
      {text || (icon ? <Image src={icon} alt="Babol" width={24} height={24} /> : "")}
    </button>
  );
};
