import { InputField } from "@/Components/Auth/InputField";
import { PasswordToggleButton } from "@/Components/Auth/PasswordToggleButton";
import { SubmitButton } from "@/Components/Auth/SubmitButton";
import {
    EnvelopeClosedIcon,
    LockClosedIcon,
    PersonIcon,
} from "@radix-ui/react-icons";
import { Skeleton } from "@/Components/ShadcnUI/skeleton";
import { SkeletonInputField } from "@/Components/Auth/Skeletons/SkeletonInputField";
import { SkeletonText } from "@/Components/Auth/Skeletons/SkeletonText";
import { SkeletonButton } from "@/Components/Auth/Skeletons/SkeletonButton";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useRegisterForm } from "@/hooks/UseRegisterForm";
import { LoadingSpinner } from "@/Components/LoadingSpinner";

export default function RegisterForm() {
    const {
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
    } = useRegisterForm();

    useEffect(() => {
        setInputsLoaded({
            name: true,
            email: true,
            password: true,
            password_confirmation: true,
        });
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
            <InputField
                id="name"
                label="Name"
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                placeholder="Ex: Jane Doe"
                required={true}
                error={errors.name}
                icon={<PersonIcon aria-label="Name icon" />}
            />
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
            <InputField
                id="password_confirmation"
                label="Confirm Password"
                type={showPasswordConfirmation ? "text" : "password"}
                value={data.password_confirmation}
                onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                }
                placeholder="••••••••"
                required={true}
                passwordToggleButton={
                    <PasswordToggleButton
                        isPasswordVisible={showPasswordConfirmation}
                        togglePasswordVisibility={
                            toggleShowPasswordConfirmation
                        }
                        ariaLabelVisible="Hide password confirmation"
                        ariaLabelHidden="Show password confirmation"
                    />
                }
                error={errors.password_confirmation}
                icon={
                    <LockClosedIcon aria-label="Password confirmation icon" />
                }
            />
            <SubmitButton
                type="submit"
                disabled={processing}
                variant={"default"}
                label={processing ? <LoadingSpinner /> : "Register"}
            />
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href={route("login")} className="underline">
                    Log in
                </Link>
            </div>
        </form>
    );
}
