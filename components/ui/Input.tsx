import React from "react";
import { InputProps } from "../../types/index";

const Input: React.FC<InputProps> = ({
  header,
  icon,
  value,
  onChange,
  placeholder,
  className,
}) => {
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
          onChange={e => onChange(e.target.value)}
          type="text"
          id={header}
        />
      </div>
    </div>
  );
};

export default Input;