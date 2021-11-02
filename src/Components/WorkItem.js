import React from 'react';
import {Col} from 'reactstrap';

export default class WorkItem extends React.Component {
    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.state = {
            smallSize: "12",
            largeSize: "6",
            small: true
        }
    }

    expand() {
        this.setState({
            small: false
        })
    }

    render() {
        return (
            <Col xs={12} md={6} className="work-item" >
                <h3>{this.props.headline}</h3>
                <img src={this.props.image} alt={this.props.alt} />
                <p>{this.props.description}</p>
            </Col>
        );
    }
}