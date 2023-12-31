import Head from "next/head";

export default function customHead(props) {
    const {title, seo, date, author} = props;
    const url = seo.canonicalUrl;
    const canonicalUrl = url.replace('admin.vikashkumarpal.com', 'vikashkumarpal.com');
    const schema = seo.jsonLd.raw;
    const regexPattern = /<script type="application\/ld\+json" class="rank-math-schema">(.*?)<\/script>/s;
    const schemaJson = schema.match(regexPattern)[1];
    const uppdatedTime = seo.openGraph.updatedTime ? seo.openGraph.updatedTime : date;
    const replacedData = schemaJson.replace(/"https:\/\/admin\.vikashkumarpal\.com(?!\/wp-content\/uploads\/\d{4}\/\d{2})/g, '"https://vikashkumarpal.com');

    // console.log(schemaJson)
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={seo.description}/>
            <meta name='robots' content={seo.robots}/>
            <link rel="canonical" href={canonicalUrl}/>
            <meta property="og:title" content={seo.openGraph.title}/>
            <meta property="og:type" content="article"/>
            <meta property="og:description" content={seo.description}/>
            <meta property="og:image" content={seo.openGraph.image.url}/>
            <meta property="og:url" content={canonicalUrl}/>
            <meta name='locale' content={seo.openGraph.locale}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@vikashkumarpal"/>
            <meta name="twitter:url" content={canonicalUrl}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.openGraph.image.url}/>
            <meta name="twitter:label1" content="Written by"/>
            <meta name="twitter:data1" content={author}/>
            <meta name="twitter:site" content="@vikashkumarpal"/>
            <meta name="twitter:creator" content="@vikashkumarpal"/>
            <meta name="date" content={date}/>
            <meta name="last-modified" content={uppdatedTime}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: replacedData}}/>
        </Head>
    )
}
