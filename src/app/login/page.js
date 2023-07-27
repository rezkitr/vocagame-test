import { AuthPageTitle, Input, SubmitButton } from "@/components/auth";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return (
        <div className="h-full flex overflow-auto">
            <div className="login-bg flex-1 bg-cover flex flex-col items-center justify-center gap-10">
                <div className="w-[300px] min-h-[400px] bg-gray-300 relative">
                    <Image src="/login-image.jpg" fill alt="image" />
                </div>
                <div className="text-white w-[440px] text-center">
                    <h1 className="font-bold text-3xl">LOREM</h1>
                    <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor
                        <br />
                        sit amet, consectetur, adipisci velit..."
                        <br />
                        "There is no one who loves pain itself, who seeks after
                        it"
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className="w-[480px]">
                    <AuthPageTitle
                        title="Silakan Login"
                        caption="Masukkan username dan password anda untuk masuk"
                        titleClassName="login-title"
                    />
                    <form>
                        <div className="flex flex-col gap-3 mb-8">
                            <Input label="Username" />
                            <Input label="Password" type="password" />
                        </div>
                        <SubmitButton text="Masuk Sekarang" />
                    </form>
                    <p className="text-center mt-10 text-sm font-semibold">
                        Belum punya akun?{" "}
                        <Link href="/register" className="login-link">
                            Register Sekarang
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
