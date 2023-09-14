import ButtonNormal from "./ButtonYellow";

export default function Home_Section_12() {
    return (
        <section
            className="container-home py-14 px-3 lg:mx-0 flex flex-col justify-center items-center"
            style={{background: "var(--green)"}}
        >
            <h2 className="text-white text-center">
                Transforming Business through Powerful SEO Strategies
            </h2>
            <div className="lg:table mt-14 justify-evenly items-center flex flex-col gap-y-5">
                <div className="text-center  pt-3 table-cel">
          <span style={{color: "var(--yellow)", fontSize: "24px"}}>
            143% Traffic Growth
          </span>
                    <p className="text-white" style={{marginTop: "10px", padding: "0"}}>
                        Exceptional growth in website traffic
                    </p>
                </div>
                <div className="table-cell text-center">
          <span style={{color: "var(--yellow)", fontSize: "24px"}}>
            56% Sales Boost
          </span>
                    <p className="text-white" style={{margin: "10px", padding: "0"}}>
                        impressive average sales growth
                    </p>
                </div>
                <div className="table-cell text-center">
          <span style={{color: "var(--yellow)", fontSize: "24px"}}>
            72% ROI Increase
          </span>
                    <p className="text-white" style={{margin: "10px", padding: "0"}}>
                        Increase in return on investment
                    </p>
                </div>
                <div className="  text-center table-cel">
          <span style={{color: "var(--yellow)", fontSize: "24px"}}>
            Improved Rankings
          </span>
                    <p className="text-white" style={{margin: "10px", padding: "0"}}>
                        Improvements in organic rankings
                    </p>
                </div>
            </div>
            <ButtonNormal
                btnTxt="Book A Strategy Call"
                path="contact"
                className="mt-10"
            />
        </section>
    );
}
