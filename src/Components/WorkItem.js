import React from 'react';
import {Col} from 'reactstrap';

export default class WorkItem extends React.Component {
    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.state = {
            active: false,
            textShort: this.props.description
        }
    }

    expand() {
        const isActive = this.state.active;
        this.setState({
            active: !isActive
        })
    }

    render() {
        return (
            <Col xs={12} md={6} className={'work-item ' + (this.state.active ? 'expanded' : '')} onClick={this.expand}>
                <div className="exit">X</div>
                <h3>{this.props.headline}</h3>
                <img src={this.props.image} alt={this.props.alt} />
                <p>{this.state.textShort}</p>
            </Col>
        );
    }
}