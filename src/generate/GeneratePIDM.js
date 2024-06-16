import React, { useEffect } from 'react';
import GenerateImage from './GenerateImage';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

const GeneratePIDM = () => {
    const navigate = useNavigate();
    const inSubscribed = useStore((state) => state.inSubscribed)
    useEffect(()=>{
        if (!inSubscribed) {
            window.alert("권한이 없습니다. 관리자에게 문의하세요.")
            navigate("/")
            return;
        }
    })
    return (
        <div>
            <div className="bg-gradient-to-r from-pink-300 to-purple-400 rounded-xl shadow-md m-5 p-4">advanced pro version</div>
            <GenerateImage />
        </div>
    );
};

export default GeneratePIDM;