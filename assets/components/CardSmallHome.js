import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/homepage.module.css";

export default function CardSmallHome(props) {
    return (
        <div

            className={`${styles.shadow_home} ${styles.services_cards} flex justify-center flex-col items-center  pt-7 hover:text-white`}
            style={{
                minHeight: "489px",
                maxWidth: '500px'
                // boxShadow: "0 0 8px grey",
            }}
        >
            <Image src={props.src} width={110} height={110} alt={props.title} className=""/>
            <h3 className="pt-4 ">{props.title}</h3>
            <p className="text-center" style={{margin: "20px"}}>
                {props.description}
            </p>
            <Link
                href={props.path}
                className="self-end pr-5 relative  text-sm"
                // style={{ color: "black" }}
            >
                <span> Read More <ArrowForwardIcon fontSize="small" color="inherit"/></span>
            </Link>
        </div>
    );
}
