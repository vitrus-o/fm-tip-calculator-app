"use client";

import React, { useState } from "react";
import Input from "@/components/ui/Input";
import TipSelection from "@/components/ui/TipSelection";
import Result from "@/components/ui/Result";
import { calculateTipAndTotal } from "@/utils/calculateTipAndTotal";

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
    <main className="min-h-screen grid place-items-center bg-grey-50 p-6">
      <div className="w-full max-w-4xl">
        <div className="flex justify-center mb-8">
          <img src="/images/logo.svg" alt="App Logo" className="h-8 md:h-10" />
        </div>
        <section className="bg-white rounded-3xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-7 w-full max-w-4xl md:aspect-[2/1] items-stretch">
          <div className="flex flex-col justify-between gap-6">
            <Input
              header="Bill"
              icon="/images/icon-dollar.svg"
              value={bill}
              allowFloatingNum={true}
              allowZero={true}
              onChange={setBill}
              placeholder="0"
              className="text-right"
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
              allowFloatingNum={false}
              allowZero={false}
              onChange={setNumPeople}
              placeholder="0"
              className="text-right"
            />
          </div>
          <Result
            tipAmount={tipAmount}
            totalAmount={totalAmount}
            onReset={handleReset}
            disabled={isResetDisabled}
          />
        </section>
      </div>
    </main>
  );
}