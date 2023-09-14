import Card_Section_10 from "./Card_Section_10";
import poster from "../Images/blog2-570x420.jpg";
import authorImage from "../Images/client-avatar-man-1.png";
import authorImage2 from "../Images/client-avatar-man-6.png";
import poster2 from "../Images/blog01-1-570x420.jpg"
import RecentPosts from "./RecentPosts";

export default function Home_Section_10() {
    return (
        <main className="container-home py-14">
            <h2 className="text-center">Latest Blogs</h2>
            <div className="sec-10-card-container gap-y-10 lg:gap-y-0 pt-10">
                <Card_Section_10
                    src={poster}
                    title="How To Do Local SEO Research"
                    para="We are a boutique digital transformation
          consultancy and software development Fusce
          consectetur erat index enim element Fusce "
                    readTime="8 Min Read "
                    date="5 June"
                    authorName="Vikash Kr Pal"
                    authorImage={authorImage}
                />
                <Card_Section_10
                    src={poster2}
                    title="7 Top Mobile SEO Tips to Improve Your Rankings"
                    para="We are a boutique digital transformation
          consultancy and software development Fusce
          consectetur erat index enim element Fusce d dffdv  dfvfdv  dfvdfv dfvdfv dfvdvsd sddvcdc dfvdfvc"
                    readTime="8 Min Read "
                    date="July 28"
                    authorName="William Gomes"
                    authorImage={authorImage2}
                />
                <RecentPosts/>
            </div>
        </main>
    );
}
