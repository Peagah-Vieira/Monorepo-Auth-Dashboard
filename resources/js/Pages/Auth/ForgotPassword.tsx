import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ShadcnUI/card";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import ForgotPasswordForm from "@/Components/Auth/Forms/ForgotPasswordForm";

export default function ForgotPassword() {
    return (
        <Guest>
            <Head title="Forgot Password" />
            <div className="flex h-full w-full items-center justify-center">
                <Card className="w-full max-w-lg rounded-lg bg-white p-4 shadow-sm">
                    <CardHeader className="text-left">
                        <CardTitle className="text-2xl font-semibold">
                            Forgot Password
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm text-gray-600">
                            Forgot your password? No problem. Just provide your
                            email address and we will send you a link to reset
                            your password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ForgotPasswordForm />
                    </CardContent>
                </Card>
            </div>
        </Guest>
    );
}
