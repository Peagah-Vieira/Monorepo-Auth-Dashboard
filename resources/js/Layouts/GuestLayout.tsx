import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex h-screen flex-col bg-gray-50 dark:bg-gray-900">
            <div className="flex h-full w-full items-center justify-center p-5">
                {children}
            </div>
            <Toaster
                position="top-right"
                expand={false}
                richColors
                closeButton
            />
        </div>
    );
}
