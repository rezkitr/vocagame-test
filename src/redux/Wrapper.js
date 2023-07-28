"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "./slices/userSlice";

const Wrapper = ({ children }) => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const router = useRouter();
    useEffect(() => {
        const userCookies = Cookies.get("user");
        if (!userCookies) {
            router.push("/register");
            dispatch(onLogout());
        } else {
            router.push("/profile");
        }
    });

    return <div className={`h-full ${theme}`}>{children}</div>;
};

export default Wrapper;
