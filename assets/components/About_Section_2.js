import React from "react";
import Small_Card_About_Sec_2 from "./Small_Card_About_Sec_2";

export default function About_Section_2() {
    return (
        <main className="flex px-3 lg:px-0 flex-col justify-center items-center py-14">
            <span>Some Special Reasons</span>
            <h2 className="text-center">Why Choose Us</h2>
            <div className="cards grid lg:grid-cols-2 grid-cols-1 lg:gap-x-5 pt-10 gap-y-5 lg:px-28">
                <div className="col-span-1">
                    <Small_Card_About_Sec_2
                        title="Proven Results"
                        para="Strong analytical & technical skills helped deliver proven results to a wide range of businesses to improve their online presence and drive more traffic to their websites."
                    />
                </div>
                <div className="col-span-1">
                    <Small_Card_About_Sec_2
                        title="Customized Strategies"
                        para="Create customized SEO strategies based on analytical & technical research that is unique to the needs and objectives of the business to achieve the greatest results possible."
                    />
                </div>
                <div className="col-span-1">
                    <Small_Card_About_Sec_2
                        title="Experience and Expertise"
                        para="With over 4 years of experience in the field, stay
            up to date with the latest industry trends,
            algorithm updates, and expertise to provide you
            with the best possible service."
                    />
                </div>
                <div className="col-span-1">
                    <Small_Card_About_Sec_2
                        title="Local SEO Expertise"
                        para="Use a variety of techniques, such as building
            local citations and creating locally-focused
            content, to help the client website rank higher in
            search results for specific city or region."
                    />
                </div>
            </div>
        </main>
    );
}
