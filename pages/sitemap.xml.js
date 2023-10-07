import {getSitemapData} from "@utils/graphQlquery";

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://vikashkumarpal.com/sitemap-case-study.xml/</loc>
     </url>
     <url>
       <loc>https://vikashkumarpal.com/sitemap-blog.xml/</loc>
     </url>
     <url>
       <loc>https://vikashkumarpal.com/sitemap-authors.xml/</loc>
     </url>
     <url>
       <loc>https://vikashkumarpal.com/sitemap-service.xml/</loc>
     </url>
     <url>
         <loc>https://vikashkumarpal.com/sitemap-pages.xml</loc>
        </url>    
   </urlset>
 `;
}


function SiteMap() {
    return null;
}

export async function getServerSideProps({res}) {
    const query = `query GetPostSitemap {
  posts{
      nodes{
        uri,
        seo{
          openGraph{
            updatedTime
          }
        }
      }
    }
  }`;
    const request = await getSitemapData(query);
    const sitemap = generateSiteMap(request.data.posts.nodes);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;