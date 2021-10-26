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
            <h1 class="page-heading">Contact</h1>
          </Col>
          <Col xs="4">
            <img src="/profile-picture.jpg" alt="Profile portrait"/>
          </Col>
          <Col xs="8">
            <p>
              I think it's best if you <a href="https://www.linkedin.com/in/jeremiahmlong/">contact me on LinkedIn</a>. They have pretty solid contact functionality
              and that frees me up from needing to maintain a form against the endless onslaught of spam.
            </p>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
