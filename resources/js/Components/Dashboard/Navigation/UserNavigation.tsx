import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/Components/ShadcnUI/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ShadcnUI/dropdown-menu";
import { SidebarMenuButton, useSidebar } from "@/Components/ShadcnUI/sidebar";
import { User } from "@/types";
import { Link } from "@inertiajs/react";

interface UserNavigationProps {
    user: User;
}

export function UserNavigation({ user }: UserNavigationProps) {
    const { isMobile } = useSidebar();

    const getInitials = (name: string) => {
        const nameParts = name.split(" ");
        const initials = nameParts
            .map((part) => part.charAt(0).toUpperCase())
            .join("");
        return initials || "CN";
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <Avatar className="rounded-lg">
                        <AvatarFallback className="rounded-lg bg-foreground text-background dark:text-sidebar-foreground">
                            {getInitials(user.name)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold text-sidebar-foreground">
                            {user.name}
                        </span>
                        <span className="truncate text-xs text-sidebar-foreground">
                            {user.email}
                        </span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4 text-sidebar-foreground" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-sidebar text-sidebar-foreground"
                side={isMobile ? "top" : "bottom"}
                align="center"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="rounded-lg">
                            <AvatarFallback className="rounded-lg bg-foreground text-background dark:text-sidebar-foreground">
                                {getInitials(user.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight text-sidebar-foreground">
                            <span className="truncate font-semibold">
                                {user.name}
                            </span>
                            <span className="truncate text-xs">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border-sidebar-border" />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <Sparkles className="text-sidebar-foreground" />
                        Upgrade to Pro
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="border-sidebar-border" />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <BadgeCheck className="text-sidebar-foreground" />
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <CreditCard className="text-sidebar-foreground" />
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <Bell className="text-sidebar-foreground" />
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="border-sidebar-border" />
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="w-full"
                >
                    <DropdownMenuItem className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <LogOut className="text-sidebar-foreground" />
                        Logout
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
