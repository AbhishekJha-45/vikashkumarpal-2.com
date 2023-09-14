import Button from "./Button";

export default function Collaborate() {
    return (
        <div className="container-services  pt-10 flex justify-center items-center">
            <div
                className="flex flex-col justify-center items-center gap-y-5 w-fit lg:p-10 p-5 shadow-home"
                style={{background: "var(--yellow)", color: "var(--green)"}}
            >
                <h2>Wondering to do some similar work?</h2>
                <Button btnTxt="Start Your SEO Journey Today" path="/contact"/>
            </div>
        </div>
    );
}
