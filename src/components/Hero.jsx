import React from "react";
import Register from "./Register/Register";
import { Col, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="m-1 p-1 p-md-3 m-md-3 m-lg-5 p-lg-5">
      <Row className="p-4 border rounded d-flex flex-column flex-md-row">

        <Col className="pe-1 pe-md-3 pe-lg-5" lg={7}>
          <p className="my-2 fs-4 fw-semibold fst-italic">
            Explore your <span className="text-lilac">hobby </span>, or
            <span className="text-info"> passion...</span>
          </p>
          <p className="mt-3 mt-lg-4">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className=" d-none d-lg-block mb-5">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>

          <span className=" d-none d-lg-flex justify-content-center align-content-around mt-5 ">
            <img className="d-block w-50" src="/public/objects 1 .png" alt="" />
            <img className="d-block w-50" src="/public/objects2.png" alt="" />
          </span>
        </Col>


        <Col className="pe-1 pe-md-3 pe-lg-4" lg={5}>
            {/* Sign in Part  */}
            <Register />
            <span className=" d-flex d-lg-none justify-content-center align-content-around mt-5 ">
            <img className="d-block w-50" src="/public/objects 1 .png" alt="" />
            <img className="d-block w-50" src="/public/objects2.png" alt="" />
          </span>

        </Col>


      </Row>
    </div>
  );
};

export default Hero;
