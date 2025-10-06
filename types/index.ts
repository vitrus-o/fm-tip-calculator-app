export interface InputProps {
  header: string;
  placeholder?: string;
  icon: string;
  value: string;
  allowFloatingNum: Boolean;
  allowZero: Boolean;
  onChange: (value: string) => void;
  className?: string;
}

export interface TipButtonProps {
  percentage: number;
  isSelected: boolean;
  onTipSelect: () => void;
}

export interface TipInputProps {
  customTip: string;
  onCustomTipChange: (value: string) => void;
}

export interface TipSelectionProps {
  selectedTip: number | undefined;
  onSelect: (tip: number | undefined) => void;
  customTip: string;
  onCustomTipChange: (value: string) => void;
}

export interface ResultProps {
  tipAmount: string;
  totalAmount: string;
  onReset?: () => void;
  disabled?: boolean;
}

export const tipOptions = [5, 10, 15, 25, 50];