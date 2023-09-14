import Clir from "@components/Clir";
import sidebarImageClir from "@Images/portfolio-sec-1.svg";
import IntroComponentPage from "@components/IntroComponentPage";
import Home_Section_3 from "@components/Home_Section_3";
import Services_Portfolio_Case from "@components/Services_Portfolio_Case";
import Home_Section_11 from "@components/Home_Section_11";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_13 from "@components/Home_Section_13";
import Home_Section_8 from "@components/Home_Section_8";

export default function page() {
    return (
        <main style={{background: "var(--background)"}} className="pt-14">
            <div className=" container-services px-3">
                <IntroComponentPage
                    heading="Portfolio"
                    para="I have helped businesses increase website rankings, amplified traffic, and maximized ROI for a diverse range of clients."
                />
                <Clir
                    spanTxt="Info"
                    heading="Driving SEO Success Across Diverse Industries"
                    para="With over 5 years of professional experience in the ever-evolving field of SEO, I have helped businesses both locally and globally improve their online visibility and achieve meaningful results. Utilizing a strategic and data-driven approach, I turn rankings into revenue and ideas into successful SEO strategies."
                    btnTxt="Start Your SEO Journey Today"
                    path="/contact"
                    src={sidebarImageClir}
                />
            </div>
            <Home_Section_3/>
            <Services_Portfolio_Case/>
            <Home_Section_8/>
            <Home_Section_11/>
            <Home_Section_12/>
            <Home_Section_13/>
        </main>
    );
}