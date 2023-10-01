import Header from "@utils/Header";
import getHeader from "@utils/graphQlquery";
export async function getStaticProps() {
    const headerData = await getHeader('contact');
    return {
        props: {headerData: headerData}, revalidate: 60
    }
}
export default function contact({headerData}) {
    return <>
        <Header  headerData={headerData}/>
        <h1>Contact</h1>
    </>
}