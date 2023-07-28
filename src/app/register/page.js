"use client";
import { AuthPageTitle, Input, SubmitButton } from "@/components/auth";
import { onRegister } from "@/redux/slices/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

const Register = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const form = useForm();

    const onSubmit = (data) => {
        const { password, passwordConfirm } = data;
        if (password !== passwordConfirm) {
            form.setError("passwordConfirm", {
                message: "Password tidak sesuai",
            });
            return;
        }
        dispatch(onRegister({ ...data }));
        form.reset();
        router.push("/login");
    };

    return (
        <div className="min-h-full flex justify-center items-center text-gray-50 relative">
            <div className="absolute top-0 xl:left-6 w-full h-[160px] xl:w-[380px] xl:h-[200px] bg-gray-300">
                <Image
                    src="/register-image.jpg"
                    fill
                    alt="registerImg"
                    className="object-cover"
                />
            </div>
            <div className="w-[480px] min-h-fit mt-[200px] xl:mt-20 mb-20 px-4 lg:px-0">
                <AuthPageTitle
                    title="Daftarkan Akun"
                    caption="Daftar akun anda  dengan mengisi form dibawah"
                />
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-3 mb-8 ">
                            <Input
                                name="name"
                                label="Nama Anda"
                                placeholder="Ketik nama anda di sini"
                                style="alt"
                            />
                            <Input
                                name="phone"
                                label="Nomor Handphone"
                                placeholder="Nomor handphone anda"
                                style="alt"
                                validation={{ minLength: 11, maxLength: 13 }}
                            />
                            <Input
                                name="password"
                                label="Password"
                                placeholder="Masukkan password anda"
                                type="password"
                                style="alt"
                            />
                            <Input
                                name="passwordConfirm"
                                label="Konfirmasi Password"
                                placeholder="Masukkan kembali password anda"
                                type="password"
                                style="alt"
                            />
                        </div>
                        <SubmitButton text="Daftar Sekarang" />
                    </form>
                </FormProvider>
                <p className="text-center mt-10 text-sm font-semibold">
                    Sudah punya akun? <Link href="/login">Login Sekarang</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
