"use client";

import { useState } from "react";
import { calculateTipAndTotal } from "@/utils/calculateTipAndTotal";
import Input from "@/components/ui/Input";
import TipSelection from "@/components/ui/TipSelection";
import Result from "@/components/ui/Result";

export default function TipCalculatorPage() {
  const [bill, setBill] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [selectedTip, setSelectedTip] = useState<number | undefined>(undefined);
  const [customTip, setCustomTip] = useState("");

  const tipPercent = customTip ? parseFloat(customTip) || 0 : selectedTip ?? 0;
  const { tipAmount, totalAmount } = calculateTipAndTotal(
    bill,
    numPeople,
    tipPercent
  );

  const isResetDisabled =
    bill === "" &&
    numPeople === "" &&
    selectedTip === undefined &&
    customTip === "";

  const handleReset = () => {
    setBill("");
    setNumPeople("");
    setSelectedTip(undefined);
    setCustomTip("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-grey-50">
      <section className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-7 w-full max-w-4xl md:aspect-[2/1] items-stretch">
        <div className="flex flex-col justify-between gap-6 flex-1 h-full">
          <Input
            header="Bill"
            icon="/images/icon-dollar.svg"
            value={bill}
            onChange={setBill}
            placeholder="0"
            className="text-right"
            allowFloatingNum={true}
            allowZero={true}
          />
          <TipSelection
            selectedTip={selectedTip}
            onSelect={setSelectedTip}
            customTip={customTip}
            onCustomTipChange={setCustomTip}
          />
          <Input
            header="Number of People"
            icon="/images/icon-person.svg"
            value={numPeople}
            onChange={setNumPeople}
            placeholder="0"
            className="text-right"
            allowFloatingNum={false}
            allowZero={false}
          />
        </div>
        <div className="flex-1 flex items-stretch">
          <Result
            tipAmount={tipAmount}
            totalAmount={totalAmount}
            onReset={handleReset}
            disabled={isResetDisabled}
          />
        </div>
      </section>
    </main>
  );
}