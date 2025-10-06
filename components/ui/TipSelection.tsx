import React from "react";
import { TipSelectionProps, tipOptions } from "../../types/index";
import TipButton from "./TipButton";
import Input from "./Input";

const TipSelection: React.FC<TipSelectionProps> = ({
  selectedTip,
  onSelect,
  customTip,
  onCustomTipChange,
}) => {
  const handleTipSelect = (val: number) => {
    if (onSelect) onSelect(val);
    if (onCustomTipChange) onCustomTipChange("");
  };

  const handleCustomTipChange = (value: string) => {
    if (onCustomTipChange) onCustomTipChange(value);
    if (onSelect) onSelect(undefined);
  };

  return (
    <div>
      <span className="block text-grey-500 mb-2 font-bold text-base">
        Select Tip %
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tipOptions.map((val) => (
          <TipButton
            key={val}
            percentage={val}
            isSelected={selectedTip === val && customTip === ""}
            onTipSelect={() => handleTipSelect(val)}
          />
        ))}
        <Input
          header=""
          icon=""
          value={customTip ?? ""}
          allowFloatingNum={true}
          allowZero={true}
          onChange={handleCustomTipChange}
          placeholder="Custom"
          className="text-center text-xl font-bold border-2 border-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default TipSelection;