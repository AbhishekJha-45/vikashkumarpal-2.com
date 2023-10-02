import Button from "@components/Button";
import SocialMedia from "@components/SocialMedia";
import styles from "@styles/style.module.css";
import Image from "next/image";
import {Suspense} from "react";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_13 from "@components/Home_Section_13";
import Collaborate from "@components/Collaborate";

import {getCaseStudyBySlug} from "@utils/graphQlquery";
import Loading from "@pages/loading";
import Accordion from "@components/accordion";
import dynamic from "next/dynamic";
import CustomHead from "@pages/blog/[slug]/customHead";

const SetInnerHtml = dynamic(() => import("@components/SetInnerHtml"), {ssr: false});

export async function getServerSideProps(context) {
    const {slug} = context.query;
    const res = await getCaseStudyBySlug(slug);
    return {
        props: {
            post: res,
        }

    }
}

export default function index({post}) {
    if (!post) {
        return window.location.href = '/404';
    }
    const {
        title,
        singleCaseStudy,
        featuredImage,
        seo,
        date
    } = post;

    const {csParaHero, csHeroCta, csHeroHighlights} = singleCaseStudy;
    return (<Suspense fallback={<p>Something went wrong</p>}>
        <main
            className="lg:pt-14 pt-16  relative "
            style={{background: "var(--background)"}}
        >
            <CustomHead title={title} description={seo.description}
                        ogTitle={seo.openGraph.title} ogDescription={seo.description}
                        ogImage={seo.openGraph.image.url} seo={seo}
                        date={date} author={featuredImage.node.author.node.name}
            />
            <section
                style={{background: "var(--yellow)", width: '100%'}}
                className={`lg:grid grid-cols-2  px-3 lg:px-0 py-10 lg:py-16 ${styles.cardGapX}`}>
                {/*left side*/}
                <div className={"col-span-1 relative"}>
                    <h2 className={"text-start "}>
                        {title}
                    </h2>
                    <p>{csParaHero}</p>
                    <div className={"py-5"}><Button btnTxt={csHeroCta} path={"/"}/></div>
                </div>
                {/*right side*/}
                <div className={"col-span-1 lg:w-1/2 justify-self-center flex flex-col gap-y-5"}>
                    <div className=" px-10 flex justify-center items-center  bg-white z-10 rounded-lg">
                        <div className='w-1/4 flex justify-center items-center'>
                            <Image src={singleCaseStudy.csHeroHighlights.csHighlightIcon1.mediaItemUrl}
                                   alt={singleCaseStudy.csImage1.altText} width={55} height={55} priority={true}/>
                        </div>
                        <div className={`w-full flex  flex-col justify-start py-5 `}>
                            <h3 style={{
                                margin: '0',
                                paddingLeft: '1rem'
                            }}>{singleCaseStudy.csHeroHighlights.csHighlightNumber1}</h3>
                            <p style={{
                                margin: '0',
                                paddingLeft: '1rem'
                            }}>{singleCaseStudy.csHeroHighlights.csHighlightText1}</p>
                        </div>
                    </div>
                    <div className=" px-10 flex justify-center items-center  bg-white z-10 rounded-lg">
                        <div className='w-1/4 flex justify-center items-center'>
                            <Image src={singleCaseStudy.csHeroHighlights.csHighlightIcon2.mediaItemUrl}
                                   alt={singleCaseStudy.csImage2.altText} width={55} height={55} priority={true}/>
                        </div>
                        <div className={`w-full flex  flex-col justify-start py-5 `}>
                            <h3 style={{
                                margin: '0',
                                paddingLeft: '1rem'
                            }}>{singleCaseStudy.csHeroHighlights.csHighlightNumber2}</h3>
                            <p style={{
                                margin: '0',
                                paddingLeft: '1rem'
                            }}>{singleCaseStudy.csHeroHighlights.csHighlightText2}</p>
                        </div>
                    </div>
                    <div className=" px-10 flex justify-center items-center  bg-white z-10 rounded-lg">
                        <div className='w-1/4 flex justify-center items-center'>
                            <Image src={singleCaseStudy.csHeroHighlights.csHighlightIcon3.mediaItemUrl}
                                   alt={singleCaseStudy.csImage3.altText} width={55} height={55} priority={true}/>
                        </div>
                        <div className={`w-full flex  flex-col justify-start py-5 `}>
                            <h3 style={{
                                margin: '0',
                                paddingLeft: '1rem'
                            }}>{singleCaseStudy.csHeroHighlights.csHighlightNumber3}</h3>
                            <p style={{
                                margin: '0',
                                paddingLeft: '1rem'
                            }}>{singleCaseStudy.csHeroHighlights.csHighlightText3}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*px-3 lg:px-0*/}
            <section className={'px-3 lg:px-0 py-10'}>
                <div className="container-services">
                    <section
                        className={"lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5  lg:py-10"}>
                        {/*left side*/}
                        <div className={"col-span-1 relative"}>

                            <h2 className={"text-start"}>
                                {singleCaseStudy.csInnerHeading1}
                            </h2>
                            <p>{singleCaseStudy.csInnerContent1}</p>
                            <div className={"py-5"}><Button btnTxt={csHeroCta} path={"/"}/></div>
                        </div>
                        {/*right side*/}
                        <div className={"col-span-1 lg:flex justify-center items-center"}>
                            <Image src={singleCaseStudy.csImage1.mediaItemUrl} alt={singleCaseStudy.csImage1.altText}
                                   width={500} height={300} className={"lg:w-4/5"}></Image>
                        </div>
                    </section>

                    <section
                        className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5  lg:py-10"}>
                        {/*left side*/}
                        <div className={"col-span-1 relative lg:order-2"}>

                            <h2 className={"text-start"}>
                                {singleCaseStudy.csInnerHeading2}
                            </h2>
                            <div>
                                <SetInnerHtml postData={singleCaseStudy.csInnerContent2}/>
                            </div>
                            <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
                        </div>
                        {/*right side*/}
                        <div className={"col-span-1 lg:flex justify-center items-center"}>
                            <Image src={singleCaseStudy.csImage2.mediaItemUrl} alt={'dfdf'} width={500} height={300}
                                   className={"lg:w-4/5"}></Image>
                        </div>
                    </section>
                    <section
                        className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5  lg:py-10"}>
                        {/*left side*/}
                        <div className={"col-span-1 relative"}>
                            <h2 className={"text-start"}>
                                {singleCaseStudy.csInnerHeading3}
                            </h2>
                            <div>
                                <SetInnerHtml postData={singleCaseStudy.csInnerContent3}/>
                            </div>

                            <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
                        </div>
                        {/*right side*/}
                        <div className={"col-span-1 lg:flex justify-center items-center"}>
                            <Image src={singleCaseStudy.csImage3.mediaItemUrl} alt={singleCaseStudy.csImage3.altText}
                                   width={500} height={300} className={"lg:w-4/5"}></Image>
                        </div>
                    </section>
                    <section
                        className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5  lg:py-10 "}>
                        {/*left side*/}
                        <div className={"col-span-1 relative lg:order-2"}>

                            <h2 className={"text-start"}>
                                {singleCaseStudy.csInnerHeading4}
                            </h2>
                            <div>
                                <SetInnerHtml postData={singleCaseStudy.csInnerContent4}/>
                            </div>
                            <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
                        </div>
                        {/*right side*/}
                        <div className={"col-span-1 lg:flex justify-center items-center"}>
                            <Image src={singleCaseStudy.csImage4.mediaItemUrl} alt={singleCaseStudy.csImage4.altText}
                                   width={500} height={300} className={"lg:w-4/5"}></Image>
                        </div>
                    </section>
                    <section
                        className={"  lg:grid grid-cols-2 flex flex-col lg:gap-0 gap-5  lg:py-10"}>
                        {/*left side*/}
                        <div className={"col-span-1 relative"}>

                            <h2 className={"text-start"}>
                                {singleCaseStudy.csInnerHeading5}
                            </h2>
                            <div>
                                <SetInnerHtml postData={singleCaseStudy.csInnerContent5}/>
                            </div>
                            <div className={"py-5"}><Button btnTxt={"Start Your Seo Journey Today"} path={"/"}/></div>
                        </div>
                        {/*right side*/}
                        <div className={"col-span-1 lg:flex justify-center items-center"}>
                            <Image src={singleCaseStudy.csImage5.mediaItemUrl} alt={singleCaseStudy.csImage5.altText}
                                   width={500} height={300} className={"lg:w-4/5"}></Image>
                        </div>
                    </section>
                </div>
                <Collaborate/>

                <section className="py-10">
                    {/*<h2>Related Posts</h2>*/}
                    {/*<LatestPosts category={category}/>*/}
                </section>
            </section>
            <Home_Section_12/>
            <Home_Section_13/>
        </main>
    </Suspense>);
}


