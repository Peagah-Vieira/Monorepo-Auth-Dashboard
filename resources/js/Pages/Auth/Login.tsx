import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ShadcnUI/card";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import LoginForm from "@/Components/Auth/Forms/LoginForm";

export default function LoginPage() {
    return (
        <Guest>
            <Head title="Login" />
            <div className="flex h-full w-full items-center justify-center">
                <Card className="w-full max-w-lg rounded-lg bg-white p-4 shadow-sm">
                    <CardHeader className="text-left">
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription className="mt-2 text-sm">
                            Sign in to your account to continue.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
        </Guest>
    );
}
