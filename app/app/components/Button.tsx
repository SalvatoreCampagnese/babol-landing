"use client";
import Image from "next/image";

export const Button = ({
  text,
  onClickFn,
  kind="primary",
  icon,
  customClasses = "",
}: {
  text?: string;
  onClickFn?: any;
  height?: string;
  icon?: string;
  kind?: string;
  customClasses?: string;
}) => {
  const onButtonClick = () => {
    onClickFn();
  }
  return (
    <button
      className={`${kind} ${customClasses}`}
      onClick={() => onButtonClick()}
    >
      {text || (icon ? <Image src={icon} alt="Babol" width={24} height={24} /> : "")}
    </button>
  );
};
