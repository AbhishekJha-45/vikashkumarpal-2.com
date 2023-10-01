import IntroComponentPage from "@components/IntroComponentPage";
import Services_Section_1 from "@components/Services_Section_1";
import comp_1_Image from "@Images/services-sec-1-img.svg";
import Home_Section_3 from "@components/Home_Section_3";
import Home_section_4 from "@components/Home_section_4";
import Home_Section_13 from "@components/Home_Section_13";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_11 from "@components/Home_Section_11";
import Home_Section_9 from "@components/Home_section_9";
import Home_Section_8 from "@components/Home_Section_8";
import Services_section_5 from "@components/Services_section_5";
import getHeader, {getClientLogos} from "@utils/graphQlquery";
import Header from "@utils/Header";

export async function getStaticProps() {
    const images=await getClientLogos();
    const headerData=await getHeader('service');
    return {props:{images:images,headerData:headerData}};
}

export default function page({images,headerData}) {
    // console.log(headerData);
    return (
        <main className="" style={{ background: "var(--background)" }}>
            <Header headerData={headerData}/>
            <div className="container-new">
                <IntroComponentPage
                    heading="Services"
                    para="A top SEO consultant offers flexible and affordable SEO services to
          improve search engine rankings, or maximize your online potential and
          deliver the results you're looking for."
                />
            </div>
            <div className="container-services">
                <Services_Section_1
                    spanTxt="Services"
                    heading="Achieve Top Rankings with Our SEO Services"
                    para="An award-winning professional SEO consultant with more than five
        years of expertise in boosting online visibility for businesses, both
        national and international. Vikash's unique approach to SEO turns
        rankings into revenue, creating a tangible impact on the success of
        your business. Vikash provides a broad spectrum of SEO services,
        tailored to the unique needs of each client."
                    btnTxt="Learn More"
                    path="/services"
                    src={comp_1_Image}
                />
            </div>
            <Home_Section_3 images={images}/>
            <Home_section_4 />
            <Services_section_5 />
            <Home_Section_8 />
            <Home_Section_9 />
            <Home_Section_11 />
            <Home_Section_12 />
            <Home_Section_13 />
        </main>
    );
}