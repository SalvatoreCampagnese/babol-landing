"use client"
export const Input = ({
  placeholder,
  type,
  value,
  onChangeFn,
  customClasses = "",
  kind = "primary",
}: {
  placeholder: string;
  type: string;
  value: string;
  onChangeFn: Function;
  customClasses?: string;
  kind?: string;
}) => {
  return (
    <input
      className={`${kind} ${customClasses}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChangeFn(e.target.value)}
    />
  );
};
