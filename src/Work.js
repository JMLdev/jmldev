// eslint-disable-next-line
import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import WorkItem from './Components/WorkItem';

class Work extends Component {
  render() {
    return (
      <Row className="work">
        <Col xs="12">
          <h1 class="page-heading">
            Some of my work
          </h1>
        </Col>
        <WorkItem 
          image="/welcome.expe.jpg"
          alt="Expedia Group Page"
          headline="Expedia's welcome site"
          description="This website is used for marketing to new partners. Partners for Expedia Group are the hotels and rental companies that list their properties with Expedia Group."
        />
        <WorkItem 
          image="/mkto.jpg"
          alt="Marketo website"
          headline="Marketo development and management"
          description="Marketo landing page templates, email templates, utilities for automation of common tasks, etc."
        />
        <WorkItem 
          image="/dev-msft.jpg"
          alt="Microsoft's Dev Center"
          headline="Microsoft's developer website"
          description="Microsoft's developer center website used by developers who build and market software for use in Microsoft's ecosystem."
        />
        <WorkItem 
          image="/msft-oobe.png"
          alt="Microsoft's OOBE"
          headline="Microsoft's Out Of Box Experience software"
          description="You've likely seen this interface any time you have installed Windows, purchased a new computer, or even looked at a Windows computer at the store."
        />
      </Row>
    );
  }
}

export default Work;