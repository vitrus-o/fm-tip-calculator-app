import React, { useState } from "react";
import { InputProps } from "../../types/index";

const Input: React.FC<InputProps> = ({
  header,
  icon,
  value,
  allowFloatingNum,
  allowZero,
  onChange,
  placeholder,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (allowFloatingNum) {
      inputValue = inputValue.replace(/[^0-9.]/g, "");
      const parts = inputValue.split(".");
      if (parts.length > 2) {
        inputValue = parts[0] + "." + parts.slice(1).join("");
      }
    } else {
      inputValue = inputValue.replace(/[^0-9]/g, "");
    }

    e.target.value = inputValue;
    setHasError(false);
    onChange(inputValue);
  };

  const handleBlur = () => {
    const numValue = value === "" ? 0 : parseFloat(value);
    if (!allowZero && numValue === 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return (
    <div className={`flex flex-col gap-1`}>
      <label
        className="block text-grey-500 mb-1 font-mono font-bold"
        htmlFor={header}
      >
        {header}
      </label>
      <div
        className={`flex flex-row items-center w-full h-12 text-xl lg:text-2xl rounded-md text-right font-mono font-normal relative border-2
                    ${isFocused ? "border-green-400 bg-grey-20" : "border-transparent bg-grey-20"}
                    ${hasError ? "border-red-400" : ""}
                  `}
      >
        {hasError && (
          <p className="text-red-400 absolute -top-8 right-0 text-base font-mono font-bold">{`Can't be zero`}</p>
        )}
        {icon && (
          <img src={icon} alt="icon" className="aspect-square w-4 ml-5" />
        )}
        <input
          className={`w-full text-2xl font-bold rounded-md ${
            !header && !icon ? "px-4 text-center" : "pl-10 pr-4 text-right"
          } border-2 border-transparent focus:outline-none text-green-900 ${className ?? ""}`}
          placeholder={placeholder ?? "0"}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            handleBlur();
          }}
          onChange={handleInputChange}
          type={allowFloatingNum ? "number" : "text"}
        />
      </div>
    </div>
  );
};

export default Input;