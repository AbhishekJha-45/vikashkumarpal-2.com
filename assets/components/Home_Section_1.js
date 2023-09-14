import Image from "next/image";
import Button from "@components/Button.js";

import authorImage from "../Images/poster.png";

export default function Home_Section_1() {
    return (
        <section className=" lg:py-14 py-20 px-3 container-home">
            <div className="container-homepage-top-component lg:grid grid-cols-4  lg:gap-x-10 lg:justify-between">
                <div className="col-span-2 lg:px-4 lg:pt-20 ">
                    <h1 className="font-semibold lg:mt-10">A Strategic SEO Consultant</h1>
                    <p className="my-8">
                        I'm Vikash Kumar Pal. A freelance SEO expert based in India with
                        more than 4-years of experience delivering results for National and
                        International businesses. I help level up your business with intent
                        SEO who turns rankings into revenue.
                    </p>
                    <Button btnTxt="Get in Touch" path="/contact"/>
                </div>
                <div className="sidebar-right-homepage-top-comp col-span-2 flex justify-center lg:mt-0 mt-10">
                    <Image
                        src={authorImage}
                        priority={true}
                        width={444}
                        height={521}
                        draggable="false"
                        className="rounded-full lg:w-auto lg:scale-75"
                        alt="author's image"
                    />
                </div>
            </div>
        </section>
    );
}