import React from "react";

export default function TextOnlyCard(props) {
    return (
        <main className="shadow-home text-center py-3 hover-yellow">
            <h3>{props.heading}</h3>
            <p style={{margin: "1em 0"}} className="px-5">{props.para}</p>
        </main>
    );
}
