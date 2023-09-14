import Image from "next/image";

export default function Small_Yellow_Card(props) {
    return (
        <div
            className="flex flex-row justify-evenly px-6  py-7  rounded-xl shadow-home lg:gap-x-5 relative"
            style={{
                background: "var(--yellow)",
                color: "var(--green)",
            }}
        >
            <Image
                src={props.src}
                width={43}
                height={43}
                className="object-contain justify-self-center"
            />
            <div className=" ">
                <h4 className="text-4xl mb-2">{props.number}</h4>
                <span>{props.detail}</span>
            </div>
        </div>
    );
}
