import React, {useEffect, useState} from "react";
import Loading from "@pages/loading";
import Card_Section_10 from "@components/Card_Section_10";
import {months} from "@utils/date";
import Skeleton from "@components/Skeleton";
import Head from "next/head";

const Index = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nextCursor, setNextCursor] = useState(null);
    const [hasNextPage, setHasNextPage] = useState(true);

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
           query GetPosts($first: Int, $nextCursor: String) {
  posts(first: $first, after: $nextCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      title
      content
      date
      modified
      slug
      excerpt
      seo{
        canonicalUrl
        description
robots
        jsonLd{
          raw
        }
      openGraph {
                title
        description
       locale
                updatedTime
                image{
                  url
                }
              }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      table_of_contents{
        tableOfContents
      excerptCustom
      buttonHref
      }
      categories{
        nodes {
        name
      }
      }
      featuredImage {
        node {
          altText
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

    return (
        <section className="container-services">
            <h1 className='container-services lg:py-14' style={{color: 'var(--green)', fontFamily: 'gabriela'}}>Latest
                Posts</h1>
            <main
                className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:py-14 pt-5 lg:pt-3 gap-5 pb-5 place-items-center relative'>
                <Head>
                    <link rel="canonical" href='https://vikashkumarpal.com/blog/'/>
                    <title>Blog | LatestPosts</title>
                    <meta name="description" content="This is blog page "/>
                    <meta name='robots' content='follow,index'/>
                    <meta property="og:title" content='Blog | Home'/>
                    <meta property="og:type" content="Page"/>
                    <meta property="og:description" content='This is blog page '/>
                    {/*<meta property="og:image" content={seo.openGraph.image.url}/>*/}
                    {/*<meta property="og:url" content={canonicalUrl}/>*/}
                    <meta name='locale' content="en_US"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@vikashkumarpal"/>
                    <meta name="twitter:url" content="https://vikashkumarpal.com/blog/"/>
                    <meta name="twitter:title" content="Blog | Home"/>
                    <meta name="twitter:description" content="This is blog page "/>
                    {/*<meta name="twitter:image" content={seo.openGraph.image.url}/>*/}
                    <meta name="twitter:label1" content="Written by"/>
                    <meta name="twitter:data1" content="Vikash Kumar Pal"/>
                    <meta name="twitter:site" content="@vikashkumarpal"/>
                    <meta name="twitter:creator" content="@vikashkumarpal"/>
                    {/*<meta name="date" content={date}/>*/}
                    {/*<meta name="last-modified" content={seo.openGraph.updatedTime}/>*/}
                </Head>

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
    );
};

export default Index;
