"use client";
import Link from "next/link";

export default function Button(props) {
    return (
        <Link
            href={props.path}
            className={
                props.className == undefined ||
                props.className == null ||
                props.className == " "
                    ? "text-white"
                    : props.className
            }
            style={{width: "fit-content"}}
        >
            {/* <button
        className="py-1 px-5 rounded-full text-lg"
        style={{ background: "#052A26" ,outline:'3px double var(--green)' }}
      >
        {/* <span style={{fontSize:'18px'}}></span> */}
            {/* {props.btnTxt} */}
            {/* <ArrowRightIcon fontSize="medium" /> */}
            {/* </button>  */}
            <button
                className="button text-lg px-3 py-2 w-fit rounded-md justify-center"
                style={{
                    transition: "all 0.4 linear",
                    background: 'var(--green)',
                    color: 'var(--yellow)',
                    border: '2px double #ffce4f'
                }}
            >
                {props.btnTxt}
                {/* <ArrowRightIcon fontSize="medium"/> */}
            </button>
        </Link>
    );
}
