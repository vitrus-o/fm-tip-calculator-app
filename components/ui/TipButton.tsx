import React from "react";
import { TipButtonProps } from "../../types/index";

const TipButton: React.FC<TipButtonProps> = ({ percentage, isSelected, onTipSelect }) => (
  <button
    type="button"
    className={`rounded-lg h-12 min-w-[90px] text-xl font-bold flex items-center justify-center transition
      ${isSelected
        ? "bg-green-400 text-green-900"
        : "bg-green-900 text-white hover:bg-green-400 hover:text-green-900"
      }`}
    onClick={onTipSelect}
  >
    {percentage}%
  </button>
);

export default TipButton;