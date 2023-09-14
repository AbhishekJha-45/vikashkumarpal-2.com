import Link from "next/link";

export default function ButtonGreen(props) {
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
                className="py-3 px-5 rounded-md"
                style={{background: "var(--green)", color: "var(--yellow)", border: '2px double #ffce4f'}}
            >
                {props.btnTxt}
            </button>
        </Link>
    );
}
