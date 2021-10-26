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
        <Row>
          <Col xs="12" className="linked-in">
            <img src="/profile-picture.jpg" alt="Profile portrait"/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
