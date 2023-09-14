import Image from "next/image";
import cardImage from "../Images/contact-man.png";

export default function Small_Card_About_Sec_2(props) {
    return (
        <div className="grid grid-cols-3 py-2 shadow-home hover-yellow" style={{minHeight: '204px'}}>
            <div className="col-span-1 flex justify-center items-center pl-4">
                <Image
                    src={cardImage}
                    width={100}
                    height={100}
                    className="object-cover"
                    alt="card iamge section 3 about page"
                />
            </div>
            <div className="col-span-2 pr-1 flex flex-col justify-center items-start">
                <h3>{props.title}</h3>
                <p className="para-2">
                    Strong analytical & technical skills helped deliver proven results to
                    a wide range of businesses to improve their online presence and drive
                    more traffic to their websites.
                </p>
            </div>
        </div>
    );
}
