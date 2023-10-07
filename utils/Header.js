import Head from "next/head";
export default function Header({headerData}) {

    const {title, slug, dateGmt, author, seo, featuredImage} = headerData;

    const jsonLd = seo?.jsonLd.raw;
    const image = featuredImage?.node?.mediaItemUrl ? featuredImage.node.mediaItemUrl : 'https://admin.vikashkumarpal.com/wp-content/uploads/2023/08/vikash.webp';
    const regexPattern = /<script type="application\/ld\+json" class="rank-math-schema">(.*?)<\/script>/s;
    const schemaJson = jsonLd ? jsonLd.match(regexPattern)[1] : null;
    const replacedData = schemaJson.replace(/"https:\/\/admin\.vikashkumarpal\.com(?!\/wp-content\/uploads\/\d{4}\/\d{2})/g, '"https://vikashkumarpal.com');


    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={seo.description}/>
            <meta name='robots' content={seo.robots}/>
            <link rel="canonical" href={`https://vikashkumarpal.com/${slug}/`}/>
            <meta property="og:title" content={seo.openGraph.title}/>
            <meta property="og:type" content="article"/>
            <meta property="og:description" content={seo.openGraph.description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:url" content={`https://vikashkumarpal.com/${slug}/`}/>
            <meta name='locale' content={seo.openGraph.locale}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@vikashkumarpal"/>
            <meta name="twitter:url" content={`https://vikashkumarpal.com/${slug}/`}/>
            <meta name="twitter:title" content={seo.openGraph.title}/>
            <meta name="twitter:description" content={seo.openGraph.description}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:label1" content="Written by"/>
            <meta name="twitter:data1" content={author.node.name}/>
            <meta name="twitter:site" content="@vikashkumarpal"/>
            <meta name="twitter:creator" content="@vikashkumarpal"/>
            <meta name="date" content={dateGmt}/>
            <meta name="last-modified" content={seo.openGraph.updatedTime}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: replacedData}}/>
        </Head>
    );
}
