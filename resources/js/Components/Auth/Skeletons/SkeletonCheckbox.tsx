import React from "react";

export const SkeletonCheckbox: React.FC = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="h-5 w-5 animate-pulse rounded bg-gray-300"></div>
                <span className="ml-2 h-4 w-32 animate-pulse rounded bg-gray-300 text-sm"></span>
            </div>
        </div>
    );
};
