import BlurText from "./Animations/BlurText";

export default function Footer() {

    return(

        <section id="footer"
        className="lg:scroll-mt-32 md:scroll-mt-32 mt-20 flex flex-col justify-center items-center min-h-fit mb-10">
            <div className="BlurText">
                <BlurText
                text="This Portofolio Website Is Made Using ReactJS, Vite, TailwindCSS"
                delay={300}
                animateBy="words"
                direction="top"
                className="lg:text-lg sm:text-xs justify-center mt-6 opacity-50 font-roboto"
                />
            </div>
            <div className="copyright">
                <span className="lg:text-lg text-xs opacity-50 font-roboto">
                &copy; Muhammad Reyhan Zanzabili
                </span>
            </div>
        </section>
    );

}