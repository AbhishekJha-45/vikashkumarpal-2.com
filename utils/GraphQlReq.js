export default async function graphQlReq(query) {
    const url = 'https://admin.vikashkumarpal.com/graphql';
    const headers = {
        'Content-Type': 'application/json',
    }
    const res = await fetch(url, {headers, method: 'POST', body: JSON.stringify(query), next: {revalidate: 5,},});
    const resJson = await res.json();
    return resJson;
}