"use client";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({ label, type = "text", style = "default" }) => {
    const isPasswordType = type === "password";
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className={`auth-input ${style}`}>
            <label className="font-semibold text-sm">{label}</label>
            <div className="input-wrapper mt-2 h-12 rounded-3xl border flex items-center justify-between px-4">
                <input
                    className="flex-1 h-full bg-transparent focus:outline-none"
                    type={
                        (isPasswordType && showPassword) || !isPasswordType
                            ? "text"
                            : "password"
                    }
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
        </div>
    );
};

export default Input;
