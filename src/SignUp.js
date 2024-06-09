import React from 'react';

function SignUp(props) {
    return (
        <div className='container mx-auto px-4 flex flex-col pt-24 items-center h-screen w-full'>
            <h1 className='font-Outfit text-3xl font-medium'>Sign Up</h1>
            <div className='flex flex-col m-6'>
                <input type='email' name='id' className='bg-login-input border-solid border-b-2 border-darkblue w-60 h-12 p-3' placeholder='아이디'></input>
                <input type='password' name='password' className='bg-login-input border-soild border-b-2 border-darkblue w-60 h-12 mt-3 p-3' placeholder='비밀번호'></input>
                <input type='password-confirm' name='password' className='bg-login-input border-soild border-b-2 border-darkblue w-60 h-12 mt-3 p-3' placeholder='비밀번호 확인'></input>
            </div>
            <input type='submit' name='signup' value='회원가입' className='bg-darkblue2 h-12 w-60 text-greenblue' ></input>
            <div className='flex flex-row justify-around mt-24 w-60'>
                <a href='/login' className='text-darkblue text-sm'>로그인</a>
                <a href='/findpwd' className='text-darkblue text-sm'>비밀번호 찾기</a>
            </div>
        </div>
    );
}

export default SignUp;