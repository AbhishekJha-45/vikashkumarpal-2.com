import Image from "next/image";
import Button from "./Button";

export default function Blog_Section_1(props) {
    // function createMarkup(content) {
    //   return { __html: content };
    // }

    return (
        <main
            className="container-services pt-14 lg:pb-14 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-y-10 lg:gap-y-0">
            <section>
                <span>{props.spanTxt}</span>
                <h2 className="text-start">{props.heading}</h2>
                <p className="ellipsis-2l pt-2" style={{margin: '0'}}>
                    {/*will change it later to the new excerpt field from acf*/}
                    {props.para}
                </p>
                <div className="text-sm flex justify-between items-center my-5  lg:pr-10">
          <span className="flex justify-start items-center gap-x-2">
            <Image
                src={props.avatar}
                width={28}
                height={28}
                priority={true}
                className="rounded-full"
            />
            <span>{props.authorName}</span>
          </span>
                    <span className="">
            {props.date} | 8 Min Read
          </span>
                </div>
                <Button btnTxt={props.btnTxt} path={props.path}/>
            </section>
            <section className="flex justify-center">
                <Image src={props.src} width={500} height={380} alt={props.heading}/>
            </section>
        </main>
    );
}
