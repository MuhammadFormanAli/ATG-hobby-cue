import React, { useContext } from 'react';
import { PopUpContext } from '../context/Context';
import { Modal } from 'react-bootstrap';
import Register from './Register/Register';

const SignInWithPopup = () => {
    const {showSignIn,handleSignInShow}=useContext(PopUpContext)

    return (
            <>
    <Modal
      show={showSignIn}
      onHide={() => handleSignInShow(false)}
      backdrop="primary"
      keyboard={false}
      className='m-0 p-0'
      
    >
      <Modal.Header  closeButton >
          <img src="/public/HobbyCue Logo v2 1.png" alt="logo" />
      </Modal.Header>
      <Modal.Body >
        <Register />
      </Modal.Body>
    </Modal>
  </>
    );
};

export default SignInWithPopup;