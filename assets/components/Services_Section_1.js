import Image from "next/image";
import Button from "./Button";
import "../app/services/services.css";

export default function Services_Section_1(props) {
    return (
        <main
            className="py-14 lg:px-16 grid lg:grid-cols-2 grid-cols-1 w-full overflow-hidden box-border lg:gap-x-5 gap-y-10 lg:gap-y-0 ">
            <section className="col-span-1">
                <span>{props.spanTxt}</span>
                <h2 className="text-start">{props.heading}</h2>
                <p>{props.para}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
                <Button btnTxt={props.btnTxt} path={props.path}/>
            </section>
            <section className="col-span-1 flex justify-center relative mt-10 lg:mt-0">
                <div
                    className="small-card-image-sidebar absolute shadow-home p-2 pb-3 flex flex-col text-center lg:left-10 lg:top-10 -top-5  left-0  h-fit"
                    style={{
                        background: "var(--background)",
                    }}
                >
                    <h4 className="text-md">Industry Experience</h4>
                    <span
                        className="text-3xl"
                        style={{fontFamily: "Gabriela", color: "var(--green)"}}
                    >
            4+Yrs
          </span>
                    <div className="flex justify-center gap-2 mt-3 mx-3 ">
                        <div
                            className="text-center text-xl rounded-xl p-2  shadow-home"
                            style={{
                                fontFamily: "Gabriela",
                                background: "var(--background)",
                                color: "var(--green)",
                            }}
                        >
                            100%
                            <span className="flex justify-center text-sm">Work Done</span>
                        </div>
                        <div
                            className="text-center text-xl rounded-xl px-4 py-2 shadow-home"
                            style={{
                                fontFamily: "Gabriela",
                                background: "var(--background)",
                                color: "var(--green)",
                            }}
                        >
                            173%
                            <span className="flex justify-center text-sm">Growth</span>
                        </div>
                    </div>
                </div>
                <Image
                    src={props.src}
                    width={500}
                    height={500}
                    alt={props.heading}
                    className="object-contain"
                    draggable={false}
                    priority={true}
                />
                <div
                    className="small-div-sec-1 text-center text-2xl rounded-xl p-2  shadow-home absolute lg:bottom-5 bottom-0 lg:right-24 right-3"
                    style={{
                        fontFamily: "Gabriela",
                        background: "var(--background)",
                        color: "var(--green)",
                    }}
                >
                    100+
                    <span className="flex justify-center text-sm">
            Successful Projects
          </span>
                </div>
            </section>
        </main>
    );
}
