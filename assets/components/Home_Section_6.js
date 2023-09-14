import React from "react";
import Small_Yellow_Card from "./Small_Yellow_Card";
import vector_1 from "../Images/Vector-1.png";
import vector_2 from "../Images/Vector-2.png";
import vector_3 from "../Images/Vector-3.png";
import vector_4 from "../Images/laugh.png";

export default function Home_Section_6() {
    return (
        // <main className=" lg:mx-16 py-14 mx-3  lg:flex lg:justify-evenly gap-x-5 relative lg:flex-row grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 items-center">
        <main
            className=" flex lg:flex-row flex-col justify-center gap-y-5 lg:justify-evenly lg:px-32 lg:py-14 pt-10 px-3">
            <Small_Yellow_Card
                src={vector_1}
                number="4+ Yrs"
                detail="Industry Experience"
            />
            <Small_Yellow_Card
                src={vector_2}
                number="100+"
                detail="Projects Complete"
            />
            <Small_Yellow_Card src={vector_3} number="173%" detail="Organic Growth"/>
            <Small_Yellow_Card
                src={vector_4}
                number="98%"
                detail="Client's Satisfaction"
            />
        </main>
    );
}
