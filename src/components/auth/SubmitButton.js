"use client";

const SubmitButton = ({ text, className = "" }) => {
    return (
        <button
            className={`submit-btn h-12 w-full rounded-3xl bg-[#E5EAFD] flex items-center justify-center cursor-pointer text-black font-semibold ${className}`}
        >
            {text}
        </button>
    );
};

export default SubmitButton;
