import React, { useContext } from "react";
import {
  Dropdown,
} from "react-bootstrap";
import { PopUpContext } from "../context/Context";
import { Link } from "react-router-dom";

const NavigationBar = () => {

  const {handleSignInShow}=useContext(PopUpContext)
  return (
    <div className='className="m-1 p-2 px-md-3 mx-md-3 mx-lg-5 px-lg-5 d-flex align-items-center justify-content-between'>
    <div className="w-25">
    <Link className=" m-0 p-0" to='/'>
     <img
        className="d-none d-lg-block w-50"
        src="/public/HobbyCue Logo.png"
        alt=""
      />
     </Link>
      
      <Link to='/'><img className=" d-lg-none" src="/public/HobbyCue Logo v2 1.png" alt="" /></Link>
    </div>

      <div className=" d-none d-lg-block align-items-center justify-content-center ">
        <input
          className="py-1   border-lilac ps-2 rounded-start-2 fs-12 fw-bold "
          type="text"
          placeholder="Email ID"
        />
        <button className=" pb-1 bg-lilac rounded-start-0 rounded-end-2 text-light fw-bold border-0">
          <img className="" src="/public/icons8_search 1.png" alt="" />
        </button>
      </div>

      <div className="d-flex align-items-center fw-semibold text-lilac fs-14">
        <div className="d-none d-lg-flex align-items-center ">
          <img src="/public/Explore.png" alt="" />
          <p className="m-0">Explore</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-none d-lg-flex align-items-center">
          <img src="/public/Hobbies.png" alt="" />
          <p className="m-0">Hobbies</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="d-none d-lg-flex gap-2">
        <img src="/public/bookmark.png" alt="" />
        <img src="/public/notifications.png" alt="" />
        <img src="/public/Product 3.png" alt="" />
      </div>

      <div>
        <button onClick={()=>{handleSignInShow(true)}} className=" d-none d-lg-block border-lilac text-lilac fw-bold rounded p-2 px-3">
          Sign In
        </button>
      </div>

      <div className="d-flex gap-4 d-lg-none ">
        <img src="/public/icons8_search 2.png" alt="" />
        <img src="/public/notifications.png" alt="" />
        <img onClick={()=>{handleSignInShow(true)}} src="/public/menu_icon.png" alt="" />
      </div>
    </div>
  );
};

export default NavigationBar;
