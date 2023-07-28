"use client";
import { getDecryptedCookies } from "@/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./slices/userSlice";

const Wrapper = ({ children }) => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = getDecryptedCookies("user");
        dispatch(setUser(userData));
    }, []);

    return <div className={`h-full ${theme}`}>{children}</div>;
};

export default Wrapper;
