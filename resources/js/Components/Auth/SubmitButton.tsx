import { ButtonHTMLAttributes, ReactNode } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    label: ReactNode;
}

export const SubmitButton = ({
    className = "",
    disabled = false,
    label,
    ...props
}: SubmitButtonProps) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2 font-bold text-white transition-transform duration-200 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 ${
                disabled ? "cursor-not-allowed opacity-50" : ""
            } ${className}`}
            onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.98)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            {label}
        </button>
    );
};
