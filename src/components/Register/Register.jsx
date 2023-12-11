import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import SignIn from '../SignIn';
import JoinIn from '../JoinIn';

const Register = () => {
    return (
        <Tabs className="d-flex align-content-center justify-content-center border-0" defaultActiveKey="/signIn" id="my-tabs">
        <Tab className="" eventKey="/signIn" title="Sign In">
          <SignIn />
        </Tab>
        <Tab eventKey="joinIn" title="Join In">
          <JoinIn />
        </Tab>
      </Tabs>
    );
};

export default Register;