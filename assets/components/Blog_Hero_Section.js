import Image from "next/image";

import Link from "next/link";
import {months} from "@utils/date";
import Card_Section_10 from "@components/Card_Section_10";

export default function Blog_Hero_Section({posts, localseo}) {
    return (
        <section className="container-services lg:py-14 pt-10 px-3">
            <div className="lg:grid grid-cols-7 container-services">
                <div className="col-span-5 flex flex-col gap-y-3">
                    <h2 className="py-5">On-Page Seo</h2>
                    {posts.map((post, index) => {
                        const {title, excerpt, slug, featuredImage, author, date} = post.node;
                        // console.log(index)
                        const createdDate = new Date(date);
                        const month = months[createdDate.getMonth()];
                        const day = createdDate.getDate();
                        const localizedDate = `${month} ${day}`;
                        const url = `/blog/${slug}`;
                        return (
                            <div className="flex justify-center" key={index}>
                                <div className="flex justify-center">
                                    <div
                                        className="max-w-2xl bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                                        <div className="flex lg:flex-row flex-col">
                                            <Image
                                                className="h-full lg:w-1/3 object-cover p-2"
                                                src={featuredImage?.node?.mediaItemUrl}
                                                alt="Article Image"
                                                width={500}
                                                height={309}
                                            />
                                            <div
                                                className="lg:py-5 w-full lg:px-5 px-5 flex flex-col  justify-between ">
                                                <Link href={`blog/${slug}`}>
                                                    <p className="text-xl cursor-pointer"
                                                       style={{margin: '0', fontFamily: 'Gabriela'}}>{title}</p>
                                                </Link>
                                                <div className='flex justify-between'>
                                                    <p className="text-sm flex">
                                                        <Image src={author.node.avatar.url} alt={author.node.name}
                                                               width={24}
                                                               height={24}
                                                               className='rounded-full mr-2'
                                                        />
                                                        {author.node.name}</p>
                                                    <p className="text-sm flex">{localizedDate} <span
                                                        className='hidden lg:flex lg:pl-1'>|  8 min read</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                    })}
                </div>
                <div className="col-span-2 container-services pt-5">
                    <h2>Local Seo</h2>
                    <div
                        className="flex flex-col gap-y-3 mt-10">
                        {localseo.map((post, index) => {
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
                                // para={title}
                                readTime="8 Min Read "
                                date={localizedDate}
                                authorName={author.node.name}
                                authorImage={author.node.avatar.url}
                            />
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
