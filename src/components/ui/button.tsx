import { ReactNode, MouseEvent, KeyboardEvent } from "react";
import { cn } from "@lib/utils";
import BeamBorder from "@components/animations/beam-border";

interface ButtonProps {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "disabled" | "danger" | "outline";
  isLoading?: boolean
  beam?: boolean
}

type EffectsProviderProps = {
  children: ReactNode;
  beam?: boolean
}

const EffectsProvider = ({children, beam}: EffectsProviderProps) => {
  return (
    beam ? (
      <div className="rounded-xl p-2 relative">
        <BeamBorder duration={12} size={50} initialOffset={20}/>
        {children}
      </div>
    ) :( 
      children
    )
  );
}

const Button = ({ 
  className = "", 
  onClick, 
  onKeyDown, 
  type = "button", 
  disabled, 
  children, 
  variant = "primary",
  isLoading = false,
  beam = false,
}: ButtonProps ) => {


  const baseStyles = "text-sm font-normal flex items-center justify-center gap-2 text-center rounded-lg h-8 px-4 flex-shrink-0 flex items-center justify-center";
  const variantStyles = {
    primary: " bg-radial-[at_50%_75%] from-violet-500 from-40% to-violet-600 text-white ring-1 inset-shadow-xs ring-violet-500 inset-shadow-violet-300 border-b-1 border-violet-500 cursor-pointer pt-[1px]",
    secondary: " bg-radial-[at_50%_75%] from-gray-800 from-40% to-gray-900 text-white ring-1 inset-shadow-xs ring-gray-900 inset-shadow-gray-600 border-b-1 border-gray-900 cursor-pointer pt-[2px] cursor-pointer hover:bg-gray-700",
    tertiary: " hover:bg-gray-50 bg-white ring-1 text-gray-900 ring-gray-200 cursor-pointer shadow-md shadow-gray-100",
    outline: "cursor-pointer bg-secondary text-white gap-2 transition-all duration-300 ease-in-out ring-1 ring-gray-900 hover:bg-gradient-to-b hover:from-gray-950 hover:to-gray-900",
    danger: " hover:bg-gray-50 bg-white ring-1 text-rose-500 ring-gray-200 cursor-pointer shadow-md shadow-gray-100",
    disabled: " bg-gray-300 text-gray-500 text-white cursor-not-allowed ring-1 ring-gray-300 cursor-not-allowed shadow-md shadow-gray-50 border-1 border-gray-300",
  };

  return (
    <EffectsProvider beam={beam}>
      <button
        onClick={onClick}
        className={cn(`${baseStyles} ${variantStyles[isLoading || disabled ? "disabled" : variant ]} ${className}`)}
        type={type}
        onKeyDown={onKeyDown}
        disabled={disabled}
      >
        {isLoading ? "Loading..." : children}
      </button>
    </EffectsProvider>
  );
}

export default Button;