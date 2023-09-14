import '@styles/globals.css';
// import Navbar2 from "../assets/components/Navbar2";
import Footer2 from "../assets/components/Footer";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "../assets/components/dev";
import {Suspense} from "react";

export default function App({Component, pageProps}) {
    return <>
        {/*<Navbar2/>*/}
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Suspense fallback={<>something went wrong</>}>
                <Component {...pageProps} />
            </Suspense>
        </DevSupport>
        <Footer2/>
    </>
}