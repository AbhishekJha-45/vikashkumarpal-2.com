import Header from "@utils/Header";
import getHeader from "@utils/graphQlquery";
export async function getStaticProps() {
    const headerData = await getHeader('thank-you');
    return {
        props: {headerData: headerData}, revalidate: 60
    }
}
function ThankYou({headerData}) {
    return (
        <>
            <Header headerData={headerData}/>
            <h1>Thank You</h1>
        </>
    );
}

export default ThankYou;
