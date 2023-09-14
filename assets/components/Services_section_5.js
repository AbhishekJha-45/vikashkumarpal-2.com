import Image from "next/image";
import sidebarImg from "../Images/seo-consulting.svg";
import Button from "./Button";

export default function Services_section_5() {
    return (
        <main className="lg:px-32 px-3 pt-10 lg:py-14 grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-7 xl:">
            <section className="col-span-1 flex justify-center">
                <Image
                    src={sidebarImg}
                    width={550}
                    height={500}
                    alt="Sidebar image"
                    className="object-contain"
                    draggable={false}
                />
            </section>
            <section className="col-span-1 flex flex-col justify-top items-baseline">
                <h2 className="lg:text-start md:text-start text-center">
                    Seo Consulting Services
                </h2>
                <p className="lg:pr-7">
                    Vikash Kumar Pal is a freelance SEO consultant with over 5 years of
                    experience, who is dedicated to helping businesses level up their
                    online presence through strategic SEO practices. The SEO consulting
                    services by Vikash aim to turn rankings into revenue by improving
                    clients' online visibility and driving more traffic to their websites.
                </p>
                <Button btnTxt="Learn More" path="/services"/>
            </section>
        </main>
    );
}
