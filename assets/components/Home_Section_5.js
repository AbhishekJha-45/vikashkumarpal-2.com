import Image from "next/image";
import sidebarImage from "../Images/girl-with-coffee.png";
import Home_Card_Big from "./Home_Card_Big";
import Button from "./Button";
import styles from "@styles/homepage.module.css"

export default function Home_Section_5() {
    return (
        <main
            className={`container-home py-14 px-3 grid lg:grid-cols-2 grid-cols-1  justify-between lg:gap-x-16 ${styles.section_5_container}`}>
            <section
                className="lg:order-1 order-2 relative mt-10 lg:grid || grid-cols-5 grid-rows-1  my-0 mx-auto flex justify-center "
                // style={{ maxHeight: "630px" }}
            >
                {/* <div className="lg:mt-16"> */}
                <Image
                    src={sidebarImage}
                    width={600}
                    height={630}
                    alt="sidebar"
                    className=" col-span-5 row-span-1"
                />
                {/* </div> */}

                <div
                    className={`rounded-lg flex flex-col justify-center items-center px-8 py-10 mt-5  absolute z-50 || self-end justify-self-end lg:-right-11 ${styles.small_card_image_sidebar}`}
                    // lg:bottom-16 lg:-right-10
                    style={{
                        boxShadow: "0 0 15px grey",
                        background: "var(--background)",
                    }}
                >
                    <h3 className="">Industry Experience</h3>
                    <span
                        className="text-6xl"
                        style={{fontFamily: "Gabriela", color: "var(--green)"}}
                    >
            4+Years
          </span>
                    <div className="flex justify-center gap-4 mt-3 ">
                        <div
                            className={`text-center text-2xl rounded-xl px-5 py-2 ${styles.shadow_home}`}
                            style={{
                                fontFamily: "Gabriela",
                                background: "var(--background)",
                                color: "var(--green)",
                            }}
                        >
                            100%
                            <span className="flex justify-center text-sm">Work Done</span>
                        </div>
                        <div
                            className={`text-center text-2xl rounded-xl px-5 py-2 ${styles.shadow_home}`}
                            style={{
                                fontFamily: "Gabriela",
                                background: "var(--background)",
                                color: "var(--green)",
                            }}
                        >
                            173%
                            <span className="flex justify-center text-sm">Growth</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:order-2 order-1">
                <span>WHY CHOOSE ME?</span>
                <h2 className="text-start">
                    Why Vikash Is the Right SEO Consultant for You?
                </h2>
                <p>
                    As an expert SEO consultant, Vikash offers a range of services to suit
                    your needs and budget. Whether you need a full-service SEO package or
                    a specific service such as keyword research, technical SEO audit,
                    content optimization, link building, or local SEO, he can provide it
                    for you.
                </p>
                <div className="home-card-big flex flex-col gap-y-5 mt-10">
                    <Home_Card_Big
                        number="100+"
                        title="Successful Projects"
                        para="Vikash has over 4 years of experience in SEO strategy
            consulting, helping clients from various niches and industries
            rank higher on Google and other search engines. "
                    />
                    <Home_Card_Big
                        number="173%"
                        title="Organic Growth"
                        para="Vikash understands the challenges and opportunities that
            startups face and can help them create and implement
            effective SEO strategies that work."
                    />
                    <Button
                        btnTxt="Get In Touch"
                        path="/contact"
                        className="w-fit mt-5 text-white"
                    />
                </div>
            </section>
        </main>
    );
}
