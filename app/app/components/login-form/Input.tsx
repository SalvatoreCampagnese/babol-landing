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
      className="bg-[#fff] rounded-[12px] p-[16px] min-w-[352px] h-[56px] w-full border border-1 border-[#606672]"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChangeFn(e.target.value)}
    />
  );
};
