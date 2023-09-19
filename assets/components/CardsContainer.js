import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonGreen from "@components/ButtonGreen";

export default function CardsContainer(props) {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=6"
        );
        const json = await res.json();
        setData(json);
        return json;
    };
    fetchData();


    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 container-services lg:pb-14 lg:pxp-0 px-3">
            {data &&
                data.map((post, index) => {
                    const {title, body} = post;
                    return (
                        <div className="col-span-1" key={index}>
                            <div className="data-sec-7 shadow-home rounded-md px-5 py-5 h-full">
                                <div className="image-div  w-full h-1/1">
                                    <Image
                                        src={'https://admin.vikashkumarpal.com/wp-content/uploads/2023/09/what-are-keywords-the-role-of-keywords-in-on-page-seo.png'}
                                        width={531}
                                        height={304}
                                        alt={title}
                                        className="object-cover w-full h-full" // Added h-full class
                                        style={{aspectRatio: "16/9"}}
                                    />
                                </div>

                                <Link href={`case-study/123`}>
                                    <h4 className="my-3 ellipsis-2l">{title}</h4>
                                </Link>
                                <ButtonGreen path={`case-study/123`} btnTxt={'Learn More'}/>

                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
