import Link from "next/link";

export default function ButtonNormal(props) {
    return (
        <Link
            href={props.path}
            className={
                props.className == undefined ||
                props.className == null ||
                props.className == ""
                    ? "text-white"
                    : props.className
            }
            style={{width: "fit-content"}}
        >
            <button
                className="overflow-ellipsis py-3 px-5 rounded-md"
                style={{background: "var(--yellow)", color: "var(--green)", border: '2px double #052a26'}}
            >
                {/* <span style={{fontSize:'18px'}}></span> */}
                {props.btnTxt}
            </button>
        </Link>
    );
}
