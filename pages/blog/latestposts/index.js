import React, {useEffect, useState} from "react";
import Loading from "@pages/loading";

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
                  excerpt
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
        <>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                </div>
            ))}
            {loading && <Loading/>}
        </>
    );
};

export default Index;
