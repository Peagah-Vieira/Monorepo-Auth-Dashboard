import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/Components/ShadcnUI/button";
import { cn } from "@/lib/utils";

interface SocialLoginButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    onClick?: () => void;
}

export default function SocialLoginButton({
    className,
    disabled,
    type,
    label,
    variant,
    onClick,
}: SocialLoginButtonProps) {
    return (
        <Button
            variant={variant}
            className={cn("w-full", className)}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {label}
        </Button>
    );
}
