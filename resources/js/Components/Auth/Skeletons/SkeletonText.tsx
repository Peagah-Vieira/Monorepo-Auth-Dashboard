import React from "react";

interface SkeletonTextProps {
    className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({ className }) => {
    return (
        <span
            className={`inline-block h-4 w-64 animate-pulse rounded bg-gray-300 ${className || ""}`}
        ></span>
    );
};
