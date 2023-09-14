import Card_Services_Portfolio_Case from "./Card_Services_Portfolio_Case";
import cardImg1 from "../Images/Card-3-Section-7.png";

export default function Services_Portfolio_Case() {
    return (
        <main className="container-services py-14 px-3 flex justify-center items-center flex-col">
            <span>SERVICES</span>
            <h2>What We Offer</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
                <Card_Services_Portfolio_Case
                    src={cardImg1}
                    spanTxt="PPC, Sales"
                    heading="Driving Cutting-Edge PPC Results With Improve Digitally"
                    percentage="2185%"
                    percentTxt="Increase in Website Traffic"
                    percentage2="669%"
                    percentTxt2="Growth in page views"
                    para="We helped with SEO service efforts to boost the client’s digital presence and positioned its website in front of high-converting audience segments."
                    btnTxt="Get free Consultancy"
                    path="/portfolio"
                />
                <Card_Services_Portfolio_Case
                    src={cardImg1}
                    spanTxt="PPC, Sales"
                    heading="Driving Cutting-Edge PPC Results With Improve Digitally"
                    percentage="2185%"
                    percentTxt="Increase in Website Traffic"
                    percentage2="669%"
                    percentTxt2="Growth in page views"
                    para="We helped with SEO service efforts to boost the client’s digital presence and positioned its website in front of high-converting audience segments."
                    btnTxt="Get free Consultancy"
                    path="/portfolio"
                />
                <Card_Services_Portfolio_Case
                    src={cardImg1}
                    spanTxt="PPC, Sales"
                    heading="Driving Cutting-Edge PPC Results With Improve Digitally"
                    percentage="2185%"
                    percentTxt="Increase in Website Traffic"
                    percentage2="669%"
                    percentTxt2="Growth in page views"
                    para="We helped with SEO service efforts to boost the client’s digital presence and positioned its website in front of high-converting audience segments."
                    btnTxt="Get free Consultancy"
                    path="/portfolio"
                />
                <Card_Services_Portfolio_Case
                    src={cardImg1}
                    spanTxt="PPC, Sales"
                    heading="Driving Cutting-Edge PPC Results With Improve Digitally"
                    percentage="2185%"
                    percentTxt="Increase in Website Traffic"
                    percentage2="669%"
                    percentTxt2="Growth in page views"
                    para="We helped with SEO service efforts to boost the client’s digital presence and positioned its website in front of high-converting audience segments."
                    btnTxt="Get free Consultancy"
                    path="/portfolio"
                />
                <Card_Services_Portfolio_Case
                    src={cardImg1}
                    spanTxt="PPC, Sales"
                    heading="Driving Cutting-Edge PPC Results With Improve Digitally"
                    percentage="2185%"
                    percentTxt="Increase in Website Traffic"
                    percentage2="669%"
                    percentTxt2="Growth in page views"
                    para="We helped with SEO service efforts to boost the client’s digital presence and positioned its website in front of high-converting audience segments."
                    btnTxt="Get free Consultancy"
                    path="/portfolio"
                />
                <Card_Services_Portfolio_Case
                    src={cardImg1}
                    spanTxt="PPC, Sales"
                    heading="Driving Cutting-Edge PPC Results With Improve Digitally"
                    percentage="2185%"
                    percentTxt="Increase in Website Traffic"
                    percentage2="669%"
                    percentTxt2="Growth in page views"
                    para="We helped with SEO service efforts to boost the client’s digital presence and positioned its website in front of high-converting audience segments."
                    btnTxt="Get free Consultancy"
                    path="/portfolio"
                />
            </div>
        </main>
    );
}
