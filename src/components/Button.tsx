import localFont from "next/font/local";
import { type FunctionComponent } from "react";
const regular = localFont({ src: "../pages/regular.otf" });

interface GoldButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

export const GoldButton: FunctionComponent<GoldButtonProps> = ({
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full max-w-[350px] rounded-full border border-b-[6px] border-[#cf9f00] py-1.5 text-lg font-bold tracking-wider hover:border-b-4 active:border-b-2 ${regular.className}`}
    >
      {label}
    </button>
  );
};

export const BackButton: FunctionComponent<
  Partial<GoldButtonProps> & { className?: string }
> = ({ onClick, className, label = "Back" }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-[#cf9f00] px-5 py-1 text-sm font-bold tracking-wider ${regular.className} ${className}`}
    >
      {label}
    </button>
  );
};
