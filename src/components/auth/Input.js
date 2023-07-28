"use client";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ErrorLabel from "./ErrorLabel";

const Input = ({
    name,
    label,
    type = "text",
    style = "default",
    validation = {},
    ...props
}) => {
    const isPasswordType = type === "password";
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className={`auth-input ${style}`}>
            <label className="font-semibold text-sm">{label}</label>
            <div className="input-wrapper mt-2 h-12 rounded-3xl border flex items-center justify-between px-4">
                <input
                    {...register(name, {
                        required: "Tidak boleh kosong",
                        ...validation,
                    })}
                    className="flex-1 h-full bg-transparent focus:outline-none"
                    type={
                        (isPasswordType && showPassword) || !isPasswordType
                            ? "text"
                            : "password"
                    }
                    {...props}
                />
                {isPasswordType && (
                    <div
                        className="cursor-pointer ml-4"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <AiFillEyeInvisible size={20} />
                        ) : (
                            <AiFillEye size={20} />
                        )}
                    </div>
                )}
            </div>
            {errors[name] && <ErrorLabel message={errors[name].message} />}
        </div>
    );
};

export default Input;
