import * as React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ShadcnUI/sidebar";
import { PlatformNavigation } from "@/Components/Dashboard/Navigation/PlatformNavigation";
import { UserNavigation } from "@/Components/Dashboard/Navigation/UserNavigation";
import { User } from "@/types";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { PlatformTwoNavigation } from "@/Components/Dashboard/Navigation/PlatformTwoNavigation";
import { PlatformThreeNavigation } from "@/Components/Dashboard/Navigation/PlatformThreeNavigation";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    user: User;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
    return (
        <Sidebar
            collapsible="icon"
            {...props}
            className="border-r border-border bg-sidebar text-sidebar-foreground"
        >
            <SidebarHeader className="border-b border-border bg-navbar text-navbar-foreground">
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-foreground text-background">
                        <a href="https://github.com/Peagah-Vieira">
                            <ApplicationLogo className="size-6" />
                        </a>
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <a href="https://github.com/Peagah-Vieira">
                            <span className="truncate font-semibold text-sidebar-foreground">
                                Peagah Vieira
                            </span>
                        </a>
                        <a href="https://github.com/Peagah-Vieira">
                            <span className="truncate text-xs text-muted-foreground">
                                Full-Stack Developer
                            </span>
                        </a>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent className="bg-sidebar text-sidebar-foreground">
                <PlatformNavigation />
                <PlatformTwoNavigation />
                <PlatformThreeNavigation />
            </SidebarContent>
            <SidebarFooter className="border-t border-sidebar-border bg-sidebar text-sidebar-foreground">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <UserNavigation user={user} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
