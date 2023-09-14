"use client"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";

export default function RecentPosts(props) {
    return (
        <div
            className="px-3 lg:px-10 rounded-md mx-3 flex flex-col justify-center py-8 lg:py-0 gap-y-5 text-white  "
            style={{
                backgroundColor: "var(--green)",
                backgroundImage:
                    "linear-gradient(to bottom right,  rgb(5, 28, 5),var(--green))",
                backdropFilter: "blur(2px)",
            }}
        >
            <span className="text-center pt-4">— The Official SEO Blog —</span>
            <span className="text-3xl text-center">SEO</span>
            <span
                className=" border-white  text-center pb-4"
                style={{borderBottom: "1px solid grey"}}
            >
        7 Top Mobile SEO Tips to Improve Your Rankings
      </span>
            <span
                className=" border-white  text-center pb-4"
                style={{borderBottom: "1px solid grey"}}
            >
        7 Top Mobile SEO Tips to Improve Your Rankings
      </span>
            <span
                className=" border-white  text-center pb-4"
                style={{borderBottom: "1px solid grey"}}
            >
        7 Top Mobile SEO Tips to Improve Your Rankings
      </span>
            <div className="self-center ">
                {/* <Button btnTxt="See all 71 posts" path="/[blog].js" /> */}
                <Link href="/blog" className="text-white">See all 71 posts <ArrowForwardIcon/></Link>
            </div>
        </div>
    );
}
