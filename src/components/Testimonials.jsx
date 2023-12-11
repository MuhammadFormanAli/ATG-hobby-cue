import React from "react";

const Testimonials = () => {
  return (
    <div style={{backgroundColor:'#f7f5f9'}} className="m-1 p-1 p-md-3 m-md-3 m-lg-5 p-lg-5">
      <div className=" p-4">
        <div className="d-flex align-items-center my-3">
          <img src="/public/quote.png" alt="" />
          <p className="m-0 ps-2 fw-bold fs-4">Testimonials</p>
        </div>
        <p className="">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <div>{/* div for player */}</div>

          <div className="d-flex align-items-center">
            <img className="" src="/public/user1.png" alt="" />
            <div className="ps-3">
            <p className="m-0 fw-bold fs-5">Shubha Nagarajan</p>
            <p className="m-0 text-info">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
