"use client";
// import "../styles/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../Images/logo-latest.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer2() {
    return (
        <footer className="border-y-2  py-3 lg:py-2 ">
            <div
                className="footer-container-new flex lg:flex-row flex-col justify-around lg:justify-between items-center lg:px-28 bg-white ">
                <div>
                    <Image
                        src={logo}
                        width={152}
                        height={47}
                        alt="website Logo"
                        draggable="false"
                        className="h-10 w-auto"
                    />
                </div>
                <div className="items-footer mx-5 lg:mx-0">
                    <ul className="flex items-center flex-wrap justify-center gap-x-2 lg:gap-x-5  my-5 lg:my-0 gap-y-2 list-none">
                        <Link
                            href={"/about"}
                            className="  text-gray-500 hover:text-blue-600 transition-all duration-300 ease-linear"
                        >
                            <li>About</li>
                        </Link>
                        <Link
                            href={"/services"}
                            className="  text-gray-500 hover:text-blue-600 transition-all duration-300 ease-linear"
                        >
                            <li>Services</li>
                        </Link>
                        <Link
                            href={"services/seo-consulting"}
                            className="  text-gray-500 hover:text-blue-600 transition-all duration-300 ease-linear"
                        >
                            <li>Consulting</li>
                        </Link>
                        <Link
                            href={"/portfolio"}
                            className="  text-gray-500 hover:text-blue-600 transition-all duration-300 ease-linear"
                        >
                            <li>Portfolio</li>
                        </Link>
                        <Link
                            href={"/case-study"}
                            className="  text-gray-500 hover:text-blue-600 transition-all duration-300 ease-linear"
                        >
                            <li>Case study</li>
                        </Link>
                        <Link
                            href={"/contact.js"}
                            className="  text-gray-500 hover:text-blue-600 transition-all duration-300 ease-linear"
                        >
                            <li>Contact</li>
                        </Link>
                        <Link
                            href={"/[blog].js"}
                            className="  text-gray-500 hover:text-blue-600 transition-all duration-300 ease-linear"
                        >
                            <li>Blogs</li>
                        </Link>
                    </ul>
                </div>
                <div className="social-media text-white flex lg:gap-x-3 gap-x-3">
                    <a
                        href="https://www.facebook.com/imvikashkrpal"
                        className="text-gray-500 lg:text-2xl text-2xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                        target="__blank"
                        aria-label="facebook"
                    >
                        <FacebookIcon color="inherit" fontSize="inherit"/>
                    </a>
                    <a
                        href="https://twitter.com/vikashkrpal"
                        className="text-gray-500 lg:text-2xl text-2xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                        target="__blank"
                        aria-label="twitter"
                    >
                        <TwitterIcon color="inherit" fontSize="inherit"/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vikashkrpal/"
                        className="text-gray-500 lg:text-2xl text-2xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                        target="__blank"
                        aria-label="linkedin"
                    >
                        <LinkedInIcon color="inherit" fontSize="inherit"/>
                    </a>
                    <a
                        href="https://www.instagram.com/vikashkrpal/"
                        className="text-gray-500 lg:text-2xl text-2xl xl:hover:text-blue-500 transition duration-300 ease-linear"
                        target="__blank"
                        aria-label="instagram"
                    >
                        <InstagramIcon color="inherit" fontSize="inherit"/>
                    </a>
                </div>
            </div>
            <div className="lg:px-36 lg:flex justify-center lg:gap-x-5 mx-3 mt-5 lg:mt-0">
                <p
                    className="text-center text-gray-500 my-0 flex lg:flex-row flex-col lg:gap-x-3"
                    style={{fontSize: "16px"}}
                >
                    © 2023 Vikash Kumar Pal. All rights reserved.
                    <span className="flex gap-x-2 justify-center">
            <Link
                href={"/privacy-policy"}
                className=" text-gray-500 hover:text-blue-700"
            >
              Privacy
            </Link>
            |
            <Link
                href={"/terms-and-conditions"}
                className=" text-gray-500 hover:text-blue-700"
            >
              Terms
            </Link>
          </span>
                </p>
            </div>
        </footer>
    );
}
