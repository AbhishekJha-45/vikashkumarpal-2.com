import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 7,
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

export default function Home_Section_3({images}) {
    return (
        <main className="lg:py-14 pt-14 pb-10 flex flex-col">
            <span className="flex justify-center items-center">EXPERTS GROWTH</span>
            <h2 className="text-center mb-14">Our Satisfied Clients</h2>
            <Carousel
                arrows={false}
                renderButtonGroupOutside={true}
                responsive={responsive}
                className="overflow-hidden box-border carousel-logo"
                sliderClass="lg:gap-x-10"
                containerClass=" lg:px-16 px-3"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlay={true}
                itemClass="flex justify-center"
                autoPlaySpeed={2000}
                infinite={true}
                ssr={true}
                partialVisible={false}
            >
                {images && images.map((image, index) => {
                    return (
                        <div className="flex justify-center items-center logo-carousel-div" key={index}>
                            <Image
                                src={image}
                                width={200}
                                height={150}
                                className="object-center"
                                alt="Client's Logo"
                            />
                        </div>

                    )
                })}

            </Carousel>
        </main>
    );
}
