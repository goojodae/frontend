import React from 'react';
import ballon from "../asset/ballon.png"
import karina from "../asset/karina.jpg"

const Tooltip = ({activeTooltip}) => {
    const bg = {
        backgroundImage: `url(${ballon})`
    }
    return (
        <div className='relative'>
            {activeTooltip ? 
            <div className='absolute bg-no-repeat bg-cover w-tooltip h-tooltip flex flex-col justify-center items-center mt-2' style={bg}>
                <img src={karina} alt='example image' className='w-44'></img>
                <div className='mt-3 text-xl'>이런 사진이 좋아요</div>
                <ol className=''>
                    <li className=''>1. 전신 사진</li>
                    <li>2. 한 명만 나온 사진</li>
                    <li>3. 배경이 필요한 사진</li>
                </ol>
            </div>
            : <></>}
        </div>
    );
};

export default Tooltip;