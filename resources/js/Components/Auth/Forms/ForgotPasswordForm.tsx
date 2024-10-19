import { InputField } from "@/Components/Auth/InputField";
import { SubmitButton } from "@/Components/Auth/SubmitButton";
import { Link } from "@inertiajs/react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { Skeleton } from "@/Components/ShadcnUI/skeleton";
import { SkeletonInputField } from "@/Components/Auth/Skeletons/SkeletonInputField";
import { SkeletonText } from "@/Components/Auth/Skeletons/SkeletonText";
import { SkeletonButton } from "@/Components/Auth/Skeletons/SkeletonButton";
import { useForgotPasswordForm } from "@/hooks/useForgotPasswordForm";
import { LoadingSpinner } from "@/Components/LoadingSpinner";

export default function ForgotPasswordForm() {
    const {
        data,
        setData,
        processing,
        errors,
        inputsLoaded,
        setInputsLoaded,
        submit,
    } = useForgotPasswordForm();

    useEffect(() => {
        setInputsLoaded({
            email: true,
        });
    }, [setInputsLoaded]);

    if (!Object.values(inputsLoaded).every(Boolean)) {
        return (
            <Skeleton>
                <SkeletonInputField fieldsCount={4} />
                <SkeletonButton className="mt-4" />
                <div className="mt-4 flex flex-col items-center">
                    <SkeletonText />
                </div>
            </Skeleton>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-6">
            <InputField
                id="email"
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                placeholder="youremail@example.com"
                required={true}
                error={errors.email}
                icon={<EnvelopeClosedIcon />}
            />
            <SubmitButton
                type="submit"
                disabled={processing}
                variant={"default"}
                label={
                    processing ? <LoadingSpinner /> : "Send Password Reset Link"
                }
            />
            <div className="mt-4 text-center text-sm">
                <Link href={route("login")} className="underline">
                    Already have an account? Go back to login
                </Link>
            </div>
        </form>
    );
}
