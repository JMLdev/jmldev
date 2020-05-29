// eslint-disable-next-line
import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

class Work extends Component {
  render() {
    return (
      <Row>
        <Col className="work">
          <div className="squirrel-wrap">
            <p>Where's the work?</p>
            <img src="/squirrel.png" alt="no work here" className="squirrel" />
          </div>
        </Col>
      </Row>
    );
  }
}

export default Work;