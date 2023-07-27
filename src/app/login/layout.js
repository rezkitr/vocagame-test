import { ToggleThemeButton } from "@/components";

const LoginLayout = ({ children }) => {
    return <div className="h-full relative">
        <div className="absolute top-4 right-6">
            <ToggleThemeButton />
        </div>
        {children}</div>;
};

export default LoginLayout;
