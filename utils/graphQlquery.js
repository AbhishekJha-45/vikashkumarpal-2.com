import graphQlReq from ".//GraphQlReq";
const serverUrl = "https://admin.vikashkumarpal.com/graphql";

export async function getAllBlogPosts() {
    const query = {
        query: `query GetPosts {
  posts {
    edges {
      node {
        title
        date
        modified
        slug
        excerpt
        content
        seo {
              canonicalUrl
              breadcrumbTitle
              description
              fullHead
          
              openGraph {
                title
                updatedTime
                image{
                  url
                }
              }
              jsonLd {
                raw
              }
              robots
        }
        author {
          node {
            name
             avatar{
              url
            }
            posts {
              nodes {
                table_of_contents {
                  tableOfContents
                  excerptCustom
                  buttonHref
                }
              }
            }
          }
        }
        featuredImage {
          node {
            mediaItemUrl
            altText
        
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
}
`
    }
    const resJson = await graphQlReq(query);
    const allposts = resJson.data.posts.edges;
    return allposts
}

export async function getPostsByCategory(categoryName, first) {
    const query = {
        query: `query GetPosts($categoryName: String!, $first: Int!) {
  posts(where: {categoryName: $categoryName}, first: $first) {
    edges {
      node {
        title
        date
        modified
        slug
        excerpt
        content
        seo {
          canonicalUrl
          breadcrumbTitle
          description
          fullHead
          openGraph {
            title
            updatedTime
            image {
              url
            }
          }
          jsonLd {
            raw
          }
          robots
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        featuredImage {
          node {
            mediaItemUrl
            altText
          }
        }
        categories {
          nodes {
            name
          }
        }
        table_of_contents {
          tableOfContents
          excerptCustom
          buttonHref
        }
      }
    }
  }
}`,
        variables: {
            categoryName: categoryName,
            first: first
        }
    };

    try {
        const resJson = await graphQlReq(query); // Send the query object directly, not as a JSON string
        const allposts = resJson.data;

        return allposts;
    } catch (error) {
        console.error("GraphQL Request Error:", error);
        throw error;
    }
}

export async function getPostBySlug(slug) {
    const query = {
        query: `query GetSinglePost {
  post(
    id: "${slug}"
    idType: SLUG
  ) {
    title
    date
    slug
    excerpt
    content
    seo {
      description
      openGraph {
        title
        updatedTime
        image {
          url
        }
        locale
      }
      jsonLd {
        raw
      }
      robots
      canonicalUrl
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    featuredImage {
      node {
        altText
        mediaItemUrl
      }
    }
    table_of_contents {
      tableOfContents
      excerptCustom
      buttonHref
    }
    categories {
      nodes {
        name
      }
    }
  }
}`,
    };

    try {
        const resJson = await graphQlReq(query);
        const post = resJson.data;
        // console.log(post)
        return post;
    } catch (error) {
        console.error("GraphQL Request Error:", error);
        throw error;
    }
}


export default async function getHeader(pageName) {
    try {
        const response = await fetch('https://admin.vikashkumarpal.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
query getHeader {
  page(id: "${pageName}", idType: URI) {
      title
      dateGmt
    slug
    author{
      node{
        avatar{
          url
        }
        name
      }
    }
    featuredImage{
      node{
        mediaItemUrl
      }
    }
    seo {
      canonicalUrl
      description
      jsonLd {
        raw
      }
      openGraph {
        description
        locale
        title
        updatedTime
      }
      robots
    }
  }
    }
    `
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.data.page;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


export async function getAllCaseStudy() {
    const apiUrl = 'https://admin.vikashkumarpal.com/graphql';

    // Define your GraphQL query
    const graphqlQuery = `
query getCaseStudy {
  caseStudies {
    nodes {
      title
      singleCaseStudy {
        csParaHero
        csHeroCta
        csHeroHighlights {
          csHighlightIcon1 {
            mediaItemUrl
          }
          csHighlightNumber1
          csHighlightText1
          csHighlightIcon2 {
            mediaItemUrl
          }
          csHighlightNumber2
          csHighlightText2
          csHighlightIcon3 {
            mediaItemUrl
          }
          csHighlightNumber3
          csHighlightText3
        }
        csInnerHeading1
        csInnerContent1
        csInnerCtaButton
        csInnerHeading2
        csInnerContent2
        csInnerCtaButton
        csInnerHeading3
        csInnerContent3
        csInnerCtaButton
        csInnerHeading4
        csInnerContent4
        csInnerCtaButton
        csInnerHeading5
        csInnerContent5
        csInnerCtaButton
        csCtaHeading
        csInnerButton
      }
    }
  }
}
  `;

    // Make a POST request to the GraphQL API
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: graphqlQuery }),
        });

        if (!response.ok) {
            throw new Error('GraphQL request failed');
        }

        const data = await response.json();
        const caseStudies = data.data.caseStudies.nodes;
            // console.log("from query",caseStudies)
        return caseStudies;
    } catch (error) {
        console.error('Error fetching case studies:', error);
        return [];
    }
}

export async function getCaseStudyPage() {
    const apiUrl = 'https://admin.vikashkumarpal.com/graphql';

    const graphqlQuery = `
query getCaseStudyPageData {
  page(id: "casestudy", idType: URI) {
    dateGmt
    author {
      node {
        avatar {
          url
        }
        name
      }
    }
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    caseStudyPage {
      csHeroContent
      csPageHeroHeading
      csPageParagraphContent
        csCtaButton
    }
  }
}
  `;

    // Make a POST request to the GraphQL API
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: graphqlQuery }),
        });

        if (!response.ok) {
            throw new Error('GraphQL request failed');
        }

        const data = await response.json();
        const caseStudies = data.data.page;
        // console.log("from query",caseStudies)
        return caseStudies;
    } catch (error) {
        console.error('Error fetching case studies:', error);
        return [];
    }
}

export async function getCaseStudiesCards() {
    const apiUrl = 'https://admin.vikashkumarpal.com/graphql';

    const graphqlQuery = `query getCaseStudies {
    caseStudies {
      nodes {
        title
        slug
        dateGmt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        seo {
          description
        }
      }
    }
  }`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: graphqlQuery }),
        });

        if (!response.ok) {
            throw new Error('GraphQL request failed');
        }

        const data = await response.json();
        const caseStudies = data.data.caseStudies.nodes;

        return caseStudies;
    } catch (error) {
        console.error('Error fetching case studies:', error);
        return [];
    }
}

export async function getClientLogos() {
    const apiUrl = serverUrl;

    // Define the GraphQL query
    const graphqlQuery = `query getClientLogos {
    page(id: "logo-carousel", idType: URI) {
      logoCarousel {
        client1 {
          mediaItemUrl
        }
        client2 {
          mediaItemUrl
        }
        client3 {
          mediaItemUrl
        }
        client4 {
          mediaItemUrl
        }
        client5 {
          mediaItemUrl
        }
        client6 {
          mediaItemUrl
        }
        client7 {
          mediaItemUrl
        }
        client8 {
          mediaItemUrl
        }
        client9 {
          mediaItemUrl
        }
        client10 {
          mediaItemUrl
        }
      }
    }
  }`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: graphqlQuery }),
        });

        if (!response.ok) {
            throw new Error('GraphQL request failed');
        }

        const data = await response.json();
        const logoCarousel = data.data.page.logoCarousel;

        // Extract the mediaItemUrl from each client object
        const logoLinks = Object.values(logoCarousel).map((client) => client.mediaItemUrl);

        return logoLinks;
    } catch (error) {
        console.error('Error fetching client logos:', error);
        return [];
    }
}

export async function getCaseStudyBySlug(slug) {
    const apiUrl = serverUrl;

    // Define the GraphQL query with the 'slug' variable
    const graphqlQuery = `
query getCaseStudyBySlug($slug: String!) {
  caseStudies(
    where: {name: $slug}
  ) {
      edges {
      node {
        title
        date
        seo {
          canonicalUrl
          description
          jsonLd {
            raw
          }
          robots
          openGraph {
            title
            image{
              url
            }
            description
            locale
            updatedTime
          }
        }
        featuredImage {
          node {
            mediaItemUrl
            altText
            author {
              node {
                name
              }
            }
          }
        }
        singleCaseStudy {
          csParaHero
          csHeroCta
          csHeroHighlights {
            csHighlightIcon1 {
              mediaItemUrl
            }
            csHighlightNumber1
            csHighlightText1
            csHighlightIcon2 {
              mediaItemUrl
            }
            csHighlightNumber2
            csHighlightText2
            csHighlightIcon1 {
              mediaItemUrl
            }
            csHighlightIcon3 {
              mediaItemUrl
            }
            csHighlightNumber3
            csHighlightText3
          }
          csInnerHeading1
          csInnerContent1
          csInnerCtaButton
          csImage1 {
            mediaItemUrl
          }
          csInnerHeading2
          csInnerContent2
          csImage2 {
            mediaItemUrl
          }
          csInnerHeading3
          csInnerContent3
          csImage3 {
            mediaItemUrl
          }
          csInnerHeading4
          csInnerContent4
          csImage4 {
            mediaItemUrl
          }
          csInnerHeading5
          csInnerContent5
          csImage5 {
            mediaItemUrl
          }
          csCtaHeading
        }
      }
    }
  }
}
  `;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: graphqlQuery,
                variables: { slug }, // Pass the 'slug' variable here
            }),
        });

        if (!response.ok) {
            throw new Error('GraphQL request failed');
        }

        const data = await response.json();
        const caseStudy = data.data.caseStudies.edges[0].node;

        return caseStudy;
    } catch (error) {
        console.error('Error fetching case study:', error);
        return null;
    }
}

