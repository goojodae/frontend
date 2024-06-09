import React from 'react';

function Footer(props) {
    return (
        <div className='flex flex-col border-t-2 border-black border-solid'>
            <div className="font-Outfit text-2xl ml-4 mt-9">9jodae</div>
            <a href='https://github.com/goojodae' className='ml-4 mt-4 text-sm'>github</a>
            <div className='ml-4 text-sm'>members</div>
            <div className='text-right m-4 text-sm'>Copyrightⓒ 2024, by 9jodae </div>
        </div>
    );
}

export default Footer;