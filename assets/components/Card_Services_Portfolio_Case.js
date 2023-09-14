import Image from "next/image";
import Link from "next/link";

export default function Card_Services_Portfolio_Case(props) {
    return (
        <section
            className="flex flex-col  items-center shadow-home p-3 pb-5"
            style={{maxWidth: "380px"}}
        >
            <Image
                src={props.src}
                width={331}
                height={203}
                className="aspect-video object-cover py-2"
            />
            <span className="self-start pl-3">{props.spanTxt}</span>
            <h4 className="pl-3 pb-2">{props.heading}</h4>
            <div className="flex justify-between items-center w-full px-3 py-2">
                <p style={{margin: "0", color: '#00D015'}} className="flex flex-col w-1/2 text-center ">

                    {props.percentage}
                    <span className="text-xs px-2 text-black">{props.percentTxt}</span>
                </p>

                <p style={{margin: "0", color: 'var(--yellow)'}} className="flex flex-col w-1/2 text-center">
                    {props.percentage}
                    <span className="text-xs px-2 text-black">{props.percentTxt}</span>
                </p>
            </div>
            <p className="para-2 pl-3">{props.para}</p>
            <Link href={props.path} className="rounded-full text-white p-2 text-sm"
                  style={{background: 'var(--green)', outline: '2px double #ffce4f'}}>
                <button>{props.btnTxt}</button>
            </Link>
        </section>
    );
}
