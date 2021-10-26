import React from 'react';
import {Col} from 'reactstrap';

export default class WorkItem extends React.Component {

    render() {
        return (
            <Col xs="12" md="6" className="work-item">
                <h3>{this.props.headline}</h3>
                <img src={this.props.image} alt={this.props.alt} />
                <p>{this.props.description}</p>
            </Col>
        );
    }
}