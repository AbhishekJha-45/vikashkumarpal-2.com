import { Suspense } from "react";
// import dynamic from "next/dynamic";
// import Loading from "@/app/loading";
// import CardsInfiniteScroll from "@/components/CardsInfiniteScroll";
// const CardsInfiniteScroll = dynamic(
//   () => import("@/components/CardsInfiniteScroll"),
//   {
//     // Specify loading component while the dynamic import is in progress
//     loading: () => <Loading />,
//     // Custom render function to render something else on the client side
//     render: (Component, { isServer }) => {
//       if (isServer) {
//         // If it's server-side rendering, render the original component
//         return <p>server side rendering is different!</p>;
//       } else {
//         // If it's client-side rendering, render a custom message
//         return <Component />;
//       }
//     },

//     ssr: false,
//   }
// );
export default async function page() {
  return (
    <Suspense fallback={<p>loading posts...</p>}>
      <main className="container-services pt-16 md:px-5">
        <div className="">
          {/*<CardsInfiniteScroll type={'case-study'}/>*/}
        </div>cd
      </main>
    </Suspense>
  );
}
