import Image from "next/image";
// import "../styles/homepage.module.css";

export default function Section_9_Card(props) {
    return (
        <div
            // index="services-cards"
            className="shadow-home py-14 flex justify-center flex-col items-center"
            style={{
                maxWidth: "500px",
                background: 'var(--background)'
            }}
        >
            <Image
                src={props.src}
                width={110}
                height={110}
                draggable="false"
                alt={props.title}
                className="rounded-full"
            />
            <h3 className="pt-3">{props.name}</h3>
            <h4>( {props.designation} )</h4>
            <p className="text-center px-10 pt-3" style={{margin: "0"}}>
                {props.details}
            </p>
        </div>
    );
}
