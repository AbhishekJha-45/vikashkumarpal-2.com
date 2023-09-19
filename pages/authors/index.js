import React, {useEffect, useState} from "react";
import Loading from "@pages/loading";
import Card_Section_10 from "@components/Card_Section_10";
import {months} from "@utils/date";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/general.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import dynamic from "next/dynamic";
import getHeader from "@utils/graphQlquery";
const Home_Section_13 = dynamic(() => import("@components/Home_Section_13"));
const Home_Section_12 = dynamic(() => import("@components/Home_Section_12"));

const Authors = () => {
    const [Header, setHeader] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nextCursor, setNextCursor] = useState(null);
    const [hasNextPage, setHasNextPage] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const headerData = await getHeader('authors-page');
                setHeader(headerData);
            } catch (error) {
                console.error('Error fetching header data:', error);
            }
        }

        fetchData();
    }, []);
// console.log(Header)
    const fetchPosts = async () => {
        try {
            setLoading(true);

            const response = await fetch('https://admin.vikashkumarpal.com/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
       query GetPostsByAuthor($first: Int, $nextCursor: String, $authorName: String) {
                posts(first: $first, after: $nextCursor, where: { authorName: $authorName }) {
            pageInfo {
              hasNextPage
                 endCursor
     }
            nodes {
            id
            title
            date
             slug

      author {
        node {
          name
          avatar {
            url
          }
        }
        cursor
      }
   
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}

          `,
                    variables: {
                        first: 9, // Adjust the number of posts per page as needed
                        nextCursor,
                        authorName: 'Vikash',
                    },
                }),
            });

            const result = await response.json();
            const {data} = result;

            if (!data || !data.posts.nodes.length) {
                setHasNextPage(false);
                setLoading(false);
                return;
            }

            // Append new posts to the existing posts
            setPosts([...posts, ...data.posts.nodes]);
            setNextCursor(data.posts.pageInfo.endCursor);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInfiniteScroll = () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight &&
                !loading
            ) {
                fetchPosts(nextCursor); // Use the nextCursor as the "after" cursor
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts(null); // Initial fetch without "after" cursor
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, [posts, nextCursor]);
    const canonicalUrl = Header?.seo.canonicalUrl;
    const robots = Header?.seo.robots;
    const title = Header?.title;
    const date = Header?.dateGmt;
    const jsonLd = Header?.seo.jsonLd.raw;
    const locale = Header?.seo.openGraph.locale;
    const ogtitle = Header?.seo.openGraph.title;
    const authorName = Header?.author.node.name;
    const ogdescription = Header?.seo.openGraph.description;
    const updatedAt = Header?.seo.openGraph.updatedTime;
    const mediaItemUrl = Header?.featuredImage?.node?.mediaItemUrl;
    const regexPattern = /<script type="application\/ld\+json" class="rank-math-schema">(.*?)<\/script>/s;
    const schemaJson = jsonLd ? jsonLd.match(regexPattern)[1] : null;
    return (
        <section>

            <Head>
                <title>{title}</title>
                <meta name="description" content={ogdescription}/>
                <meta name='robots' content={robots}/>
                <link rel="canonical" href={'https://vikashkumarpal.com/authors/'}/>
                <meta property="og:title" content={ogtitle}/>
                <meta property="og:type" content="article"/>
                <meta property="og:description" content={ogdescription}/>
                <meta property="og:image" content={mediaItemUrl}/>
                <meta property="og:url" content={'https://vikashkumarpal.com/authors/'}/>
                <meta name='locale' content={locale}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@vikashkumarpal"/>
                <meta name="twitter:url" content={'https://vikashkumarpal.com/authors/'}/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={ogdescription}/>
                <meta name="twitter:image" content={mediaItemUrl}/>
                <meta name="twitter:label1" content="Written by"/>
                <meta name="twitter:data1" content={authorName}/>
                <meta name="twitter:site" content="@vikashkumarpal"/>
                <meta name="twitter:creator" content="@vikashkumarpal"/>
                <meta name="date" content={date}/>
                <meta name="last-modified" content={updatedAt}/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: schemaJson}}/>
            </Head>
            <section className='py-14'>
                <div className='container-services lg:px-14 px-3 grid lg:grid-cols-2 grid-cols-1 place-items-center'>
                    <div className='col-span-1'>
                        <Image
                            src={'https://admin.vikashkumarpal.com/wp-content/uploads/2023/09/poster.png'}
                            width={500} height={530} alt={'something is here'} className={'rounded-full'}/>
                    </div>
                    <div className='col-span-1 p-10'>
                        <h1>Vikash Kumar pal</h1>
                        <h3>SEO CONSULTANT</h3>
                        <p className={styles.paraAuthors}>Vikash Kumar Pal is an award winning professional SEO
                            consultant
                            who empowers founders to grow
                            their
                            businesses with intent SEO that turns rankings into revenue. As the best SEO consultant,
                            Vikash
                            has
                            worked with some great founders and helped many small and local businesses improve their
                            online
                            presence, rank higher in search engines, and drive more traffic to their websites.</p>
                        <div className='text-3xl flex gap-x-3 py-3'>
                            <FacebookIcon color="inherit" fontSize="inherit"/>
                            <TwitterIcon color="inherit" fontSize="inherit"/>
                            <LinkedInIcon color="inherit" fontSize="inherit"/>
                            <InstagramIcon color="inherit" fontSize="inherit"/>
                        </div>
                    </div>

                </div>
            </section>
            <section className="container-services">
                <h2 className='container-services lg:py-14 text-center'
                    style={{color: 'var(--green)', fontFamily: 'gabriela'}}>Author’s Other Blogs</h2>
                <main
                    className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:py-14 pt-5 lg:pt-3 gap-5 pb-5 place-items-center relative'>


                    {posts.map((post, i) => {

                        const {title, excerpt, slug, featuredImage, author, date} = post;
                        const createdDate = new Date(date);
                        const month = months[createdDate.getMonth()];
                        const day = createdDate.getDate();
                        const localizedDate = `${month} ${day}`;
                        const url = `/blog/${slug}`;
                        // console.log(post)
                        return (
                            <Card_Section_10
                                key={i}
                                src={featuredImage?.node?.mediaItemUrl}
                                post_url={`/blog/${slug}`}
                                title={title}
                                // para={title}
                                readTime="8 Min Read "
                                date={localizedDate}
                                authorName={author.node.name}
                                authorImage={author.node.avatar.url}
                            />
                        )
                    })}

                    {loading && <Loading/>}

                </main>
            </section>
            <Home_Section_12/>
            <Home_Section_13/>
        </section>
    );
};


export default Authors;
