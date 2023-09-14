import Image from "next/image";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function Section_7_Card(props) {
    return (
        <div
            className="card-sec-7 shadow-home rounded-md px-5 py-5"
            //   style={{ maxWidth: "379px", maxHeight: "559px" }}
        >
            <div className="image-div pb-5">
                <Image
                    src={props.src}
                    width={500}
                    height={304}
                    alt={props.title}
                    className="object-cover w-full"
                    style={{aspectRatio: "16/9"}}
                />
            </div>
            <span>{props.heading}</span>
            <h4 className="my-3">{props.title}</h4>
            <ControlPointIcon fontSize="large" color="success"/>
        </div>
    );
}
