"use client";
import Input from "../Input";

const ProfileInput = (props) => {
    return (
        <Input wrapperClassName="!border-gray-300 !mt-1 !h-10" readonly {...props}  />
    );
};

export default ProfileInput;
