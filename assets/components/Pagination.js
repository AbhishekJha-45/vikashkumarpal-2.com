"use client";

import {useState} from "react";

export default function Pagination() {
    //   const [lastpage, setLastPage] = useState(10);
    const [first, setFirst] = useState(1);
    const [second, setSecond] = useState(2);
    const [third, setThird] = useState(3);
    const [fourth, setFourth] = useState(4);
    const [fifth, setFifth] = useState(5);
    const [sixth, setSixth] = useState("...");
    const [seventh, setSeventh] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);

    const nextButton = () => {
        setFirst(first + 7);
        setSecond(second + 7);
        setThird(third + 7);
        setFourth(fourth + 7);
        setFifth(fifth + 7);
        setSeventh(seventh + 7);
    };

    const previousButton = () => {
        if (first - 7 > 0) {
            setFirst(first - 7);
            setSecond(second - 7);
            setThird(third - 7);
            setFourth(fourth - 7);
            setFifth(fifth - 7);
            setSeventh(seventh - 7);
        }
    };
    return (
        <div className="container-services flex justify-center lg:gap-x-3 gap-x-2  pb-10">
            <button className="   btn-pagination" onClick={previousButton} active>
                &lt;
            </button>
            <button
                className="   btn-pagination"
                active
                onClick={() => {
                    setCurrentPage(first);
                }}
            >
                {first}
            </button>
            <button
                className="   btn-pagination"
                active
                onClick={() => {
                    setCurrentPage(second);
                }}
            >
                {second}
            </button>
            <button
                className="   btn-pagination"
                active
                onClick={() => {
                    setCurrentPage(third);
                }}
            >
                {third}
            </button>
            <button
                className="  text-center  btn-pagination"
                active
                onClick={() => {
                    setCurrentPage(fourth);
                }}
            >
                {fourth}
            </button>
            <button
                className="  text-center  btn-pagination"
                active
                onClick={() => {
                    setCurrentPage(fifth);
                }}
            >
                {fifth}
            </button>
            <button
                className="  lg:inline-block hidden btn-pagination"
                disabled="true"
            >
                {sixth}
            </button>

            <button
                className="  ptext-centery-1  btn-pagination"
                active
                onClick={() => {
                    setCurrentPage(seventh);
                }}
            >
                {seventh}
            </button>

            <button className="  p-2 btn-pagination" active onClick={nextButton}>
                &gt;
            </button>
        </div>
    );
}
