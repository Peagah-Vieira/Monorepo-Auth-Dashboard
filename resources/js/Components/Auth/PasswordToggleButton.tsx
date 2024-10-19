import React from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export const PasswordToggleButton: React.FC<{
    isPasswordVisible: boolean;
    togglePasswordVisibility: () => void;
    ariaLabelVisible: string;
    ariaLabelHidden: string;
}> = ({
    isPasswordVisible,
    togglePasswordVisibility,
    ariaLabelVisible,
    ariaLabelHidden,
}) => {
    return (
        <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3"
            aria-label={isPasswordVisible ? ariaLabelVisible : ariaLabelHidden}
        >
            {isPasswordVisible ? (
                <EyeOpenIcon className="h-5 w-5 text-gray-500" />
            ) : (
                <EyeClosedIcon className="h-5 w-5 text-gray-500" />
            )}
        </button>
    );
};
