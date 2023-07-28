"use client";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "./slices/userSlice";

const Wrapper = ({ children }) => {
    const theme = useSelector((state) => state.theme.theme);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const pathname = usePathname();

    // useEffect(() => {
    //     const userCookies = Cookies.get("user");
    //     if (!userCookies) {
    //         if (user) {
    //             router.push("/login");
    //         } else {
    //             router.push("/register");
    //             dispatch(onLogout());
    //         }
    //     }
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 500);
    // }, [pathname, user]);

    // if (isLoading) {
    //     return (
    //         <div className="h-full flex items-center justify-center text-sm">
    //             Loading...
    //         </div>
    //     );
    // }

    return <div className={`h-full ${theme}`}>{children}</div>;
};

export default Wrapper;
