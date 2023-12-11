import React from 'react';

const SocialSignIn = () => {
    return (
        <div className='mt-4 pt-4'>
            <div className='position-relative text-center fw-bold border-lilac rounded-3 '>
                <img className='position-absolute top-0 mt-3 ms-3 pt-1 start-0' src="/public/google.png" alt="" />
                <p className='m-0 p-3'>Continue With Google</p>
            </div>
            <div className='position-relative text-center fw-bold border-lilac rounded-3 mt-3'>
                <img className='position-absolute top-0 mt-3 ms-3 pt-1 start-0' src="/public/Facebook.png" alt="" />
                <p className='m-0 p-3'>Continue With Facebook</p>
            </div>
        </div>
    );
};

export default SocialSignIn;