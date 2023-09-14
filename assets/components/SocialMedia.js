"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialMedia(props) {
    return (
        <section className="flex flex-col sticky top-24 py-5 lg:py-0">
            <h3 className="text-center">Share</h3>
            <div
                className="social-media text-white flex lg:flex-col justify-center items-center gap-y-5 gap-x-5 lg:gap-x-0 ">
                <a
                    href={`https://www.facebook.com/sharer.php?u=${props.url}/`}
                    className="text-gray-500 lg:text-4xl text-3xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                    target="__blank"
                    aria-label="facebook"
                >
                    <FacebookIcon color="inherit" fontSize="inherit"/>
                </a>
                <a
                    href="https://twitter.com/vikashkrpal"
                    className="text-gray-500 lg:text-4xl text-3xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                    target="__blank"
                    aria-label="twitter"
                >
                    <TwitterIcon color="inherit" fontSize="inherit"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/vikashkrpal/"
                    className="text-gray-500 lg:text-4xl text-3xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                    target="__blank"
                    aria-label="linkedin"
                >
                    <LinkedInIcon color="inherit" fontSize="inherit"/>
                </a>
                <a
                    href="https://www.instagram.com/vikashkrpal/"
                    className="text-gray-500 lg:text-4xl text-3xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                    target="__blank"
                    aria-label="instagram"
                >
                    <InstagramIcon color="inherit" fontSize="inherit"/>
                </a>
            </div>
        </section>
    );
}
