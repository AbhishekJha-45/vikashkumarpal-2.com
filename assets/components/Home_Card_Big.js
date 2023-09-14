import React from "react";

export default function Home_Card_Big(props) {
    return (
        <div className="shadow-home lg:flex flex-row justify-center items-center py-3 pl-5 lg:pr-3 rounded-md bg-white "
             id="big-card">
            <h4 className="text-4xl " style={{fontFamily: "Gabriela"}}>
                {props.number}
            </h4>
            <div className="lg:ml-4">
                <h3 className="">{props.title}</h3>
                <p
                    className=""
                    style={{margin: "0", fontSize: "14px", lineHeight: "19px"}}
                >
                    {props.para}
                </p>
            </div>
        </div>
    );
}
