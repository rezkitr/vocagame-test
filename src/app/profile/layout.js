"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Banner, Footer, Header } from "@/components/profile";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProfileLayout = ({ children }) => {
    const router = useRouter();
    const user = useSelector((state) => state.user.user);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const userCookies = Cookies.get("user");
        const loginCookies = Cookies.get("loginSession");

        if (userCookies) {
            if (!loginCookies) {
                router.push("/login");
            }
        } else {
            router.push("/register");
        }
        setIsChecking(false);
    }, []);

    if (!user || isChecking) {
        return null;
    }

    return (
        <div className="min-h-full flex flex-col">
            <Header />
            <div className="flex-1 px-4 md:px-24 py-6">
                <Banner />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default ProfileLayout;
