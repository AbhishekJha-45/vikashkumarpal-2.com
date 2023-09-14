import Image from "next/image";
import Link from "next/link";

export default function Card_Section_10(props) {
    var type = props.type;
    if (!type) {
        type = '[blog].js';
    }

    function createMarkup(content) {
        return {__html: content};
    }

    return (
        <div
            className="card-sec-10  rounded-md mx-3 flex flex-grow flex-col justify-between"
            style={{maxWidth: "385px"}}
        >
            <div className="image-div">
                <Image
                    src={props.src}
                    width={500}
                    height={304}
                    alt={props.title}
                    className="object-cover w-full rounded-md"
                    style={{aspectRatio: "16/9"}}
                />
            </div>
            <Link href={props.post_url}>

                <h4 className="ellipsis-2l mt-3 cursor-pointer">{props.title}</h4>
            </Link>

            <p
                className="para-ellipsis "
                style={{margin: "0", padding: "0"}}
                dangerouslySetInnerHTML={createMarkup(props.para)}
            >

            </p>
            <div className="text-sm flex justify-between items-center mt-3">
        <span className="flex justify-start items-center gap-x-2">
          <Image
              src={props.authorImage}
              width={28}
              height={28}
              className="rounded-full h-7 w-7"
          />
          <span>{props.authorName}</span>
        </span>
                <span className="">
          {props.date} | {props.readTime}
        </span>
            </div>
        </div>
    );
}
