import { Banner, Footer, Header } from "@/components/profile";

const ProfileLayout = ({ children }) => {
    return (
        <div className="min-h-full flex flex-col">
            <Header />
            <div className="flex-1 px-24 py-6">
                <Banner />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default ProfileLayout;
