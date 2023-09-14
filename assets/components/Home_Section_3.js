"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo_1 from "../Images/akosmd.png";
import logo_2 from "../Images/beetronics.svg";
import logo_3 from "../Images/soprime.svg";
import logo_4 from "../Images/doctify-india.png";
// import logo_5 from "../Images/RMC Aviation Logo.png";
import logo_7 from "../Images/client_7.png";
import logo_8 from "../Images/client_8.png";
import logo_9 from "../Images/client_9.png";
import logo_10 from "../Images/client_10.png";
import logo_11 from "../Images/client_11.png";
import logo_12 from "../Images/rmc.webp";
import logo_13 from "../Images/client_13.png";
import logo_14 from "../Images/rmcelite.webp";
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

export default function Home_Section_3() {
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
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_1}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_2}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_3}
                        width={200}
                        height={100}
                        objectFit="contain"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_4}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_12}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                {/* <div className="flex justify-center items-center logo-carousel-div">
          <Image
            src={logo_6}
            width={200}
            height={100}
            objectFit="cover"
            alt="logo client"
          />
        </div> */}
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_7}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_8}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_9}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_10}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>

                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_11}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                {/* <div className="flex justify-center items-center logo-carousel-div">
          <Image
            src={logo_12}
            width={200}
            height={100}
            objectFit="cover"
            alt="logo client"
          />
        </div> */}
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_13}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
                <div className="flex justify-center items-center logo-carousel-div">
                    <Image
                        src={logo_14}
                        width={200}
                        height={100}
                        objectFit="cover"
                        alt="logo client"
                    />
                </div>
            </Carousel>
        </main>
    );
}
