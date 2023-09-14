import Home_Section_1 from "@components/Home_Section_1";
import Home_Section_2 from "@components/Home_Section_2";
import Home_Section_3 from "@components/Home_Section_3";
import Home_section_4 from "@components/Home_section_4";
import Home_Section_5 from "@components/Home_Section_5";
import Home_Section_6 from "@components/Home_Section_6";
import Home_Section_7 from "@components/Home_Section_7";
import Home_Section_8 from "@components/Home_Section_8";
import Home_section_9 from "@components/Home_section_9";
import Home_Section_11 from "@components/Home_Section_11";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_13 from "@components/Home_Section_13";

export const metadata = {
    title: "Home Page",
    description: "will update later on",
    robots: {
        index: false,
        noimageindex: true,
        follow: false,
    },
};


export default function Home() {
    return (
        <main className="" style={{background: "var(--background)"}}>
            <Home_Section_1/>
            <Home_Section_2/>
            <Home_Section_3/>
            <Home_section_4/>
            <Home_Section_5/>
            <Home_Section_6/>
            <Home_Section_7/>
            <Home_Section_8/>
            <Home_section_9/>
            {/*<Home_Section_10 />*/}
            <Home_Section_11/>
            <Home_Section_12/>
            <Home_Section_13/>
        </main>
    );
}