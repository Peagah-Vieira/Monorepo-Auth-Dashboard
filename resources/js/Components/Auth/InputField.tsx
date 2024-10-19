import InputError from "@/Components/InputError";
import { Input } from "@/Components/ShadcnUI/input";
import { Label } from "@/Components/ShadcnUI/label";
import React from "react";

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    icon?: React.ReactElement;
    passwordToggleButton?: React.ReactElement;
}

export const InputField = ({
    id,
    label,
    type,
    value,
    onChange,
    error,
    placeholder,
    required,
    disabled,
    icon,
    passwordToggleButton,
}: InputFieldProps) => {
    return (
        <div className="relative">
            <Label htmlFor={id}>
                {label}
                {required && <span className="p-1 text-red-500">*</span>}
            </Label>
            <div className="flex items-center">
                {icon && (
                    <span className="absolute left-3 transform border-gray-300 text-gray-500">
                        {icon}
                    </span>
                )}
                <Input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    className={`pl-10 pr-10 ${error ? "border-red-500" : ""}`}
                    aria-label={label}
                    aria-required="true"
                />
                {passwordToggleButton && (
                    <div className="absolute right-3 flex h-full cursor-pointer items-center">
                        {passwordToggleButton}
                    </div>
                )}
            </div>
            <InputError message={error} className="mt-2" />
        </div>
    );
};
