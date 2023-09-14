import Button from "@components/Button";
import SocialMedia from "@components/SocialMedia";
import styles from "@styles/style.module.css";
import Image from "next/image";
import {Suspense} from "react";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_13 from "@components/Home_Section_13";
import Collaborate from "@components/Collaborate";
import {months} from "@utils/date";
import {getPostBySlug} from "@utils/graphQlquery";
import Loading from "@pages/loading";
import blog from "@styles/blogpost.module.css"
import Accordion from "@components/accordion";
import CustomHead from "./customHead"

export async function getServerSideProps(context) {
    const {slug} = context.query;
    const res = await getPostBySlug(slug);
    return {
        props: {
            post: res.post,
        }
    }
}


function createMarkup(content) {
    return {__html: content};
}

export default function index({post}) {
    const {
        title,
        slug,
        excerpt,
        author,
        featuredImage,
        content,
        date,
        modified,
        table_of_contents,
        categories,
        seo
    } = post;


    const createdDate = new Date(date);
    const month = months[createdDate.getMonth()];
    const day = createdDate.getDate();
    const year = createdDate.getFullYear();
    const localizedDate = `${month} ${day}, ${year}`;
    // console.log(seo)
    return (
        <Suspense fallback={<Loading/>}>
            {/*head component goes here */}
            {/*<Head>*/}
            {/*    <title>{title}</title>*/}
            {/*    <meta name="description" content={seo.description}/>*/}
            {/*    <meta name="keywords" content={seo.focusKeywords}/>*/}
            {/*    <meta property="og:title" content={seo.openGraph.title}/>*/}
            {/*    <meta property="og:description" content={seo.description}/>*/}
            {/*    <meta property="og:image" content={seo.openGraph.image.url}/>*/}
            {/*</Head>*/}
            <section
                className="lg:pt-28 pt-14 px-3 lg:px-0 relative"
                style={{background: "var(--background)"}}
            >
                <CustomHead title={title} description={seo.description} keywords={seo.focusKeywords}
                            ogTitle={seo.openGraph.title} ogDescription={seo.description}
                            ogImage={seo.openGraph.image.url} seo={seo}
                            date={date} author={author.node.name}
                />


                <section className="container-services lg:pt-14 pt-10">
                    <div
                        className="container-services  lg:pb-14 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-y-10 lg:gap-y-0"
                    >
                        <section className="flex justify-center order-2 lg:order-1">
                            <Image
                                src={featuredImage.node.mediaItemUrl}
                                width={500}
                                height={309}
                                alt={title}
                                className="blog-hero-section-top-image"
                                // style={{maxWidth:'80%',maxHeight:'80%'}}
                            />
                        </section>
                        <section className="order-1 lg:order-2">
                            <span>{categories.nodes.filter((category) => category.name !== 'Latest')[0].name}</span>
                            <h1 className={blog.heading}>{title}</h1>
                            <h4 className="pt-3 font-semibold">
                                By {author.node.name} | {localizedDate} | 8 min read
                            </h4>
                            <p className="text-start pb-5">{table_of_contents.excerptCustom}</p>
                            <Button btnTxt="Start Your SEO Journey Today" path="/"/>
                        </section>
                    </div>
                </section>
                <section className="lg:flex lg:px-5 lg:py-14 pt-10 relative">
                    {/* table of contents */}
                    <aside className={styles.table_of_contents}>
                        {/* className="col-span-3 " */}
                        <div className="sticky  top-24 box-border">
                            <h3 className="hidden lg:inline-block">Table of Contents</h3>
                            {/* dynamically rendering table of contents */}

                            <div
                                className='lg:pr-5 hidden lg:block'
                                dangerouslySetInnerHTML={createMarkup(table_of_contents.tableOfContents)}
                            ></div>

                            {/*accordion goees here*/}
                            <Accordion post={table_of_contents.tableOfContents}/>

                        </div>
                    </aside>
                    {/* main content */}
                    <main className={styles.content}>
                        {/* dynamic content data goes in here  */}
                        <article
                            className={blog.content}
                            dangerouslySetInnerHTML={createMarkup(content)}
                        ></article>
                    </main>
                    {/* social media section */}
                    <aside className={styles.social_icons}>
                        <SocialMedia url={seo.canonicalUrl}/>
                    </aside>
                </section>
                <Collaborate/>
                {/* rating component */
                }
                <section className="flex justify-center items-center pt-10 flex-col">
                    <h3 className="text-semibold text-center">
                        Did You Find this Article Helpful?
                    </h3>
                    {/*{data.map((post, index) => {*/}
                    {/*    const rating = post.rating / post.totalRatings;*/}
                    {/*    var displayRating = Math.round(rating * 100) / 100;*/}
                    {/*    var totalRatings = post.totalRatings;*/}
                    {/*    if (!displayRating) {*/}
                    {/*        displayRating = 0;*/}
                    {/*        totalRatings = 0;*/}
                    {/*    }*/}
                    {/*    return (*/}
                    {/*        <>*/}
                    {/*            <div*/}
                    {/*                key={index}*/}
                    {/*                className="flex flex-col juustify-center items-center gap-y-5"*/}
                    {/*            >*/}
                    {/*                <Rating*/}
                    {/*                    rating={post.rating}*/}
                    {/*                    post_url={post.post_url}*/}
                    {/*                    prevTotalRatings={post.totalRatings}*/}
                    {/*                    displayRating={displayRating}*/}
                    {/*                    totalRatings={totalRatings}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </>*/}
                    {/*    );*/}
                    {/*})}*/}
                </section>
                <section className="py-10">
                    <h2>Related Posts</h2>
                    {/*<LatestPosts category={category}/>*/}
                </section>
                <Home_Section_12/>
                <Home_Section_13/>
            </section>
        </Suspense>
    )
        ;
}


