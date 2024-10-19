import { Page, PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { toast } from "sonner";

export const useVerifyEmailForm = () => {
    const { post, processing } = useForm({});
    const [inputsLoaded, setInputsLoaded] = useState({
        email: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const promise = () => {
            return new Promise<Page<PageProps>>((resolve, reject) => {
                post(route("verification.send"), {
                    onSuccess: (response) => {
                        resolve(response);
                    },
                    onError: (errors) => {
                        reject(errors);
                    },
                });
            });
        };
        toast.promise(promise, {
            loading: "Sending verification email...",
            success: "Check your email to confirm your account.",
            error: "Try again. If the problem persists, contact support.",
            duration: 5000,
        });
    };

    return {
        post,
        processing,
        submit,
        inputsLoaded,
        setInputsLoaded,
    };
};
