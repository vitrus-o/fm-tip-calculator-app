import React from "react";
import { ResultProps } from "../../types/index";

const Result: React.FC<ResultProps> = ({
  tipAmount = "0.00",
  totalAmount = "0.00",
  onReset,
  disabled = false,
}) => {
  return (
    <section className="bg-green-900 rounded-xl p-6 md:p-8 flex flex-col gap-6 md:gap-8 justify-between w-full h-full">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold">Tip Amount</span>
            <span className="text-grey-400 text-xs font-bold">/ person</span>
          </div>
          <div
            className="text-green-400 text-4xl md:text-5xl font-extrabold"
            aria-live="polite"
          >
            ${tipAmount}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold">Total</span>
            <span className="text-grey-400 text-xs font-bold">/ person</span>
          </div>
          <div
            className="text-green-400 text-4xl md:text-5xl font-extrabold"
            aria-live="polite"
          >
            ${totalAmount}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={disabled}
        className="w-full bg-green-400 disabled:bg-green-500 text-green-900 font-extrabold tracking-wider rounded-md py-3 disabled:opacity-50 hover:bg-green-200"
      >
        RESET
      </button>
    </section>
  );
};

export default Result;