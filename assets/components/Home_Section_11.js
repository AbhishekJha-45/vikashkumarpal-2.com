import Contact_Form_Template from "./Contact_Form_Format";

export default function Home_Section_11() {
    return (
        <div className="container-home py-14 px-3 ">
            <h2 className="text-center pb-14">Let’s work together</h2>
            <Contact_Form_Template
                required1={true}
                ip1placeholder="Enter Your Name*"
                type1="text"
                required2={true}
                ip2placeholder="your@email.com*"
                type2="email"
                required3={false}
                ip3placeholder="Enter Your Contact Number"
                type3="number"
                required4={false}
                ip4placeholder="yoursite.com*"
                type4="text"
                required5={false}
                ip5placeholder="Enter Your Business Name"
                type5="text"
                required6={true}
                ip6placeholder="Select a Service*"
                type6="text"
                required7={true}
                ip7placeholder="Tell me about your site, project requirements and when you'd like to start.*"
                type7="text"
            />
        </div>
    );
}
