import Link from "next/link";
import styles from "@styles/general.module.css"
export default function Button() {
    return (
        <Link
            href="/"
            className={`rounded-full text-white p-2 text-sm my-7 ${styles.btn}`}
        >
            <button>Learn More</button>
        </Link>
    )
}