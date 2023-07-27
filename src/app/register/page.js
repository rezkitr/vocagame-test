"use client";
import { AuthPageTitle, Input, SubmitButton } from "@/components/auth";
import Link from "next/link";

const Register = () => {
    return (
        <div className="register h-full overflow-auto flex justify-center bg-cover text-gray-50 relative">
            <div className="absolute top-0 left-6 w-[380px] h-[200px] bg-gray-300">
                Image
            </div>
            <div className="w-[480px] h-fit mt-20 mb-24">
                <AuthPageTitle
                    title="Daftarkan Akun"
                    caption="Daftar akun anda  dengan mengisi form dibawah"
                />
                <form>
                    <div className="flex flex-col gap-3 mb-8">
                        <Input label="Nama Anda" style="alt" />
                        <Input label="Nomor Handphone" style="alt" />
                        <Input label="Password" type="password" style="alt" />
                        <Input
                            label="Konfirmasi Password"
                            type="password"
                            style="alt"
                        />
                    </div>
                    <SubmitButton text="Daftar Sekarang" />
                </form>
                <p className="text-center mt-10 text-sm font-semibold">
                    Sudah punya akun? <Link href="/login">Login Sekarang</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
