"use client";
import { Button } from "@/components";
import { FormHeader } from "@/components/profile";
import { FaUserCircle, FaPenFancy } from "react-icons/fa";
import { BiSolidLogOut } from "react-icons/bi";

const Profile = () => {
    return (
        <div>
            <FormHeader />
            <div className="flex gap-6">
                <div className="flex-[0.3] h-[600px] flex flex-col gap-3 pt-4 pb-10 pr-6 border-solid border-r border-gray-200">
                    <div className="flex-1 border-solid border-b border-gray-600">
                        <Button
                            text="Profile"
                            leftIcon={FaUserCircle}
                            className="text-sm py-0 bg-transparent"
                        />
                    </div>
                    <div>
                        <Button
                            text="Logout"
                            leftIcon={BiSolidLogOut}
                            className="text-sm text-red-800 py-0 bg-transparent"
                        />
                    </div>
                </div>
                <div className="flex-1 shadow-lg rounded-md p-6">
                    <div className="flex items-center gap-2 pb-3 border-solid border-b border-gray-300 text-lg">
                        <FaPenFancy />
                        <h1 className="font-bold">Edit Profile</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
