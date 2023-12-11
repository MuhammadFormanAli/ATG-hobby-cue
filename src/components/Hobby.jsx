import { Col, Row } from "react-bootstrap";

const Hobby = () => {
  return (
    <div className="m-1 p-1 p-md-3 m-md-3 m-lg-5 p-lg-5">
      <Row className="">
        <Col md={6} className="">
          <div className="border p-4 rounded mb-4 mb-md-0 ">
            <div className="d-flex align-items-center">
              <img src="/public/groups_black_24dp (1) 1.png" alt="" />
              <p className="m-0 ps-2 fw-semibold ">People</p>
            </div>
            <p>
              {" "}
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="btn fw-medium border-lilac text-lilac">Connect</button>
          </div>
        </Col>


        <Col md={6} className="">
          <div className="border p-4 rounded ">
            <div className="d-flex align-items-center">
              <img src="/public/location_on_black_24dp 1.png" alt="" />
              <p className="m-0 ps-2 fw-semibold">Place</p>
            </div>
            <p>
              {" "}
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="btn fw-medium border-lilac text-lilac">Meet Up</button>
          </div>
        </Col>


      </Row>

      <Row className="mt-4">
        <Col md={6} className="">
          <div className="border p-4 rounded ">
            <div className="d-flex align-items-center">
              <img src="/public/shopping_basket_black_24dp (2) 1.png" alt="" />
              <p className="m-0 ps-2 fw-semibold">Product</p>
            </div>
            <p>
              {" "}
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="btn fw-medium border-lilac text-lilac">Get It</button>
          </div>
        </Col>


        <Col md={6} className="mt-4 m-md-0">
          <div className="border p-4 rounded ">
            <div className="d-flex align-items-center">
              <img src="/public/event_available_black_24dp 2.png" alt="" />
              <p className="m-0 ps-2 fw-semibold">Program</p>
            </div>
            <p>
              {" "}
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="btn fw-medium border-lilac text-lilac">Attend</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hobby;

{
  /*  */
}
