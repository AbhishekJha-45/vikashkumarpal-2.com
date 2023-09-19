import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const CardCarousel = ({cards}) => {
    const [start, setStart] = useState(0);
    const [offset, setOffset] = useState(0);

    const prevCards = () => {
        setStart((prevStart) => Math.max(0, prevStart - 1));
    };

    const nextCards = () => {
        setStart((prevStart) => Math.min(cards.length - 5, prevStart + 1));
    };

    useEffect(() => {
        const updateOffset = () => {
            setOffset(window.innerWidth > 768 ? 5 : 1);
        };

        // Initial call to set the offset
        updateOffset();

        // Add event listener to update offset on window resize
        window.addEventListener('resize', updateOffset);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateOffset);
        };
    }, []);

    return (
        <div className="relative w-full lg:pxp-0 px-3 py-14 " style={{background: 'var(--yellow)'}}>
            <span className='flex justify-center items-center'>TESTMONIALS</span>
            <h2>What our Client’s Say’s</h2>
            <div className="flex space-x-4 overflow-x-auto justify-center lg:py-10">
                {cards.slice(start, start + offset).map((card, index) => (
                    <div
                        key={index}
                        className="w-full md:w-80 bg-white shadow-home py-10 flex flex-col justify-center items-center "
                    >
                        {/* Your card content */}
                        <Image
                            src="https://admin.vikashkumarpal.com/wp-content/uploads/2023/09/what-are-keywords-the-role-of-keywords-in-on-page-seo.png"
                            width={80}
                            height={80}
                            alt="something is here"
                            className="rounded-full"
                        />
                        <h2 className="text-lg font-semibold py-3">{card.title}</h2>
                        <p className="text-gray-600 text-center" style={{margin: '0', padding: '0 1rem'}}>
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <button onClick={prevCards} className="p-2">
                    <ArrowCircleLeftIcon fontSize={'large'}/>
                </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button onClick={nextCards} className="p-2">
                    <ArrowCircleRightIcon fontSize={'large'} color={'inherit'}/>
                </button>
            </div>
        </div>
    );
};

export default CardCarousel;
