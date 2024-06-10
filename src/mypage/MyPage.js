import React, { useEffect } from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function MyPage(props) {
    // Login 상태가 아니면 main page로 navigate
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogin) navigate("/");
    },[])

    const isLogin = useStore((state) => state.isLogin);
    return (
        <div className='container'>
            
        </div>
    );
}

export default MyPage;