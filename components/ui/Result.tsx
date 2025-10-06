import React from "react";
import { ResultProps } from "../../types/index";

const Result: React.FC<ResultProps> = ({
  tipAmount = "0.00",
  totalAmount = "0.00",
  onReset,
  disabled = false,
}) => {
  return (
    <section className="bg-green-900 rounded-xl p-6 flex flex-col gap-6 w-full h-full">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white font-bold">Tip Amount</span>
            <span className="text-grey-400 text-xs font-bold">/ person</span>
          </div>
          <div className="text-green-400 text-4xl font-bold">
            ${tipAmount}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white font-bold">Total</span>
            <span className="text-grey-400 text-xs font-bold">/ person</span>
          </div>
          <div className="text-green-400 text-4xl font-bold">
            ${totalAmount}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={disabled}
        className="w-full bg-green-400 text-green-900 font-bold rounded-md py-3 hover:bg-green-200 disabled:bg-green-500 disabled:opacity-50"
      >
        RESET
      </button>
    </section>
  );
};

export default Result;