"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";

const ToggleThemeButton = () => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(toggleTheme())}>Theme</button>;
};

export default ToggleThemeButton;
