"use client";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import {useState} from "react";

export default function Rating(props) {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleClick = (buttonId) => {
        setSelectedButton(buttonId);
    };
    const buttonData = [
        {
            color: "text-red-600",
            label: <SentimentVeryDissatisfiedIcon fontSize="inherit"/>,
        },
        {
            color: "text-red-400",
            label: <SentimentDissatisfiedIcon fontSize="inherit"/>,
        },
        {
            color: "text-green-300",
            label: <SentimentSatisfiedIcon fontSize="inherit"/>,
        },
        {
            color: "text-green-400",
            label: <SentimentSatisfiedAltIcon fontSize="inherit"/>,
        },
        {
            color: "text-green-600",
            label: <SentimentVerySatisfiedIcon fontSize="inherit"/>,
        },
    ];

    const prevRating = props.rating;
    const updateRating = async (rating) => {
        const url = `http://localhost:5000/rating/${props.post_url}?rating=${
            prevRating + rating + 1
        }`;
        try {
            const response = await fetch(url, {
                method: "PUT",
            });

            if (response.ok) {
                console.log("Rating updated successfully");
            } else {
                console.error("Failed to update rating");
            }
        } catch (error) {
            console.error(error);
        }
    };
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <div className="flex lg:gap-x-4 gap-x-2 gap-y-3">
                {buttonData.map((star, index) => {
                    return (
                        <button
                            className={`rating-icon text-6xl hover:${star.color} ${
                                selectedButton === index ? star.color : ""
                            }`}
                            key={index}
                            onClick={() => {
                                handleClick(index);
                                updateRating(index);
                                setIsClicked(true);
                            }}
                        >
                            {star.label}
                        </button>
                    );
                })}
            </div>
            {isClicked && (
                <span>
          {props.displayRating} / 5 Based on {props.totalRatings} Reviews
        </span>
            )}
        </>
    );
}
