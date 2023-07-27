import { ToggleThemeButton } from "@/components";
import React from "react";

const RegisterLayout = ({ children }) => {
    return (
        <div className="register h-full overflow-auto bg-cover bg-no-repeat">
            <div className="h-12 bg-white px-4 flex justify-end items-center">
                <ToggleThemeButton />
            </div>
            {children}
        </div>
    );
};

export default RegisterLayout;
