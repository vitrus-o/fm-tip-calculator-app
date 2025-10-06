import React from "react";
import { TipButtonProps } from "../../types/index";

const tipOptions = [5, 10, 15, 25, 50];

const TipButton: React.FC<TipButtonProps> = ({ percentage, isSelected, onTipSelect }) => (
  <div
  className={`flex items-center justify-center rounded-lg h-12 text-xl font-mono cursor-pointer transition-all font-bold
    ${isSelected
      ? "bg-green-400 text-green-900"
      : "bg-green-900 text-white hover:bg-green-400 hover:text-green-900"
    }`}
  style={{ minWidth: "90px" }}
  onClick={onTipSelect}
>
  {percentage}%
</div>
);

export default TipButton;