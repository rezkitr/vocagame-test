"use client";
import { AuthPageTitle, Input, SubmitButton } from "@/components/auth";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
    return (
        <div className="min-h-full flex justify-center items-center text-gray-50 relative">
            <div className="absolute top-0 xl:left-6 w-full h-[160px] xl:w-[380px] xl:h-[200px] bg-gray-300">
                <Image src="/register-image.jpg" fill alt="registerImg" className="object-cover" />
            </div>
            <div className="w-[480px] min-h-fit mt-[200px] xl:mt-20 mb-20 px-4 lg:px-0">
                <AuthPageTitle
                    title="Daftarkan Akun"
                    caption="Daftar akun anda  dengan mengisi form dibawah"
                />
                <form>
                    <div className="flex flex-col gap-3 mb-8 ">
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
