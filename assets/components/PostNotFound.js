import getHeader from "@utils/graphQlquery";
import Header from "@utils/Header";

export async function getStaticProps() {
    const getHeader = await getHeader('404-error');
    return {
        props:{
            getHeader
        }
    }
}

export default function PostNotFound({getHeader}) {
    return (
        <div className="text-center">
            <Header getHeader={getHeader}/>
            <h1>404 - Post Not Found</h1>
        </div>
    )
}