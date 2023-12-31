import Header from "@utils/Header";
import getHeader from "@utils/graphQlquery";
export async function getStaticProps() {
    const headerData = await getHeader('terms-and-conditions');
    return {
        props: {headerData: headerData}, revalidate: 60
    }
}
export default function termsAndConditions({headerData}) {
    return <>
        <Header headerData={headerData}/>
        <h1>terms-and-conditions</h1>
    </>
}