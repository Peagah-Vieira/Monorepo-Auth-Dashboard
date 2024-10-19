import ResetPasswordForm from "@/Components/Auth/Forms/ResetPasswordForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ShadcnUI/card";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    return (
        <Guest>
            <Head title="Reset Password" />
            <div className="flex h-full w-full items-center justify-center">
                <Card className="w-full max-w-lg rounded-lg bg-white p-4 shadow-sm">
                    <CardHeader className="text-left">
                        <CardTitle className="text-2xl">
                            Reset Password
                        </CardTitle>
                        <CardDescription className="mt-2">
                            Enter your email and new password. Don’t forget to
                            confirm your new password!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResetPasswordForm token={token} email={email} />
                    </CardContent>
                </Card>
            </div>
        </Guest>
    );
}
