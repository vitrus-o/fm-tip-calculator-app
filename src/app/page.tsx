"use client"

import Input from "@/components/ui/Input";
import TipSelection from "@/components/ui/TipSelection";
import Result from "@/components/ui/Result";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-grey-50">
      <section className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-7 w-full max-w-4xl md:aspect-[2/1] items-stretch">
        <div className="flex flex-col justify-between gap-6 flex-1 h-full">
          <Input
            header="Bill"
            icon="/images/icon-dollar.svg"
            value=""
            onChange={() => {}}
            placeholder="0"
            className="text-right"
            allowFloatingNum={true}
            allowZero={true}
          />
          <TipSelection
            selectedTip={undefined}
            onSelect={() => {}}
            customTip=""
            onCustomTipChange={() => {}}
          />
          <Input
            header="Number of People"
            icon="/images/icon-person.svg"
            value=""
            onChange={() => {}}
            placeholder="0"
            className="text-right"
            allowFloatingNum={false}
            allowZero={false}
          />
        </div>
        <div className="flex-1 flex items-stretch">
          <Result tipAmount="0.00" totalAmount="0.00" />
        </div>
      </section>
    </main>
  );
}