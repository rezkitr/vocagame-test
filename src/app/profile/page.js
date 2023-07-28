"use client";
import { Button } from "@/components";
import { FormHeader, Input } from "@/components/profile";
import { FaUserCircle, FaPenFancy } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidLogOut } from "react-icons/bi";
import { FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector(state => state.user.user)
    return (
        <div>
            <FormHeader />
            <div className="flex gap-3 md:gap-6">
                <div className="flex-[0.2] md:flex-[0.3] h-[600px] flex flex-col gap-3 pt-4 pb-10 pr-2 md:pr-6 border-solid border-r border-gray-200">
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
                <div className="flex-1 shadow-lg rounded-md px-6 py-8 h-fit">
                    <div className="flex items-center gap-2 pb-3 mb-3 border-solid border-b border-gray-300 text-lg">
                        <FaPenFancy />
                        <h1 className="font-bold">Edit Profile</h1>
                    </div>
                    <FormProvider
                        {...{ register: false, formState: { errors: {} } }}
                    >
                        <form>
                            <div className="flex flex-col gap-3 mb-6">
                                <Input label="Nama" value={user.name} />
                                <Input label="No Handphone" value={user.phone} />
                                <Input label="Old Password" type="password" value={user.password} />
                                <Input label="New Password" type="password" />
                            </div>
                        </form>
                        <Button
                            text="Edit Profile"
                            className="profile-edit-btn px-6 py-2 text-sm"
                            rightIcon={FiArrowRight}
                        />
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default Profile;
