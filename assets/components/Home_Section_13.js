import ButtonGreen from "./ButtonGreen";
import styles from "@styles/newsletter.module.css";

export default function Home_Section_13() {
    return (
        <section className={`py-14 px-3 relative overflow-hidden ${styles.newsletter}`}>
            <h2 className="text-center z-10 ">Subscribe to our Newsletter</h2>
            <div className="flex lg:flex-row flex-col justify-center mt-10 lg:gap-x-5 gap-y-5">
                <input
                    type="email"
                    name="email"
                    aria-label="email field"
                    placeholder="Enter Your Email Id"
                    className="lg:w-1/3 shadow-home rounded-md lg:text-xl text-base pl-10 h-12 lg:h-auto z-10"
                />
                <ButtonGreen btnTxt="Subscribe Now" path="/" className="z-10"/>
            </div>
        </section>
    );
}