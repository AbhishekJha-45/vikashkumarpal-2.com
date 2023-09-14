"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Section_3_card from "./Section_9_card";
import Client_1 from "../Images/client-avatar-women-3.png";
import Client_2 from "../Images/client-avatar-man-6.png";
import Client_3 from "../Images/client-avatar-man-3.png";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    },
};

export default function Home_Section_9() {
    return (
        <main className="py-14" style={{background: "var(--yellow)"}}>
            <span className="flex justify-center">Testimonial</span>
            <h2 className="text-center">What our Clients Says</h2>

            <Carousel
                arrows={false}
                renderButtonGroupOutside={true}
                responsive={responsive}
                className="py-14"
                sliderClass="lg:gap-x-5 gap-x-3"
                containerClass=" lg:px-16 px-3"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={true}
                partialVisible={false}
                autoPlay={true}
                infinite={true}
                itemClass="flex justify-center"
                autoPlaySpeed={4000}
            >
                <Section_3_card
                    src={Client_1}
                    name="Marian Chris"
                    designation="CEO Founder"
                    details="Vikash has worked closely with me for the last year on building my Shopify store and executing a high-performing SEO strategy and results for generating sales and increasing organic visibility"
                />
                <Section_3_card
                    src={Client_2}
                    name="Jack Mudson"
                    designation="Marketing Manager"
                    details="Vikash has been an integral part of my agency and has been helping my clients in Interim's journey so far and we look forward to working with him long term."
                />
                <Section_3_card
                    src={Client_3}
                    name="Michael Brian"
                    designation="Vice President "
                    details="Vikash is a top-notch professional in SEO field. His reports are one of the best I have seen, and his understanding of the industry is amazing. I'm very honored and thankful to have a chance to work with such an expert. I look forward to working with him on future projects."
                />
            </Carousel>
        </main>
    );
}
