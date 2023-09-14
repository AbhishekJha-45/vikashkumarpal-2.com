import Image from "next/image";
import Button from "./Button";

export default function About_Section_1(props) {
    return (
        <main className="container-services px-3 lg:grid grid-cols-2  lg:gap-x-3 py-14">
            <section className="col-span-1 lg:pr-7 lg:py-12">
                <span>About</span>
                <h2 className="text-start">Empowring You With Intent Seo</h2>
                <p className="">
                    Vikash Kumar Pal is an award winning professional SEO consultant who
                    empowers founders to grow their businesses with intent SEO that turns
                    rankings into revenue. As the best SEO consultant, Vikash has worked
                    with some great founders and helped many small and local businesses
                    improve their online presence, rank higher in search engines, and
                    drive more traffic to their websites.
                </p>
                <p>
                    As a freelance SEO consultant, Vikash offers a wide range of SEO
                    consulting services to help businesses of all sizes and industries
                    achieve their online marketing goals. From website structure, to
                    keyword research, on page optimization, technical SEO, and link
                    building, Vikash has the skills and experience to help your business
                    succeed online. As a professional SEO consultant, Vikash works closely
                    with clients to develop customized SEO strategies that are unique to
                    their specific needs and goals.
                </p>
                <p>
                    SEO is not just about building search engine-friendly websites. It's
                    about making your website better for users is the goal
                </p>
            </section>
            <section className="col-span-1 object-contain w-fit flex justify-center items-center flex-col">
                <Image
                    src={props.imgSrc}
                    width={735}
                    height={600}
                    className="object-contain"
                    alt="Empowring You With Intent Seo"
                />
                <Button btnTxt="Get In Touch" path="/contact"/>
            </section>
        </main>
    );
}