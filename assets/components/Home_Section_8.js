import Button from "./Button";
import Image from "next/image";
import authorImage from "@Images/poster.png";

export default function Home_Section_8() {
    return (
        <main className="container-home py-14 px-3 ">
            <div
                className="lg:grid lg:grid-cols-5 px-5 items-center shadow-home lg:px-32 place-items-center py-14 rounded-xl gap-x-5">
                <section className="col-span-3 ">
                    <span className="lg:ml-20">Start Your SEO Project</span>
                    <h2 className="text-start">Want to Work with me?</h2>
                    <p className={"lg:pb-6"}>
                        Ready to optimize your website increase ranking and boost your
                        online visibility? Let's start your SEO journey together. Request a
                        quote today!
                    </p>
                    <Button
                        btnTxt="Start Your seo Journey Today"
                        className="  mt-5 text-sm"
                        path="/about"
                    />
                </section>
                <section className="col-span-2 lg:mt-0 mt-10">
                    <Image src={authorImage} width={400} height={500} alt="author"/>
                </section>
            </div>
        </main>
    );
}
