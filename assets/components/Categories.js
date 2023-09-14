import Link from "next/link";

export default function Categories() {
    const categories = [
        {
            category: "General SEO",
            href: "/",
        },
        {
            category: "Keyword Research",
            href: "/",
        },
        {
            category: "On-Page SEO",
            href: "/",
        },
        {
            category: "Local SEO",
            href: "/",
        },
        {
            category: "Technical SEO",
            href: "/",
        },
        {
            category: "Mobile SEO",
            href: "/",
        },
        {
            category: "Link Building",
            href: "/",
        },
        {
            category: "Content Marketing",
            href: "/",
        },
    ];

    return (
        <section className="container-services flex  flex-col justify-center gap-y-5 items-center ">
            {categories.map((category) => {
                return (
                    <Link
                        href={category.href}
                        key={category.category}
                        className="flex flex-col lg:py-3 py-2 rounded-md px-3 category-button"
                        style={{width: "180px", boxShadow: "0 0 10px grey"}}
                    >
                        <button className="">{category.category}</button>
                    </Link>
                );
            })}
        </section>
    );
}
