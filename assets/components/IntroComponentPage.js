export default function IntroComponentPage(props) {
    return (
        <div className="container-home lg:pt-10 px-3">
            <h1 className="text-center lg:pt-14 pt-20">{props.heading}</h1>
            <p className="text-center">{props.para}</p>
        </div>
    );
}
