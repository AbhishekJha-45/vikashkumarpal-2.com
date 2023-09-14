import CardSmallHome from "./CardSmallHome";
import seoAudit from "../Images/seo-audit.png";
import wixSeo from "../Images/wix-seo.png";
import wordpressSeo from "../Images/wordpress-seo.png";
import squarespaceSeo from "../Images/squarespace-seo.png";
import technicalSeo from "../Images/technical-seo.png"
import keyWordResearch from "../Images/keyword-research.png"
import seoServices from "../Images/seo-services.png"
import localSeo from "../Images/local-seo.png"
import ecommerceSeo from "../Images/ecommerce-seo.png"

export default function Home_section_4() {

    return (
        <main className="container-home py-14 px-3">
      <span className="flex justify-center" style={{color: "var(--green)"}}>
        Services
      </span>
            <h2 className="text-center">What We Offer</h2>
            <div
                className="lg:grid grid-cols-3  lg:gap-y-7 gap-y-4 place-items-center justify-around gap-x-7 pt-10 flex flex-col">
                <CardSmallHome
                    src={seoAudit}
                    title="Seo Audit"
                    path="/services/seo-audit"
                    description="Get a full or customized comprehensive SEO Audit of your website that include Technical SEO, On-page SEO & Off-page SEO."
                />
                <CardSmallHome
                    src={keyWordResearch}
                    title="Keyword Research"
                    path="/services/keyword-research"
                    description="Comprehensive keyword research with high search volume and low competition for your business to drive more traffic to your website."
                />
                <CardSmallHome
                    src={seoServices}
                    title="SEO Services"
                    path="/services/seo-services"
                    description="Strategic data-driven SEO services that drive high-quality results in terms of increase in organic search traffic, sales & conversions."
                />
                <CardSmallHome
                    src={localSeo}
                    title="Local SEO Service"
                    path="/services/local-seo"
                    description="Ensure that you generate more local business, more local clients will visit your website & make purchases thanks to our Local SEO Service."
                />
                <CardSmallHome
                    src={technicalSeo}
                    title="Technical SEO"
                    path="/services/technical-seo"
                    description="Fix technical website & SEO issues through Technical SEO Audit & optimize your website to doubled ROI & rank on the first page of Google."
                />
                <CardSmallHome
                    src={ecommerceSeo}
                    title="Ecommerce SEO"
                    path="/services/ecommerce-seo"
                    description="Ensure building successful SEO strategies for ambitious eCommerce businesses. Our expertise helps businesses gain the visibility they deserve."
                />
                <CardSmallHome
                    src={wordpressSeo}
                    title="WordPress SEO"
                    path="/services/wordpress-seo"
                    description="Take your business to a new high with WordPress SEO, drive high-quality traffic, conversions, and sales to your WordPress website."
                />
                <CardSmallHome
                    src={wixSeo}
                    title="Wix SEO"
                    path="/services/wix-seo"
                    description="Your Wix website needs to optimize to drive sales, conversion and boost organic traffic through Wix SEO. Take your business to the next level."
                />
                <CardSmallHome
                    src={squarespaceSeo}
                    title="Squarespace SEO"
                    path="/services/squarespace-seo"
                    description="Your professional Squarespace website can drive more sales, traffic, & visibility it deserves with the help of comprehensive SEO strategy."
                />
            </div>
        </main>
    );
}
