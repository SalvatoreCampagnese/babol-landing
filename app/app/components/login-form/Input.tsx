"use client"
export const Input = ({
  placeholder,
  type,
  value,
  onChangeFn,
  customClasses = "",
  kind = "primary",
  max= 99999999,
  min= -9999999
}: {
  placeholder: string;
  type: string;
  value: string;
  onChangeFn: Function;
  customClasses?: string;
  kind?: string;
  max?: number;
  min?: number;
}) => {
  return (
    <div className="flex flex-col w-full">
      <input
        className={`${kind} ${customClasses}`}
        placeholder={placeholder}
        type={type}
        value={value}
        max={max}
        min={min}
        onChange={(e) => onChangeFn(e.target.value)}
      />
      {type === "number" && (parseInt(value) < min || parseInt(value) > max) && (
        <p className="text-red-500 text-sm">Value not valid</p>
      )}
    </div>
  );
};
