import React from "react";

interface SkeletonButtonProps {
    className?: string;
}

export const SkeletonButton: React.FC<SkeletonButtonProps> = ({
    className,
}) => {
    return (
        <div
            className={`h-10 animate-pulse rounded bg-gray-300 ${className || ""}`}
        ></div>
    );
};
