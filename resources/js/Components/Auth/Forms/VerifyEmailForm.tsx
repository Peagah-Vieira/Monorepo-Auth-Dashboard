import { SkeletonButton } from "@/Components/Auth/Skeletons/SkeletonButton";
import { SkeletonInputField } from "@/Components/Auth/Skeletons/SkeletonInputField";
import { SkeletonText } from "@/Components/Auth/Skeletons/SkeletonText";
import { SubmitButton } from "@/Components/Auth/SubmitButton";
import { Skeleton } from "@/Components/ShadcnUI/skeleton";
import { useVerifyEmailForm } from "@/hooks/useVerifyEmailForm";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { LoadingSpinner } from "@/Components/LoadingSpinner";

export default function VerifyEmailForm() {
    const { processing, submit, inputsLoaded, setInputsLoaded } =
        useVerifyEmailForm();

    useEffect(() => {
        setInputsLoaded({ email: true });
    }, [setInputsLoaded]);

    if (!Object.values(inputsLoaded).every(Boolean)) {
        return (
            <Skeleton>
                <SkeletonInputField fieldsCount={1} />
                <SkeletonButton className="mt-4" />
                <div className="mt-4 flex flex-col items-center">
                    <SkeletonText />
                </div>
            </Skeleton>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-6">
            <SubmitButton
                type="submit"
                disabled={processing}
                label={
                    processing ? <LoadingSpinner /> : "Send Verification Link"
                }
            />
            <div className="mt-4 text-center text-sm">
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                    Logout
                </Link>
            </div>
        </form>
    );
}
