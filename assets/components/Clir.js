import Image from "next/image";
import Button from "./Button";

export default function Clir(props) {
    return (
        <main
            className="container-services pt-14 lg:pb-14 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-y-10 lg:gap-y-0">
            <section>
                <span>{props.spanTxt}</span>
                <h2 className="text-start">{props.heading}</h2>
                <p>{props.para}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
                <Button btnTxt={props.btnTxt} path={props.path}/>
            </section>
            <section className="flex justify-center">
                <Image src={props.src} width={500} height={500} alt={props.heading}/>
            </section>
        </main>
    );
}
