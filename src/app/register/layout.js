import { ToggleThemeButton } from "@/components";
import React from "react";

const RegisterLayout = ({ children }) => {
    return (
        <div>
            <div className="h-12 bg-white px-4 flex justify-end items-center">
                <ToggleThemeButton />
            </div>
            {children}
        </div>
    );
};

export default RegisterLayout;
