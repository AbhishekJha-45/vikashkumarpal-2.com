import TextOnlyCard from "./TextOnlyCard";

export default function Seo_Consulting_Section_4() {
    return (
        <main className="container-services py-14">
            <div className="">
                <h2>Seo Consulting Process</h2>
                <p className="lg:text-center">
                    SEO consulting is a process of providing SEO advice, analysis, and
                    services to improve a website's visibility in organic search results.
                    Business looking for affordable SEO consulting services, Vikash can
                    help you achieve your online marketing objectives. Vikash offers
                    expert SEO consulting services for various industries such as e
                    commerce, education, healthcare, travel, etc. Vikash Kumar Pal a
                    freelance SEO consultant can help you with various aspects of SEO,
                    such as
                </p>
            </div>
            <div className="cards-seo-consu grid lg:grid-cols-2 grid-cols-1 gap-5 mt-16">
                <TextOnlyCard
                    heading="Conducting keyword research"
                    para="Finding and analyzing the best keywords for your website that match your industry, audience, goals, and competitors."
                />
                <TextOnlyCard
                    heading="Creating an SEO content strategy"
                    para="Planning and producing high quality and relevant
          content for your website that matches your
          keywords, audience's needs, and search intent."
                />
                <TextOnlyCard
                    heading="Auditing your website s technical SEO"
                    para="Checking and improving how fast, easy, and
          secure your website is for both users and search
          engines, following SEO best practices."
                />
                <TextOnlyCard
                    heading="Building backlinks"
                    para="Getting other websites to link to your website to
          increase its popularity, trustworthiness, and
          ranking potential, using ethical methods."
                />
                <TextOnlyCard
                    heading="Analyzing your competitors and audience"
                    para="Researching what other websites in your industry are doing
          well or poorly, and understanding what your target customers
          want, need, and expect from you."
                />
                <TextOnlyCard
                    heading="Monitoring and reporting on your SEO performance"
                    para="Measuring and evaluating how well your website is achieving its
          goals, attracting traffic, generating leads, etc., using tools such as
          Google Analytics or Search Console."
                />
            </div>
        </main>
    );
}
