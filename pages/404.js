import style from '@styles/general.module.css'
import Link from "next/link";
import Header from "@utils/Header";
import getHeader from "@utils/graphQlquery";

export async function getStaticProps() {
    const headerData = await getHeader('404-error');
    return {
        props: {headerData: headerData}, revalidate: 60
    }
}

export default function NotFound({headerData}) {
    return (
        <section className={style.page_404}>
            <Header headerData={headerData}/>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className={style.four_zero_four_bg}>
                                <h1 className="text-center ">404</h1>


                            </div>

                            <div className={style.contant_box_404}>
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}