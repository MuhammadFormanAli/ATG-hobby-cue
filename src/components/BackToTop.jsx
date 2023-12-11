import React, { useState } from 'react';

const BackToTop = () => {


    const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(true);

    // Reset the state after 2 seconds (adjust the time as needed)
    setTimeout(() => {
      setIsPressed(false);
    }, 500);
  };
 

    return (
        <div className=" m-1 p-1 p-md-3 m-md-3 m-lg-5 p-lg-5 c-container mx-auto">
        <div className="d-flex flex-column justify-content-center align-items-center position-fixed bottom-0  end-0 me-5 ">
            <div className={` rounded-circle  ${isPressed?'bg-lilac':'bg-light'}`}>
            <img
            className='p-2 shadow border-lilac rounded-circle '
            src="/public/arrow_forward.png"
            alt=""
            onClick={handleButtonClick}
          />
            </div>
          
          <p className="fw-bold text-black">Go to top</p>
        </div>
      </div>
    );
};

export default BackToTop;