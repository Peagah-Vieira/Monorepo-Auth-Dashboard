import { useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import { Page, PageProps } from "@/types";
import { toast } from "sonner";

export const useForgotPasswordForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const [inputsLoaded, setInputsLoaded] = useState({
        email: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const promise = () => {
            return new Promise<Page<PageProps>>((resolve, reject) => {
                post(route("password.email"), {
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
            loading: "Sending email for password reset...",
            success: (data) =>
                data.props.status || "Check your inbox to reset your password.",
            error: (errors) =>
                errors.email || "An error occurred. Please try again later.",
            duration: 5000,
        });
    };

    return {
        data,
        setData,
        processing,
        errors,
        inputsLoaded,
        setInputsLoaded,
        submit,
    };
};
