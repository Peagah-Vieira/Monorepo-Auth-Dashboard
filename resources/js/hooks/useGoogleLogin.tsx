import { FormEventHandler } from "react";
import { toast } from "sonner";
import { useForm } from "@inertiajs/react";

export const useGoogleAuth = () => {
    const { post } = useForm({});

    const submitGoogleAuth: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login.google"), {
            onSuccess: () => {
                toast.success("Login com Google bem-sucedido!");
            },
            onError: (errors) => {
                toast.error(errors.email || "Check your email and try again.");
            },
        });
    };

    return {
        submitGoogleAuth,
    };
};
