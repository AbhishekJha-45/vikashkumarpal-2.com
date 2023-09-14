import Image from "next/image";
import Button from "./Button";

export default function Clirbr(props) {
    return (
        <section className="container-services lg:py-14 pt-10 grid lg:grid-cols-2 grid-cols-1 justify-center">
            <div
                className={`flex flex-col  justify-center items-center lg:pr-8 lg:order-1 ${props.leftOrder}`}
            >
                <Image src={props.src} width={540} height={550} alt={props.heading}/>
                <Button
                    btnTxt={props.btnTxt}
                    path={props.path}
                    className="self-center  mt-12 text-white"
                />
            </div>

            <div className={`${props.rightOrder} lg:order-2`}>
                <span>{props.spanTxt}</span>
                <h2 className="text-start">{props.heading}</h2>
                <p>{props.para}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
            </div>
        </section>
    );
}
