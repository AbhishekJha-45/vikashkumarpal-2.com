import graphQlReq from ".//GraphQlReq";

//new utils endpoints route from graphql

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
      dateGmt
    slug
    title
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
  
                `,
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



