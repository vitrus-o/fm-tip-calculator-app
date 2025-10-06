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
    <div className="flex flex-col gap-1">
      {header && (
        <label className="text-grey-500 mb-1 font-bold" htmlFor={header}>
          {header}
        </label>
      )}
      <div className="flex items-center w-full h-12 rounded-md border-2 bg-grey-20">
        {icon && (
          <img src={icon} alt="icon" className="w-4 ml-5" />
        )}
        <input
          className={`w-full text-xl font-bold rounded-md px-4 ${className ?? ""}`}
          placeholder={placeholder ?? "0"}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            handleBlur();
          }}
          onChange={handleInputChange}
          type={allowFloatingNum ? "number" : "text"}
          id={header}
        />
      </div>
    </div>
  );
};

export default Input;