import React, {useState} from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordion = ({post}) => {
    const data = post;
    const liRegex = /<li>(.*?)<\/li>/g;
    const listItems = [];
    let match;
    while ((match = liRegex.exec(data)) !== null) {
        listItems.push(match[1]);
    }
    const [openSection, setOpenSection] = useState(false);


    return (
        <div className="accordion lg:hidden py-3 bg-gray-100">
            <>
                <button
                    // key={index}
                    className="w-full text-left p-2 focus:outline-none focus:bg-gray-100 text-black flex  justify-between"
                    onClick={() => setOpenSection(!openSection)}
                >
                    Table of Contents
                    {openSection === true ? (<ArrowDropDownIcon/>) : (<ArrowRightIcon/>)}
                </button>
                {openSection === true && (listItems.map((item, index) => {
                    return (<p key={index} className='pl-2'>
                        {item}
                    </p>)
                }))}
            </>
        </div>
    );
};

export default Accordion;