import {getSitemapData} from "@utils/graphQlquery";

export default function sitemapPagesXml() {
    return null;
}
var caseStudy, blog, portfolio, service, about, tnc, privacy, seoconsulting, contact, homepage;

export async function getServerSideProps({res}) {
    const query = `query GetPostSitemap {
  pages(first:30){
      nodes{
        uri
        date
        seo{
          openGraph{
            updatedTime
          }
        }
      }
    }
  }
  `;
    const request = await getSitemapData(query);
    const urisToExclude = ["/404-error/", "/thank-you/", "/logo-carousel/"];
    const filteredData = request.data.pages.nodes.filter((item) => !urisToExclude.includes(item.uri));

    function getDataByURI(uri) {
        const item = filteredData.find((item) => item.uri === uri);
        if (item) {
            return {
                date: item.date,
                updatedTime: item.seo.openGraph.updatedTime,
            };
        } else {
            return null; // Return null if URI not found
        }
    }

    caseStudy = getDataByURI('/casestudy/');
    blog = getDataByURI('/blog/');
    portfolio = getDataByURI('/portfolio/');
    service = getDataByURI('/service/');
    about = getDataByURI('/about-me/');
    tnc = getDataByURI('/terms-and-conditions/');
    privacy = getDataByURI('/privacy-policy/');
    seoconsulting = getDataByURI('/seo-consulting/');
    contact = getDataByURI('/contact/');
    homepage = getDataByURI('/');
    const sitemap = generateSiteMap(request.data.pages.nodes);
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://vikashkumarpal.com/</loc>
       <lastmod>${homepage.updatedTime === null ? homepage.date : homepage.updatedTime}</lastmod>
       <changefreq>daily</changefreq>
     </url>
       <url>
         <loc>https://vikashkumarpal.com/case-study/</loc>
            <lastmod>${caseStudy.updatedTime === null ? caseStudy.date : caseStudy.updatedTime}</lastmod>
            <changefreq>daily</changefreq>
       </url>
       <url>
            <loc>https://vikashkumarpal.com/blog/</loc>
            <lastmod>${blog.updatedTime === null ? blog.date : blog.updatedTime}</lastmod>
            <changefreq>daily</changefreq>
       </url>
     <url>
       <loc>https://vikashkumarpal.com/about/</loc>
         <lastmod>${about.updatedTime === null ? about.date : about.updatedTime}</lastmod>
            <changefreq>daily</changefreq>
     </url>
        <url>
        <loc>https://vikashkumarpal.com/privacy-policy/</loc>
        <lastmod>${privacy.updatedTime === null ? privacy.date : privacy.updatedTime}</lastmod>
        <changefreq>daily</changefreq>
        </url>
        <url>
        <loc>https://vikashkumarpal.com/terms-and-conditions/</loc>
        <lastmod>${tnc.updatedTime === null ? tnc.date : tnc.updatedTime}</lastmod>
        <changefreq>daily</changefreq>
        </url>
        <url>
        <loc>https://vikashkumarpal.com/contact/</loc>
        <lastmod>${contact.updatedTime === null ? contact.date : contact.updatedTime}</lastmod>
        <changefreq>daily</changefreq>
        </url>
        <url>
        <loc>https://vikashkumarpal.com/portfolio/</loc>
        <lastmod>${portfolio.updatedTime === null ? portfolio.date : portfolio.updatedTime}</lastmod>
        <changefreq>daily</changefreq>
        </url>
        <url>
        <loc>https://vikashkumarpal.com/service/</loc>
        <lastmod>${service.updatedTime === null ? service.date : service.updatedTime}</lastmod>
        <changefreq>daily</changefreq>
        </url>
   </urlset>
 `;
}