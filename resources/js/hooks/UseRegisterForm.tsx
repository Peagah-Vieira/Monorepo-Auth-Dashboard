import { FormEventHandler, useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";

export const useRegisterForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);
    const [inputsLoaded, setInputsLoaded] = useState({
        name: false,
        email: false,
        password: false,
        password_confirmation: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const promise = () => {
            return new Promise((resolve, reject) => {
                post(route("register"), {
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
            loading: "Registering...",
            success: "Registration complete! We're happy to have you with us!",
            error: (errors) =>
                errors.email ||
                errors.password ||
                "Please check your credentials. If the problem persists, contact support.",
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
