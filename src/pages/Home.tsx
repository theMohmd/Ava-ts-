const Home = () => {
    return (
        <div
            dir="rtl"
            className="[&_p]:mt-4 [&_p]:dark:text-neutral-300 [&_p]:text-neutral-400 [&_h3]:text-2xl dark:text-white text-center pt-20 px-10 "
        >
            <h1 className="text-4xl font-bold text-cgreen">آوا</h1>
            <h1 className="mt-8 text-3xl">سرویس تبدیل صوت به متن</h1>
            <p className="">
                با استفاده از سرویس ما به راحتی فایل‌های صوتی خود را به متن در
                زبان‌های انگلیسی و فارسی تبدیل کنید!
            </p>
            <div className="flex flex-col gap-4 mt-8 md:flex-row">
                <div className="mode">
                    <h3 className="">ضبط زنده</h3>
                    <p className="">
                        با استفاده از این حالت می‌توانید صدا را در حالت زنده ضبط
                        کنید و به متن تبدیل کنید.
                    </p>
                </div>
                <div className="mode">
                    <h3 className="">آپلود</h3>
                    <p className="">
                        فایل‌های صوتی پیش‌تر ضبط شده خود را بارگذاری کنید و ما
                        آنها را به متن تبدیل خواهیم کرد.
                    </p>
                </div>
                <div className="mode">
                    <h3 className="">لینک</h3>
                    <p className="">
                        ارائه پیوند URL مربوط به محتوای آنلاین صوتی خود و ما آن
                        را به متن تبدیل می‌کنیم.
                    </p>
                </div>
            </div>
            <p className="!mt-8">
                همچنین امکان تبدیل به متن در دو زبان انگلیسی و فارسی برای شما
                فراهم شده است.
            </p>
            <p className="">
                به راحتی و بدون نیاز به نصب نرم‌افزار، به تبدیل صوت به متن
                بپردازید!
            </p>
        </div>
    );
};

export default Home;
