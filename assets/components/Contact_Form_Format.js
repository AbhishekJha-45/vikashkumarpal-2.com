import Image from "next/image";
import slack from "../Images/slack.png";
import location from "../Images/location.png";
import mail from "../Images/mail.png";
import {useState} from "react";
// import { useRouter } from "next/navigation";
export default function Contact_Form_Format(props) {
    // const navigation = useRouter();
    // const [user, setUser] = useState({
    //   name: "",
    //   email: "",
    //   website: "",
    //   businessName: "",
    //   service: "",
    //   message: "",
    // });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);

    // function handleChange(e) {
    //   const name = e.target.name;
    //   const value = e.target.value;

    //   setUser((prevUser) => ({ ...prevUser, [name]: value }));
    //   console.log(user);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                name,
                email,
                website,
                businessName,
                service,
                message,
            }),
        });
        const {msg} = await res.json();
        setError(msg);
        console.log(error);

        // navigation.push("/thank-you/");
    };
    return (
        <div className="lg:grid grid-cols-2 lg:gap-x-3 ">
            {/* contact.js form div */}
            <form
                className="flex-wrap  py-10 rounded-md lg:px-5"
                aria-label="contact form"
                name="contact form"
                style={{boxShadow: "0 0 2px grey"}}
                onSubmit={handleSubmit}
            >
                <h2 className="font-semibold pb-5 ml-3 lg:mx-5">Contact Us</h2>
                <p
                    className="mx-3 lg:mx-5"
                    style={{
                        color: "#4b5563",
                        margin: "0 0.75rem",
                    }}
                >
                    Have a question? Need help? Don't hesitate, drop me a message
                </p>

                <div className="mx-3 mt-5 lg:mt-2  py-5">
                    <div className="lg:flex lg:gap-x-2 flex-wrap xl:flex-nowrap">
                        <input
                            type={props.type1}
                            required="true"
                            className="w-full  h-10 rounded-md px-3 mb-2  text-lg input-contact"
                            placeholder={props.ip1placeholder}
                            value={name}
                            name="name"
                            // onChange={handleChange}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <input
                            type={true}
                            className="w-full h-10 rounded-md px-3 mb-2  text-lg input-contact"
                            required={props.required2}
                            placeholder={props.ip2placeholder}
                            value={email}
                            name="email"
                            // onChange={handleChange}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>

                    {/* <input
            type={props.type3}
            required={props.required3}
            placeholder={props.ip3placeholder}
            className="w-full h-10 rounded-md px-3 mb-2 col-span-3  text-lg"
          /> */}
                    <input
                        type={props.type4}
                        required="true"
                        placeholder={props.ip4placeholder}
                        className="w-full h-10 rounded-md px-3 mb-2  text-lg input-contact"
                        value={website}
                        name="website"
                        // onChange={handleChange}
                        onChange={(e) => {
                            setWebsite(e.target.value);
                        }}
                    />
                    <input
                        type={props.type5}
                        placeholder={props.ip5placeholder}
                        className="w-full h-10 rounded-md px-3 mb-2  text-lg input-contact"
                        value={businessName}
                        name="businessName"
                        onChange={(e) => {
                            setBusinessName(e.target.value);
                        }}
                    />
                    <select
                        id="Services"
                        className="service w-full h-10 rounded-md px-3 mb-2 bg-white  text-lg text-gray-500"
                        style={{border: "1px solid grey"}}
                        required
                        name="service"
                        label="service"
                        value={service}
                        onChange={(e) => {
                            setService(e.target.value);
                        }}
                    >
                        <option value="services" className="hidden">
                            Select a Service*
                        </option>
                        <option value="Seo Consulting" className="text-black">
                            Seo Consulting
                        </option>
                        <option className="text-black" value="Seo services">
                            Seo Services
                        </option>
                        <option className="text-black" value="Local Seo">
                            Local Seo
                        </option>
                        <option className="text-black" value="Seo Audit">
                            Seo Audit
                        </option>
                        <option className="text-black" value="Technical Seo">
                            Technical Seo
                        </option>
                        <option className="text-black" value="Keyword Research">
                            Keyword Research
                        </option>
                        <option className="text-black" value="Ecommerce Seo">
                            Ecommerce Seo
                        </option>
                        <option className="text-black" value="Wordpress Seo">
                            Wordpress Seo
                        </option>
                        <option className="text-black" value="Wix Seo">
                            Wix Seo
                        </option>
                        <option className="text-black" value="Seo services">
                            Squarespace Seo
                        </option>
                    </select>

                    <textarea
                        name="message"
                        required="true"
                        className="w-full h-auto rounded-md px-3 mb-2 pt-3  text-lg input-contact"
                        id="contact-form-textarea"
                        placeholder={props.ip7placeholder}
                        cols="30"
                        rows="5"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    ></textarea>
                </div>
                {/* <Button
          btnTxt="Send Message"
          path="contact.js"
          className="ml-3 text-white"
          
        /> */}

                {/* <Link href="/contact.js rounded-full text-white" style={{background:'var(--green)'}}> */}
                <button
                    type="submit"
                    className="text-white p-3 ml-2"
                    style={{background: "var(--green)", border: "2px double #ffce4f"}}
                    onClick={handleSubmit}
                >
                    Send Message
                </button>
                {/* </Link> */}
            </form>
            {/* sidebar right */}
            <div
                className="py-10 rounded-md mt-3 lg:mt-0 lg:px-5 lg:flex flex-col"
                style={{boxShadow: "0 0 2px grey"}}
            >
                <h2 className=" font-semibold pb-5 mx-3">Information</h2>
                <p
                    className=" mx-3"
                    style={{
                        color: "#4b5563",
                        margin: "0 0.75rem",
                    }}
                >
                    Have a project in mind? Let's talk. Looking forward to discussing your
                    next big idea!
                </p>

                <div className="container-informations mt-10 ml-3 lg:ml-4 flex flex-col lg:gap-y-7 gap-y-5">
                    <div className="flex gap-x-3">
                        <Image
                            src={slack}
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                        <div className="slack">
                            <h4 className="text-xl">Slack</h4>
                            <a
                                href="https://vikashkumarpal.slack.com/"
                                target="__blank"
                                aria-label="slack link"
                            >
                                https://vikashkumarpal.slack.com/
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-x-3">
                        <Image
                            src={location}
                            width={28}
                            height={28}
                            className="object-contain"
                        />
                        <div className="text-xl">
                            <h4>Location</h4>
                            <address style={{fontSize: "16px"}}>New Delhi ,India</address>
                        </div>
                    </div>
                    <div className="flex gap-x-3">
                        <Image
                            src={mail}
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                        <div className="slack">
                            <h4 className="text-xl">Email</h4>
                            <a
                                href="mailto:hello@vikashkumarpal.com"
                                target="__blank"
                                aria-label="slack link"
                            >
                                hello@vikashkumarpal.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
