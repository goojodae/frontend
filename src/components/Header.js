import React from 'react';
import hambuger from "../asset/hambuger.png";
import useStore from '../store';

function Header(props) {
    const activeMenu = useStore((state) => state.activeMenu)
    const setActiveMenu = useStore((state) => state.setActiveMenu)
    const isLogin = useStore((state) => state.isLogin)

    return (
        <header className="flex flex-row justify-between h-26 bg-header-blue items-center">
            <a href='/'>
                <div className="m-3 ml-4 font-Outfit text-3xl align-middle">Posetive</div>
            </a>
            <div onClick={setActiveMenu} className=''>
                <img src={hambuger} alt="menu" className='w-8 h-8 m-4 mr-4'/>  
                {isLogin?
                <div className={`flex flex-col text-center justify-items-center bg-yellow z-50 absolute right-0 border-darkblue border-2 border-solid ${activeMenu? "" : "hidden"}`}>
                    <a href='/' className='w-44 h-14 text-xl border-darkblue border-b-2 border-solid content-center'>
                        <div>Home</div>
                    </a>
                    <a href='/login' className='w-50 h-14 text-xl border-darkblue border-b-2 border-solid content-center'>
                        <div>My Page</div>
                    </a>
                    <a href='/signup' className='w-50 h-14 text-xl content-center'>
                        <div>Logout</div>
                        </a>
                </div> :
                <div className={`flex flex-col text-center justify-items-center bg-yellow z-50 absolute right-0 border-darkblue border-2 border-solid ${activeMenu? "" : "hidden"}`}>
                    <a href='/' className='w-44 h-14 text-xl border-darkblue border-b-2 border-solid content-center'>
                        <div>Home</div>
                    </a>
                    <a href='/login' className='w-50 h-14 text-xl border-darkblue border-b-2 border-solid content-center'>
                        <div>Login</div>
                    </a>
                    <a href='/signup' className='w-50 h-14 text-xl content-center'>
                        <div>SignUp</div>
                        </a>
                </div>
                }     
            </div>
        </header>
    );
}

export default Header;