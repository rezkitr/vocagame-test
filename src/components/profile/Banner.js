const Banner = () => {
    return (
        <div className="profile-banner text-white flex flex-col items-center justify-center gap-2 py-6 rounded-md">
            <h1 className="font-bold text-3xl">LOREM</h1>
            <div className="w-[440px] ">
                <p className="text-sm text-center">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor
                    <br />
                    sit amet, consectetur, adipisci velit..."
                    <br />
                    "There is no one who loves pain itself, who seeks after it
                    <br />
                    and wants to have it, simply because it is pain..."
                </p>
            </div>
        </div>
    );
};

export default Banner;
