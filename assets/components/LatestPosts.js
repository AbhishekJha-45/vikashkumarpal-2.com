// import { getBlogPostByCategory } from "@/app/[blog].js/fetchPosts";
// import Card_Section_10 from "./Card_Section_10";
// export default async function LatestPosts(props) {
//   var isFetched = false;
//   var data;
//   if (isFetched === false) {
//     data = await getBlogPostByCategory(props.category);
//     isFetched = true;
//   }
//   return (
//     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center sec-10-card-container container-home gap-y-10 lg:gap-y-0 pt-10 lg:py-14">
//       {data.splice(1,3).map((post, index) => {
//         const createdDate = new Date(post.created_at);
//         const months = [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//           "August",
//           "September",
//           "October",
//           "November",
//           "December",
//         ];
//         const month = months[createdDate.getMonth()];
//         const day = createdDate.getDate();
//         const localizedDate = `${month} ${day}`;
//         return (
//           <div key={index} className="col-span-1">
//             <Card_Section_10
//               key={index}
//               src={post.image}
//               post_url={post.post_url}
//               title={post.title}
//               para={post.description}
//               readTime="8 Min Read "
//               date={localizedDate}
//               authorName={post.author_name}
//               authorImage={post.image}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
