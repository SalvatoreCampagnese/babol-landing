export const Button = ({
  text,
  onClickFn,
}: {
  text: string;
  onClickFn: Function;
}) => {
  return (
    <button
      className="bg-[#101011] rounded p-[16px] h-[40px] flex justify-center items-center text-[14px]"
      
    >
      {text}
    </button>
  );
};
