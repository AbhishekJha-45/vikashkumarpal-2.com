import About_Section_1 from "@components/About_Section_1";
import section_1_image from "@Images/21.png";
import About_Section_2 from "@components/About_Section_2";
import Home_Section_6 from "@components/Home_Section_6";
import Home_Section_9 from "@components/Home_section_9";
import Home_Section_7 from "@components/Home_Section_7";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_13 from "@components/Home_Section_13";
import Home_Section_8 from "@components/Home_Section_8";

export default function page() {
    return (
        <main className="lg:pt-14" style={{background: "var(--background)"}}>
            <div className="container-home lg:pt-10 px-3">
                <h1 className="text-center lg:pt-14 pt-20">About Me</h1>
                <p className="lg:text-center">
                    A top SEO consultant offers flexible and affordable SEO services to
                    improve search engine rankings, or maximize your online potential and
                    deliver the results you're looking for.
                </p>
            </div>
            <section>
                <div className="lg:px-24">
                    <About_Section_1 imgSrc={section_1_image}/>
                </div>
                <About_Section_2/>
                <Home_Section_6/>
                <div className="py-14">
                    <Home_Section_9/>
                </div>
                <Home_Section_7/>
                <div className="lg:pb-14">
                    <Home_Section_8/>
                </div>
                <Home_Section_12/>
                <Home_Section_13/>
            </section>
        </main>
    );
}