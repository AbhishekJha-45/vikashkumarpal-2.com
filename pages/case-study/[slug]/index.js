import Button from "@components/Button";
import SocialMedia from "@components/SocialMedia";
import styles from "@styles/style.module.css";
import Image from "next/image";
import {Suspense} from "react";
import LatestPosts from "@components/LatestPosts";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_13 from "@components/Home_Section_13";
import Collaborate from "@components/Collaborate";
import dynamic from "next/dynamic";
import {months} from "@utils/date";


// dangerously setting html from db
function createMarkup(content) {
    return {__html: content};
}

// main page
export default async function page({params}) {
    const id = params.id;
    var isFetched = false;
    var category;
    var data;
    var content;
    if (isFetched === false) {
        // data = await getIndividualCaseStudy(id);
        data=await getAllBlogPosts();
        console.log(data)
        // content = await data.title;
        isFetched = true;
        // console.log(data);
    }

    // return (<Suspense fallback={<p>Something went wrong</p>}>
    //     <Head/>
    //     <main
    //         className="lg:pt-14 pt-16 px-3 lg:px-0 relative "
    //         style={{background: "var(--background)"}}
    //     >
    //         <section
    //             style={{background: "var(--yellow)"}}
    //             className={"lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5 container-service pb-10 px-3"}>
    //             {/*left side*/}
    //             <div className={"col-span-1 relative"}>
    //                 <h2 className={"text-start pt-10"}>
    //                     {data.title}
    //                 </h2>
    //                 <p>{data.top.para}</p>
    //                 <p>{data.top.para2}</p>
    //                 <p>{data.top.para3}</p>
    //                 <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
    //             </div>
    //             {/*right side*/}
    //             <div className={"col-span-1 lg:flex justify-center items-center"}>
    //                 <Image src={data.image} alt={data.title} width={500} height={300} className={"lg:w-4/5"}></Image>
    //             </div>
    //         </section>
    //         <section
    //             className={"lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5 container-service pt-10"}>
    //             {/*left side*/}
    //             <div className={"col-span-1 relative"}>
    //                 <span>
    //                     Services
    //                 </span>
    //                 <h2 className={"text-start"}>
    //                     {data.title}
    //                 </h2>
    //                 <p>{data.top.para}</p>
    //                 <p>{data.top.para2}</p>
    //                 <p>{data.top.para3}</p>
    //                 <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
    //             </div>
    //             {/*right side*/}
    //             <div className={"col-span-1 lg:flex justify-center items-center"}>
    //                 <Image src={data.image} alt={data.title} width={500} height={300} className={"lg:w-4/5"}></Image>
    //             </div>
    //         </section>
    //         <section
    //             className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5 container-service pt-10"}>
    //             {/*left side*/}
    //             <div className={"col-span-1 relative lg:order-2"}>
    //                 <span>
    //                     Services
    //                 </span>
    //                 <h2 className={"text-start"}>
    //                     {data.title}
    //                 </h2>
    //                 <p>{data.top2.para}</p>
    //                 <p>{data.top2.para2}</p>
    //                 <p>{data.top2.para3}</p>
    //                 <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
    //             </div>
    //             {/*right side*/}
    //             <div className={"col-span-1 lg:flex justify-center items-center"}>
    //                 <Image src={data.image} alt={data.title} width={500} height={300} className={"lg:w-4/5"}></Image>
    //             </div>
    //         </section>
    //         <section
    //             className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5 container-service pt-10"}>
    //             {/*left side*/}
    //             <div className={"col-span-1 relative"}>
    //                 <span>
    //                     Services
    //                 </span>
    //                 <h2 className={"text-start"}>
    //                     {data.title}
    //                 </h2>
    //                 <p>{data.top3.para}</p>
    //                 <p>{data.top3.para2}</p>
    //                 <p>{data.top3.para3}</p>
    //                 <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
    //             </div>
    //             {/*right side*/}
    //             <div className={"col-span-1 lg:flex justify-center items-center"}>
    //                 <Image src={data.image} alt={data.title} width={500} height={300} className={"lg:w-4/5"}></Image>
    //             </div>
    //         </section>
    //         <section
    //             className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5 container-service pt-10"}>
    //             {/*left side*/}
    //             <div className={"col-span-1 relative lg:order-2"}>
    //                 <span>
    //                     Services
    //                 </span>
    //                 <h2 className={"text-start"}>
    //                     {data.title}
    //                 </h2>
    //                 <p>{data.top4.para}</p>
    //                 <p>{data.top4.para2}</p>
    //                 <p>{data.top4.para3}</p>
    //                 <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
    //             </div>
    //             {/*right side*/}
    //             <div className={"col-span-1 lg:flex justify-center items-center"}>
    //                 <Image src={data.image} alt={data.title} width={500} height={300} className={"lg:w-4/5"}></Image>
    //             </div>
    //         </section>
    //         <section
    //             className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5 container-service pt-10"}>
    //             {/*left side*/}
    //             <div className={"col-span-1 relative"}>
    //                 <span>
    //                     Services
    //                 </span>
    //                 <h2 className={"text-start"}>
    //                     {data.title}
    //                 </h2>
    //                 <p>{data.bottom.para}</p>
    //                 <p>{data.bottom.para2}</p>
    //                 <p>{data.bottom.para3}</p>
    //                 <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
    //             </div>
    //             {/*right side*/}
    //             <div className={"col-span-1 lg:flex justify-center items-center"}>
    //                 <Image src={data.image} alt={data.title} width={500} height={300} className={"lg:w-4/5"}></Image>
    //             </div>
    //         </section>
    //         <Collaborate/>
    //
    //         <section className="py-10">
    //             <h2>Related Posts</h2>
    //             <LatestPosts category={category}/>
    //         </section>
    //         <Home_Section_12/>
    //         <Home_Section_13/>
    //     </main>
    // </Suspense>);
}