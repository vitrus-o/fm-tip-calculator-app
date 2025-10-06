export function calculateTipAndTotal(
  bill: string,
  numPeople: string,
  tipPercent: number
): { tipAmount: string; totalAmount: string } {
  const billValue = parseFloat(bill) || 0;
  const peopleValue = parseInt(numPeople) || 0;
  const tipValue = tipPercent || 0;

  if (billValue <= 0 || peopleValue <= 0) {
    return { tipAmount: "0.00", totalAmount: "0.00" };
  }

  const tipAmount = (billValue * tipValue) / 100 / peopleValue;
  const totalAmount = billValue / peopleValue + tipAmount;

  return {
    tipAmount: tipAmount.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
  };
}
