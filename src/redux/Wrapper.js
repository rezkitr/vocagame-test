"use client";
import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
    const theme = useSelector((state) => state.theme.theme);
    return <div className={`h-full ${theme}`}>{children}</div>;
};

export default Wrapper;
