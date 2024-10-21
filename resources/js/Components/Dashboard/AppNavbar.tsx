import { SidebarTrigger } from "@/Components/ShadcnUI/sidebar";
import { UserNavigation } from "@/Components/Dashboard/Navigation/UserNavigation";
import { User } from "@/types";
import { ModeToggle } from "@/Components/ShadcnUI/mode-toggle";

interface AppNavbarProps {
    user: User;
}

export function AppNavbar({ user }: AppNavbarProps) {
    return (
        <header className="flex h-16 items-center justify-between border-b border-navbar-border bg-navbar px-4 text-navbar-foreground">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="border-border bg-background p-4 text-foreground" />
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />
                <UserNavigation user={user} />
            </div>
        </header>
    );
}
