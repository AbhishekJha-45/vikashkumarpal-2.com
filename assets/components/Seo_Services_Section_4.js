import Seo_Serv_Card_Section_4 from "@/app/services/seo-services/Seo_Serv_Card_Section_4";
import React from "react";

export default function Seo_Services_Section_4() {
    return (
        <section className="container-services lg:py-14 pt-10">
            <h2 className="lg:px-52">Comprehensive SEO Research, Strategy & Plan</h2>
            <div className="mt-10 flex justify-center  lg:flex-row flex-col items-center lg:gap-x-5 lg:gap-y-0 gap-y-5">
                <Seo_Serv_Card_Section_4
                    heading="In-Depth Research"
                    para="Vikash conducts in-depth research into your business, industry, target audience, and competitors to identify opportunities for improving your website's search engine rankings. Vikash also performs keyword research to ensure that your website is targeting the right keywords to attract potential customers."
                />
                <Seo_Serv_Card_Section_4
                    heading="Customized Strategy"
                    para="Based on the research findings, Vikash develops a customized SEO strategy to improve your website’s search engine ranking. This may involve making changes to the website’s content and structure, building high-quality backlinks, and optimizing on-page elements such as meta tags and headings."
                />
                <Seo_Serv_Card_Section_4
                    heading="Plan Implementation"
                    para="Once the strategy has been developed, Vikash creates a detailed plan to implement the customized SEO strategy. This includes setting goals and timelines for achieving them, assigning tasks and responsibilities, and monitoring progress to ensure that the strategy is effective.
          "
                />
            </div>
        </section>
    );
}
