"use client";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, {useState} from "react";

const FaqComponent = () => {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleItem = (index) => {
        const expandedIndex = expandedItems.indexOf(index);
        let newExpandedItems = [...expandedItems];

        if (expandedIndex !== -1) {
            newExpandedItems.splice(expandedIndex, 1);
        } else {
            newExpandedItems = [...expandedItems, index];
        }

        setExpandedItems(newExpandedItems);
    };

    const isItemExpanded = (index) => expandedItems.includes(index);

    const faqItems = [
        {
            question: "What are SEO consulting services?",
            answer: "Answer to question 1.",
        },
        {
            question: "How SEO consulting services can help my business grow?",
            answer: "Answer to question 2.",
        },
        {
            question: "What does an SEO consultant do?",
            answer: "Answer to question 3.",
        },
        {
            question: "Are SEO consultants worth it?",
            answer: "Answer to question 3.",
        },
        {
            question:
                "What are the advantages of an SEO Consultant for your website?",
            answer: "Answer to question 3.",
        },
        {
            question:
                "How can I choose the right SEO consulting service for my business needs?",
            answer: "Answer to question 3.",
        },
        // Add more FAQ items as needed
    ];

    return (
        <section className="faq-section container-services lg:py-14 pt-10 flex flex-col justify-center items-center">
            <h2 className="lg:text-center pb-5 lg:pb-10">Frequently Asked Questions</h2>

            {faqItems.map((item, index) => (
                <div
                    className="faq-item lg:px-10 lg:w-4/6 w-full"
                    style={{borderBottom: "2px solid black"}}
                    key={index}
                >
                    <h4
                        className={`faq-toggle flex justify-between items-center py-3 ${
                            isItemExpanded(index) ? "expanded" : ""
                        }`}
                        onClick={() => toggleItem(index)}
                    >
                        {item.question}
                        <span className="plus-icon text-xl">
              {isItemExpanded(index) ? <RemoveIcon/> : <AddIcon/>}
            </span>
                    </h4>
                    {isItemExpanded(index) && (
                        <p
                            className="faq-answer text-lg"
                            style={{margin: "0", padding: "0.75rem 0"}}
                        >
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
};

export default FaqComponent;
