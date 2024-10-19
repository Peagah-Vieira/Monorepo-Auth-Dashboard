import { FormEventHandler, useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { Page, PageProps } from "@/types";

export const useResetPasswordForm = ({
    token,
    email,
}: {
    token: string;
    email: string;
}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);
    const [inputsLoaded, setInputsLoaded] = useState({
        email: false,
        password: false,
        password_confirmation: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const promise = () => {
            return new Promise<Page<PageProps>>((resolve, reject) => {
                post(route("password.store"), {
                    onFinish: () => reset("password", "password_confirmation"),
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
            loading: "Resetting password...",
            success: (data) =>
                data.props.status ||
                "You can now log in with your new password.",
            error: (errors) =>
                errors.email ||
                errors.password ||
                "Check your information and try again. If the problem persists, please contact support.",
            duration: 5000,
        });
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowPasswordConfirmation = () =>
        setShowPasswordConfirmation(!showPasswordConfirmation);

    return {
        data,
        setData,
        submit,
        processing,
        errors,
        showPassword,
        toggleShowPassword,
        showPasswordConfirmation,
        toggleShowPasswordConfirmation,
        inputsLoaded,
        setInputsLoaded,
    };
};
