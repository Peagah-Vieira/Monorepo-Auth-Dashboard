import { InputField } from "@/Components/Auth/InputField";
import { PasswordToggleButton } from "@/Components/Auth/PasswordToggleButton";
import { SkeletonButton } from "@/Components/Auth/Skeletons/SkeletonButton";
import { SkeletonInputField } from "@/Components/Auth/Skeletons/SkeletonInputField";
import { SubmitButton } from "@/Components/Auth/SubmitButton";
import { LoadingSpinner } from "@/Components/LoadingSpinner";
import { Skeleton } from "@/Components/ShadcnUI/skeleton";
import { useResetPasswordForm } from "@/hooks/UseResetPasswordForm";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";

export default function ResetPasswordForm({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
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
    } = useResetPasswordForm({ token, email });

    useEffect(() => {
        setInputsLoaded({
            email: true,
            password: true,
            password_confirmation: true,
        });
    }, [setInputsLoaded]);

    if (!Object.values(inputsLoaded).every(Boolean)) {
        return (
            <Skeleton>
                <SkeletonInputField fieldsCount={3} />
                <SkeletonButton className="mt-4" />
            </Skeleton>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-6">
            <InputField
                id="email"
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                placeholder="youremail@example.com"
                required={true}
                disabled={true}
                error={errors.email}
                icon={<EnvelopeClosedIcon />}
            />
            <InputField
                id="password"
                label="New Password"
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
                icon={<LockClosedIcon />}
            />
            <InputField
                id="password_confirmation"
                label="Confirm New Password"
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
                icon={<LockClosedIcon />}
            />
            <SubmitButton
                type="submit"
                disabled={processing}
                variant={"default"}
                label={processing ? <LoadingSpinner /> : "Reset Password"}
            />
        </form>
    );
}
