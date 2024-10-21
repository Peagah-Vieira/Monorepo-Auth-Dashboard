import VerifyEmailForm from "@/Components/Auth/Forms/VerifyEmailForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ShadcnUI/card";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function VerifyEmail() {
    return (
        <Guest>
            <Head title="Email Verification" />
            <div className="flex h-full w-full items-center justify-center bg-background">
                <Card className="w-full max-w-lg rounded-lg border border-border bg-card p-4 shadow-sm">
                    <CardHeader className="text-left">
                        <CardTitle className="text-2xl text-primary-foreground">
                            Email Verification
                        </CardTitle>
                        <CardDescription className="mt-2 text-muted-foreground">
                            Thank you for signing up! Before getting started,
                            could you verify your email address by clicking the
                            link we just sent you? If you didn’t receive the
                            email, we will gladly send you another.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <VerifyEmailForm />
                    </CardContent>
                </Card>
            </div>
        </Guest>
    );
}
