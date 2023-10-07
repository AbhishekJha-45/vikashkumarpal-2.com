import {getSitemapData} from "@utils/graphQlquery";

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts && posts.map((post) => {
        return `
       <url>
           <loc>${`https://vikashkumarpal.com${post.uri}`}</loc>
           <lastmod>${post.seo.openGraph.updatedTime===null ? post.dateGmt:post.seo.openGraph.updatedTime}</lastmod>
           <changefreq>daily</changefreq>
       </url>
     `;
    }).join('')}
   </urlset>
 `;
}


export default function SitemapCaseStudyXml() {
    return null;
}

export async function getServerSideProps({res}) {
    const query = `query GetPagesSitemapdata{
  caseStudies{
    nodes{
      uri
      dateGmt
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
    const sitemap = generateSiteMap(request.data.caseStudies.nodes);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}
