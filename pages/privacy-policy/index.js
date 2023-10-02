 import Header from "@utils/Header";
import getHeader from "@utils/graphQlquery";
export async function getStaticProps() {
    const headerData = await getHeader('privacy-policy');
    return {
        props: {headerData: headerData}, revalidate: 60
    }
}
export default function PrivacyPolicy({headerData}) {
    return <>
        <p>this is  something</p>
        <Header headerData={headerData}/>
    </>
}