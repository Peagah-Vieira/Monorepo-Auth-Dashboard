import React from "react";

export const SkeletonInputField = ({ fieldsCount = 2 }) => {
    const skeletonFields = Array.from({ length: fieldsCount }, (_, index) => (
        <div key={index} className="relative mb-4 animate-pulse">
            <div className="mb-2 h-4 w-1/3 rounded bg-gray-200"></div>
            <div className="flex items-center">
                <span className="absolute left-3 h-5 w-5 rounded-full bg-gray-200"></span>
                <div className="h-10 flex-1 rounded bg-gray-200"></div>
                <div className="absolute right-3 flex h-full cursor-pointer items-center">
                    <span className="h-5 w-5 rounded-full bg-gray-200"></span>
                </div>
            </div>
        </div>
    ));

    return <>{skeletonFields}</>;
};
