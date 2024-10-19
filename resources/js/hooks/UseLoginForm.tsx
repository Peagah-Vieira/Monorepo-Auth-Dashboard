import { FormEventHandler, useState } from "react";
import { toast } from "sonner";
import { useForm } from "@inertiajs/react";

export const useLoginForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [inputsLoaded, setInputsLoaded] = useState({
        email: false,
        password: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
            onError: (errors) => {
                toast.error(errors.email || "Check your email and try again.");
            },
        });
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);

    return {
        data,
        setData,
        submit,
        processing,
        errors,
        showPassword,
        toggleShowPassword,
        inputsLoaded,
        setInputsLoaded,
    };
};
