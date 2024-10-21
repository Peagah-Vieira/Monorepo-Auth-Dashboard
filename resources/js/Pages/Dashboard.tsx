import AuthLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Skeleton } from "@/Components/ShadcnUI/skeleton";

export default function Dashboard() {
    return (
        <AuthLayout>
            <Head title="Dashboard" />
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[250px] w-full rounded-xl" />
                </div>
            </div>
        </AuthLayout>
    );
}
