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
                <p>Vikash's SEO consulting process involves offering advice, analysis, and services to improve a
                    website's visibility in organic search results. He provides comprehensive SEO strategies that cover
                    both on-page and off-page factors. Furthermore, he assists with specific issues such as building
                    backlinks, conducting keyword research, creating an SEO content strategy, auditing websites for
                    technical errors or penalties, and measuring SEO performance and ROI.
                </p>
                <div className='pt-5'><Button btnTxt="Learn More" path="/services"/></div>
            </section>
        </main>
    );
}
