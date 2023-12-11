import React from 'react';

const EmailAndPassWordSignIn = () => {
    return (
        <div>
            <input className=' fw-bold border rounded-3 w-100 p-3' type="text" placeholder='Email' />
            <div className='position-relative w-100 '>
            <img className='position-absolute top-50 end-0 me-3 ' src="/public/eye.png" alt="" />
            <input className=' mt-3 fw-bold border rounded-3 w-100 p-3' type="text" placeholder='Password' />
            </div>
        </div>
    );
};

export default EmailAndPassWordSignIn;