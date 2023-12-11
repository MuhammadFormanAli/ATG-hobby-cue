import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import { MdEventAvailable, MdGroups2,MdShoppingBasket } from "react-icons/md";
import { MdPlace } from "react-icons/md";

const AddListing = () => {
    return (
        <div className='c-container mx-auto'>


<NavigationBar />
        
        <div className="m-1 p-1 p-md-3 m-md-3 m-lg-5 p-lg-5">
        <div className="d-flex align-items-center py-4 justify-content-center">
              <img src="/public/Add.png" alt="" />
              <p className="m-0 ps-2 fw-semibold">Add your Listing</p>
            </div>
            
        <Row className="">
          <Col id='people' md={6} className="">
            <div  className="border-lilac p-4 rounded mb-4 mb-md-0 ">
              <div className="d-flex align-items-center">
              <MdGroups2 className='fw-bold fs-3' />
                <p className="m-0 ps-2 fw-semibold ">People</p>
              </div>
              <p>
                {" "}
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              
            </div>
          </Col>
  
  
          <Col id='place' md={6} className="">
            <div className="border border-success p-4 rounded ">
              <div className="d-flex align-items-center">
              <MdPlace  className='fw-bold fs-3'/>
                <p className="m-0 ps-2 fw-semibold">Place</p>
              </div>
              <p>
                {" "}
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
             
            </div>
          </Col>
  
  
        </Row>
  
        <Row className="mt-4">
          <Col id='product' md={6} className="">
            <div className="border border-warning p-4 rounded ">
              <div className="d-flex align-items-center">
              <MdShoppingBasket className='fw-bold fs-3' />
                <p className="m-0 ps-2 fw-semibold">Product</p>
              </div>
              <p>
                {" "}
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              
            </div>
          </Col>
  
  
          <Col id='program' md={6} className="mt-4 m-md-0">
            <div className="border border-info p-4 rounded ">
              <div className="d-flex align-items-center ">
               

               <MdEventAvailable className='fw-bold fs-3'/>
                <p className="m-0 ps-2 fw-semibold ">Program</p>
              
              </div>
              <p>
                {" "}
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
     
            </div>
          </Col>
        </Row>
      </div>
      </div>
    );
};

export default AddListing;