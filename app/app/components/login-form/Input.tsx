export const Input = ({
  placeholder,
  type,
  value,
  onChangeFn,
}: {
  placeholder: string;
  type: string;
  value: string;
  onChangeFn: Function;
}) => {
  return (
    <input
      className="bg-[#f5f5f5] rounded p-[16px] w-[320px] h-[56px] w-full border border-1 border-[#606672]"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChangeFn(e.target.value)}
    />
  );
};
