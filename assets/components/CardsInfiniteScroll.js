import {getAllCaseStudy, getLatestPostsLimited} from "@/app/[blog].js/fetchPosts";
import Card_Section_10 from "./Card_Section_10";
import {months} from "@/utils/date";

export default async function CardsInfiniteScroll(props) {
    const type = props.type;
    var isFetched = false;
    var limit = 15;
    var data;
    if (isFetched === false) {
        if (type === 'case-study') {
            data = await getAllCaseStudy(limit);
        } else if (type === '[blog].js') {
            data = await getLatestPostsLimited(limit);
        }
        isFetched = true;
    }
    return (
        <section className="container-services">
            <h1 className=" lg:text-4xl py-5 px-3 latestpost-h1">Latest Posts</h1>
            <div
                className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:py-14 pt-5 lg:pt-3 gap-5 pb-5 place-items-center relative">
                {data?.map((post, index) => {
                    const createdDate = new Date(post.created_at);

                    const month = months[createdDate.getMonth()];
                    const day = createdDate.getDate();
                    const localizedDate = `${month} ${day}`;
                    return (
                        <Card_Section_10
                            key={index}
                            type={type}
                            src={post.image}
                            post_url={post.post_url}
                            title={post.title}
                            para={post.description}
                            readTime="8 Min Read "
                            date={localizedDate}
                            authorName={post.author_name}
                            authorImage={post.image}
                        />
                    );
                })}
            </div>
        </section>
    );
}
