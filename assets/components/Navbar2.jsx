import {useState} from "react";
import logo from "@Images/logo-latest.png";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import "@styles/navbar.module.css";
import Link from "next/link";

export default function Navbar2() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar lg:flex justify-evenly  xl:px-16 items-center fixed w-full z-50 navbar-container">
            <Link href={"/"}>
                <Image
                    src={logo}
                    width={152}
                    priority={true}
                    height={47}
                    placeholder="blur"
                    className="object-contain logo-website z-50 px-5"
                />
            </Link>
            <Link
                href="/"
                className="text-xs absolute right-16 lg:hidden p-2 rounded-md"
                style={{background: "var(--green)", color: "white"}}
            >
                Book a Strategy Call
            </Link>
            <ul
                className={`${
                    isMobile ? "nav-links-mobile" : "nav-links"
                } flex justify-around items-center lg:gap-x-5`}
            >
                <li onClick={() => setIsMobile(!isMobile)}>
                    <Link href={"/about"}>About Me</Link>
                </li>
                <li className="navbar-dropdown">
                    <Link href={"/services"}>Services</Link>
                    <ul className="dropdown-menu">
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/ecommerce-seo"}>E Commerce Seo</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/keyword-research"}>Keyword Research</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/local-seo"}>Local Seo</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/seo-consulting"}>Seo Consulting</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/wix-seo"}>Wix Seo</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/squaresapce-seo"}>Squarespace Seo</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/technical-seo"}>Technical Seo</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/seo-audit"}>Seo Audit</Link>
                        </li>
                        <li onClick={() => setIsMobile(!isMobile)}>
                            <Link href={"/services/seo-services"}>Seo Services</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={"/services/seo-consulting"}>Seo Consulting</Link>
                </li>
                <li>
                    <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link href={"/case-study"}>Case Study</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link href={"/[blog].js"}>Blog</Link>
                </li>
            </ul>

            <button
                className="mobile-menu-icon absolute right-0 mr-5 lg:hidden"
                aria-label="menu button for mobile view"
                onClick={() => {
                    setIsMobile(!isMobile);
                }}
            >
                {isMobile ? (
                    <CloseIcon/>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-bg dark:fill-gray-800"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        style={{
                            border: "1px solid black",
                            padding: "5px",
                            borderRadius: "50%",
                        }}
                        fill="none"
                    >
                        <path
                            opacity=".4"
                            d="M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2ZM7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z"
                            fill="curentColor"
                        ></path>
                        <path
                            d="M6.29 10.58a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58ZM17.71 22.002a4.29 4.29 0 1 0 0-8.58 4.29 4.29 0 0 0 0 8.58Z"
                            fill="curentColor"
                        ></path>
                    </svg>
                )}
            </button>
            <button
                className="px-2 py-2 rounded-md lg:inline-block hidden"
                style={{background: "var(--green)", border: "2px double #ffce4f"}}
            >
                <Link href={"/contact"} style={{fontSize: "14px", color: "white"}}>
                    Book a Strategy Call
                </Link>
            </button>
        </nav>
    );
}