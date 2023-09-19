import Clir from "@components/Clir";
import IntroComponentPage from "@components/IntroComponentPage";
import Home_Section_3 from "@components/Home_Section_3";
import CardsContainer from "@components/CardsContainer";
import Home_Section_8 from "@components/Home_Section_8";
import Home_Section_13 from "@components/Home_Section_13";
import Home_Section_12 from "@components/Home_Section_12";
import Home_Section_11 from "@components/Home_Section_11";
import Home_Section_10 from "@components/Home_Section_10";
import CarouselTestimonial from "@components/CarouselTestimonial";
import Header from "@utils/Header";

const CaseStudy = () => {
    const cards = [
        {
            title: 'John Doe',
            description: 'Description for John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Alice Smith',
            description: 'Description for Alice Smith. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Bob Johnson',
            description: 'Description for Bob Johnson. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            title: 'Emily Davis',
            description: 'Description for Emily Davis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        },
        {
            title: 'Michael Brown',
            description: 'Description for Michael Brown. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        },
        {
            title: 'Emma Lee',
            description: 'Description for Emma Lee. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        },
        {
            title: 'William Taylor',
            description: 'Description for William Taylor. Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
        },
        {
            title: 'Olivia Harris',
            description: 'Description for Olivia Harris. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
        },
        {
            title: 'Liam Clark',
            description: 'Description for Liam Clark. consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
        },
        {
            title: 'Sophia Rodriguez',
            description: 'Description for Sophia Rodriguez. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        },
    ];

    return (
        <section className=''>
            <Header pageName='casestudy'/>
            <IntroComponentPage heading={'Case Study'}
                                para={'I have helped businesses increase website rankings, amplified traffic, and maximized ROI for a diverse range of clients.'}/>
            <div className='container-services lg:pxp-0 px-3'>
                <Clir
                    spanTxt="Info"
                    heading='this is  some heading'
                    para='this is some para'
                    btnTxt="Start Your SEO Journey Today"
                    path="/contact"
                    src='https://admin.vikashkumarpal.com/wp-content/uploads/2023/09/what-are-keywords-the-role-of-keywords-in-on-page-seo.png'
                />
            </div>
            <Home_Section_3/>
            <span className='flex justify-center items-center text-lg lg:pxp-0 px-3'>Services</span>
            <h2 className='pb-5 lg:pxp-0 px-3 text-center'>What we Offer</h2>
            <CardsContainer />
            <CarouselTestimonial cards={cards}/>
            <Home_Section_8/>
            {/*<Home_Section_10/>*/}
            <Home_Section_11/>
            <Home_Section_12/>
            <Home_Section_13/>
        </section>
    )
}

export default CaseStudy
