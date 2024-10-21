import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ShadcnUI/card";
import RegisterForm from "@/Components/Auth/Forms/RegisterForm";

export default function Register() {
    return (
        <Guest>
            <Head title="Register" />
            <div className="flex h-full w-full items-center justify-center bg-background">
                <Card className="w-full max-w-lg rounded-lg bg-card p-4 shadow-sm">
                    <CardHeader className="text-left">
                        <CardTitle className="text-2xl text-primary-foreground">
                            Create Account
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Fill in your information below to create an account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RegisterForm />
                    </CardContent>
                </Card>
            </div>
        </Guest>
    );
}
