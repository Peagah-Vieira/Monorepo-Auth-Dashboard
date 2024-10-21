import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/Components/ShadcnUI/theme-provider";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="flex h-screen flex-col bg-background text-foreground">
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
        </ThemeProvider>
    );
}
