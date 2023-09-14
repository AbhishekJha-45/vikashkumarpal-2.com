import Section_7_Card from "./Section_7_Card";

import img_1 from "../Images/Card-1-Section-7.png";
import img_2 from "../Images/Card-2-Section-7.png";
import img_3 from "../Images/Card-3-Section-7.png";

const Data = [
    {
        heading: "PPC, Sales",
        title: "Driving Cutting-Edge PPC Results With Improve Digitally",
        src: img_1,
    },
    {
        heading: "PPC, Sales",
        title: "Driving Cutting-Edge PPC Results With Improve Digitally",
        src: img_2,
    },
    {
        heading: "PPC, Sales",
        title: "Driving Cutting-Edge PPC Results With Improve Digitally",
        src: img_3,
    },
];
export default function Home_Section_7() {
    return (
        <main className="container-home py-14 px-3 overflow-hidden">
            <span className="flex justify-center">KNOW MORE ABOUT OUR</span>
            <h2 className="text-center">Latest Case Studies </h2>
            <div
                className="lg:grid grid-cols-3 flex flex-col justify-center items-center lg:justify-evenly lg:gap-5 gap-x-0 gap-y-5 mt-16">
                {Data.map((card, i) => {
                    return (
                        <Section_7_Card
                            key={i}
                            heading={card.heading}
                            title={card.title}
                            src={card.src}
                        />
                    );
                })}
            </div>
        </main>
    );
}
