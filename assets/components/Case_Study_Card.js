import Link from "next/link";
import Image from "next/image";

export default async function Case_Study_Card(props) {
    return (
        <div className="data-sec-7 shadow-home rounded-md px-5 py-5 h-full"> {/* Added h-full class */}
            <div className="image-div  w-full h-1/1"> {/* Added width and height classes */}
                <Image
                    src={props.src}
                    width={331}
                    height={304}
                    alt={props.title}
                    className="object-cover w-full h-full" // Added h-full class
                    style={{aspectRatio: "16/9"}}
                />
            </div>
            <Link href={`case-study/${props.post_url}`}>
                <h4 className="my-3 ellipsis-2l">{props.title}</h4>
            </Link>
            <Link
                href={"/"}
                className="rounded-full text-white p-2 text-sm my-7"
                style={{
                    background: "var(--green)",
                    outline: "2px double #ffce4f",
                }}
            >
                <button>Learn More</button>
            </Link>
        </div>
    );
}
