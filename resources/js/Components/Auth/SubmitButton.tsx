import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/Components/ShadcnUI/button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    variant:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link"
        | null
        | undefined;
    label: ReactNode;
}

export const SubmitButton = ({
    className,
    disabled,
    type,
    label,
    variant,
}: SubmitButtonProps) => {
    return (
        <Button
            variant={variant}
            className={cn("w-full", className)}
            disabled={disabled}
            type={type}
        >
            {label}
        </Button>
    );
};
