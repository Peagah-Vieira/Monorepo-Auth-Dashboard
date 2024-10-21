import { Moon, Sun } from "lucide-react";
import { Button } from "@/Components/ShadcnUI/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ShadcnUI/dropdown-menu";
import { useTheme } from "@/Components/ShadcnUI/theme-provider";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="border-border bg-background p-3 text-foreground"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="border-border bg-card text-card-foreground dark:border-navbar-border dark:bg-navbar dark:text-navbar-foreground"
            >
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="hover:bg-primary hover:text-primary-foreground"
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="hover:bg-primary hover:text-primary-foreground"
                >
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="hover:bg-primary hover:text-primary-foreground"
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
