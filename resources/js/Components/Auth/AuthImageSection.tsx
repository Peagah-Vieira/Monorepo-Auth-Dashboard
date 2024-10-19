import React from "react";

interface AuthImageSectionProps {
    imageUrl: string;
    label: string;
}

export const AuthImageSection: React.FC<AuthImageSectionProps> = ({
    imageUrl,
    label,
}) => {
    return (
        <div className="relative hidden items-center justify-center bg-gradient-to-r from-blue-800 to-blue-400 lg:flex lg:w-1/2">
            <img
                src={imageUrl}
                alt="Background Image"
                className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute left-4 top-4 z-10 text-2xl font-bold text-white">
                {label}
            </div>
        </div>
    );
};
