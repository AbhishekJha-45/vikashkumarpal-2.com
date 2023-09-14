import Image from "next/image";
import sidebarImg from "../Images/8.png";
import Button from "./Button";

export default function Home_Section_2() {
    return (
        <main
            className="py-14 px-3 lg:px-0"
            style={{background: "var(--yellow)"}}
        >
            <span className="flex justify-center"> ABOUT ME</span>
            <h2 className="text-center">Professional Seo Consultant</h2>
            <div className="container-home lg:flex lg:gap-x-10">
                <section className="lg:w-1/2 flex">
                    <Image src={sidebarImg} width={650} height={600} draggable="false" className="object-contain"
                           alt="Professional Seo Consultant"/>
                </section>
                <section className="lg:w-1/2  lg:pt-10 lg:pr-16">
                    <p>
                        Vikash is a well-known and highly experienced organic SEO consultant
                        providing strategic and consistent profitable organic search growth.
                        Work with all sizes of businesses to help them increase their
                        organic ranking and traffic through tried and tested SEO strategies.
                    </p>
                    <p>
                        As the best professional SEO consultant, Vikash helps clients that
                        range from local or mid-level businesses to enterprise organizations
                        meet their SEO challenges. Whether you're struggling with a drop in
                        search traffic, planning SEO, technical audit, or need more website
                        traffic and revenue, get in touch with Vikash for SEO consulting
                        services.
                    </p>
                    <Button btnTxt="Get In Touch" path="/contact"/>
                </section>
            </div>
        </main>
    );
}
