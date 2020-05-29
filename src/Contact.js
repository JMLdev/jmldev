import React, { Component } from 'react';
import CanvasSparks from './Components/CanvasSpark';


class Contact extends Component {
  render() {
    return (
        <React.Fragment>
          <CanvasSparks height={this.props.height} width={this.props.width} />
        </React.Fragment>
    );
  }
}

export default Contact;