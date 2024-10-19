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
            <div className="flex h-full w-full items-center justify-center">
                <Card className="w-full max-w-lg rounded-lg bg-white p-4 shadow-sm">
                    <CardHeader className="text-left">
                        <CardTitle className="text-2xl">
                            Create Account
                        </CardTitle>
                        <CardDescription>
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
