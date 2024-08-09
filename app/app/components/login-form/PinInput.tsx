import React, { useRef, useState } from "react";

const Pin = () => {
  const maxPinLength = 6;
  const [password, setPassword] = useState<number[]>(
    Array(maxPinLength).fill(-1)
  );
  const inpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [activeInput, setActiveInput] = useState(-1);

  const handleKeyDown = (e: any, i: number) => {
    if (e.key === "Backspace") {
      let pass = [...password];
      pass[i] = -1;
      setPassword(pass);
      setActiveInput(i - 1);
      if (i !== 0) {
        let nextInput = inpRefs.current[i - 1];
        nextInput?.focus();
      } else {
        inpRefs.current[i]?.blur();
      }
    }
  };

  const handleChange = (e: any, i: number) => {
    let v = e.nativeEvent.data;
    let pass = [...password];
    let value = parseInt(v);
    if (!isNaN(value)) {
      pass[i] = value;
      setPassword(pass);
      setActiveInput(i + 1);
      let nextInput = inpRefs.current[i + 1];
      nextInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData('text');
    const pasteArray = paste.split('').map((char) => parseInt(char)).filter((num) => !isNaN(num));
    let pass = [...password];
    for (let i = 0; i < maxPinLength; i++) {
      pass[i] = pasteArray[i] ?? -1;
    }
    setPassword(pass);
    setActiveInput(pasteArray.length >= maxPinLength ? -1 : pasteArray.length);
    inpRefs.current[pasteArray.length >= maxPinLength ? maxPinLength - 1 : pasteArray.length]?.focus();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="text-center flex flex-col justify-center items-center max-w-full">
        <div className="flex space-x-1 sm:space-x-4 w-full">
          {password.map((digit, i) => (
            <div
              key={i}
              className="h-lg w-lg relative overflow-hidden"
            >
              <label
                htmlFor={`pin_${i}`}
                className={`absolute flex justify-center items-center text-2xl top-0 rounded-sm left-0 w-full h-full bg-surfaceWhite opacity-100 border border-sm border-lighter text-black`}
              >
                {digit !== -1 ? digit : ""}
              </label>
              <input
                onFocus={() => setActiveInput(i)}
                onBlur={() => setActiveInput(-1)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => handleChange(e, i)}
                onPaste={handlePaste}
                ref={(el:any) => (inpRefs.current[i] = el)}
                className="w-full h-full text-center border-none outline-none text-black"
                id={`pin_${i}`}
                type="password"
                value={digit !== -1 ? digit : ""}
              ></input>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Pin;
