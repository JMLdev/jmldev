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
            <div
              className="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="en_US"
              data-type="vertical"
              data-theme="dark"
              data-vanity="jeremiahmlong"
            >
              <a
                className="LI-simple-link"
                href="https://www.linkedin.com/in/jeremiahmlong?trk=profile-badge"
              >
                Jeremiah Long
              </a>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
