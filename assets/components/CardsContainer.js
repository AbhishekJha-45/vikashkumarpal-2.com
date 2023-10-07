import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonGreen from "@components/ButtonGreen";
import { getCaseStudiesCards } from "@utils/graphQlquery";

export default function CardsContainer(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCaseStudiesCards();
                setData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts.

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 container-services lg:pb-14 lg:pxp-0 px-3">
            {data &&
                data.slice(0, 6).map((post, index) => {
                    const { title, slug, featuredImage, seo } = post;
                    return (
                        <div className="col-span-1" key={index}>
                            <div className="data-sec-7 shadow-home rounded-md px-5 py-5 h-full">
                                <div className="image-div w-full h-1/1">
                                    <Image
                                        src={
                                            "https://admin.vikashkumarpal.com/wp-content/uploads/2023/09/what-are-keywords-the-role-of-keywords-in-on-page-seo.png"
                                        }
                                        width={531}
                                        height={304}
                                        alt={title}
                                        className="object-cover w-full h-full" // Added h-full class
                                        style={{ aspectRatio: "16/9" }}
                                    />
                                </div>
                                <h4 className="my-3 ellipsis-2l">{title}</h4>

                                <ButtonGreen path={`case-study/${slug}`} btnTxt={"Learn More"} />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
