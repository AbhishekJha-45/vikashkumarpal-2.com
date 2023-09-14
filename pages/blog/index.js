import {getPostsByCategory} from "@utils/graphQlquery";
import Blog_Section_1 from "@assets/components/Blog_Section_1";
import IntroComponentPage from "@assets/components/IntroComponentPage";
import Home_Section_8 from "@assets/components/Home_Section_8";
import Card_Section_10 from "@assets/components/Card_Section_10";
import {Suspense} from "react";
import Blog_Hero_Section from "@assets/components/Blog_Hero_Section";
import {months} from "@utils/date";
import Home_Section_13 from "@components/Home_Section_13";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_11 from "@components/Home_Section_11";
import Head from "next/head";


export async function getServerSideProps() {
    const generalseo = await getPostsByCategory('General Seo', 1)
    const keywordresearch = await getPostsByCategory('Keyword Research', 3)
    const onpageseo = await getPostsByCategory('On-Page Seo', 3)
    const latestposts = await getPostsByCategory('latest', 5)
    const localseo = await getPostsByCategory('Local Seo', 3)
    return {
        props: {
            generalseo: generalseo.posts.edges[0],
            keywordresearch: keywordresearch.posts.edges,
            onpageseo: onpageseo.posts.edges,
            localseo: localseo.posts.edges,
            latestposts: latestposts.posts.edges
        }
    }
}

export default function blog({latestposts, generalseo, keywordresearch, onpageseo, localseo}) {
    const createdDate = new Date(generalseo.node.date);
    const month = months[createdDate.getMonth()];
    const day = createdDate.getDate();
    const localizedDate = `${month} ${day}`;
    const url = `/blog/${generalseo.node.slug}`;
    // console.log(url)
    return (<Suspense fallback={<>Locading...</>}>


        <Head>
            <title>thisi is index</title>
        </Head>
        <section style={{background: "var(--background)"}}>
            <section className="container-services px-3">
                <IntroComponentPage
                    heading="Blog"
                    para="Custom SEO strategies designed to increase visibility, drive traffic, and boost conversions."
                />

                <Blog_Section_1
                    spanTxt="General Seo"
                    heading={generalseo.node.title}
                    para={generalseo.node.title}
                    src={generalseo.node.featuredImage?.node?.mediaItemUrl}
                    btnTxt="Read More"
                    authorName={generalseo.node.author.node.name}
                    avatar={generalseo.node.author.node.avatar.url}
                    date={localizedDate}
                    path={url}
                />
            </section>
            <Home_Section_8/>
            <div
                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center sec-10-card-container container-home gap-y-10 lg:gap-y-0 pt-10 lg:py-14">
                {keywordresearch.map((post, index) => {
                    // console.log(post.node.title)
                    const {title, excerpt, slug, featuredImage, author, date} = post.node;
                    const createdDate = new Date(date);
                    const month = months[createdDate.getMonth()];
                    const day = createdDate.getDate();
                    const localizedDate = `${month} ${day}`;
                    const url = `/blog/${slug}`;
                    // console.log(index)
                    return <Card_Section_10
                        key={index}
                        src={featuredImage?.node?.mediaItemUrl}
                        post_url={`/blog/${slug}`}
                        title={title}
                        para={title}
                        readTime="8 Min Read "
                        date={localizedDate}
                        authorName={author.node.name}
                        authorImage={author.node.avatar.url}
                    />
                })}
            </div>
            <div className="container-services">
                <Blog_Hero_Section posts={onpageseo} localseo={localseo}/>
            </div>
            <Home_Section_11/>
            <Home_Section_12/>
            <Home_Section_13/>
        </section>
    </Suspense>)
}
