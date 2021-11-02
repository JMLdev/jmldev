import React, { Component } from "react";
import {
  Row,
  Col
} from 'reactstrap';

class Contact extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <React.Fragment>
        <Row className='contact'>
          <Col xs="12">
            <h1 className="page-title">Contact</h1>
          </Col>
          <Col xs="4">
            <img src="/profile-picture.jpg" alt="Profile portrait"/>
          </Col>
          <Col xs="8" className="text-block">
            <p>
              Go ahead and <a href="https://www.linkedin.com/in/jeremiahmlong/">look me up on LinkedIn</a>.
              You can send me a message there, and also take a look at my work history, volunteer work, 
              endorsements, and certifications.
            </p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
