import { ThemeProvider } from "@/Components/ShadcnUI/theme-provider";
import { SidebarInset, SidebarProvider } from "@/Components/ShadcnUI/sidebar";
import { Toaster } from "sonner";
import { PropsWithChildren } from "react";
import { AppNavbar } from "@/Components/Dashboard/AppNavbar";
import { AppSidebar } from "@/Components/Dashboard/AppSidebar";
import { usePage } from "@inertiajs/react";

export default function AuthLayout({ children }: PropsWithChildren) {
    const user = usePage().props.auth.user;

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar variant="inset" user={user} />
                <SidebarInset>
                    <AppNavbar user={user} />
                    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-background p-4 text-foreground md:gap-8 md:p-10">
                        {children}
                    </main>
                </SidebarInset>
                <Toaster
                    position="top-right"
                    expand={false}
                    richColors
                    closeButton
                />
            </SidebarProvider>
        </ThemeProvider>
    );
}
