import { InputField } from "@/Components/Auth/InputField";
import { PasswordToggleButton } from "@/Components/Auth/PasswordToggleButton";
import { SubmitButton } from "@/Components/Auth/SubmitButton";
import Checkbox from "@/Components/Checkbox";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@/Components/ShadcnUI/skeleton";
import { SkeletonInputField } from "@/Components/Auth/Skeletons/SkeletonInputField";
import { SkeletonCheckbox } from "@/Components/Auth/Skeletons/SkeletonCheckbox";
import { SkeletonText } from "@/Components/Auth/Skeletons/SkeletonText";
import { SkeletonButton } from "@/Components/Auth/Skeletons/SkeletonButton";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useLoginForm } from "@/hooks/UseLoginForm";
import { LoadingSpinner } from "@/Components/LoadingSpinner";

export default function LoginForm() {
    const {
        data,
        setData,
        submit,
        processing,
        errors,
        showPassword,
        toggleShowPassword,
        inputsLoaded,
        setInputsLoaded,
    } = useLoginForm();

    useEffect(() => {
        setInputsLoaded({ email: true, password: true });
    }, [setInputsLoaded]);

    if (!Object.values(inputsLoaded).every(Boolean)) {
        return (
            <Skeleton>
                <SkeletonInputField fieldsCount={2} />
                <SkeletonCheckbox />
                <SkeletonButton className="mt-4" />
                <div className="mt-4 flex flex-col items-center">
                    <SkeletonText />
                </div>
            </Skeleton>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-4">
            <InputField
                id="email"
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                placeholder="youremail@example.com"
                required={true}
                error={errors.email}
                icon={<EnvelopeClosedIcon aria-label="Email icon" />}
            />
            <InputField
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                placeholder="••••••••"
                required={true}
                error={errors.password}
                passwordToggleButton={
                    <PasswordToggleButton
                        isPasswordVisible={showPassword}
                        togglePasswordVisibility={toggleShowPassword}
                        ariaLabelVisible="Hide password"
                        ariaLabelHidden="Show password"
                    />
                }
                icon={<LockClosedIcon aria-label="Password icon" />}
            />
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Remember me
                    </span>
                </div>
                <Link
                    href={route("password.request")}
                    className="text-sm underline"
                >
                    Forgot your password?
                </Link>
            </div>
            <SubmitButton
                type="submit"
                disabled={processing}
                variant={"default"}
                label={processing ? <LoadingSpinner /> : "Login"}
            />
            <div className="mt-4 text-center text-sm">
                Don't have an account?{" "}
                <Link href={route("register")} className="underline">
                    Sign up
                </Link>
            </div>
        </form>
    );
}
