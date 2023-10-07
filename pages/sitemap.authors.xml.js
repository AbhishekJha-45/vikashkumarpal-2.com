import {getSitemapData} from "@utils/graphQlquery";

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://vikashkumarpal.com/</loc>
     </url>
     <url>
       <loc>https://vikashkumarpal.com/about/</loc>
     </url>
     ${posts && posts.map((post) => {
        return `
       <url>
           <loc>${`https://vikashkumarpal.com${post.uri}`}</loc>
           <lastmod>${post.seo.openGraph.updatedTime===null ? post.date:post.seo.openGraph.updatedTime}</lastmod>
           <changefreq>daily</changefreq>
       </url>
     `;
    }).join('')}
   </urlset>
 `;
}


export default function sitemapAuthorsXml() {
    return null;
}

export async function getServerSideProps({res}) {
    const query = `query GetPostSitemap {
  posts{
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
