import React from 'react';
import hambuger from "../asset/hambuger.png";

function Header(props) {
    return (
        <header className="flex flex-row justify-between h-26 bg-header-blue items-center">
            <div className="m-3 ml-4 font-Outfit-regular text-3xl align-middle">Posetive</div>
            <img src={hambuger} alt="menu" className='w-8 h-8 m-4 mr-4'/>       
        </header>
    );
}

export default Header;