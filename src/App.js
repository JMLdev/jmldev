import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Home from './Home';
import Work from './Work';
import TopNav from './Components/TopNav';
import Contact from './Contact';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerHeight, height: window.innerHeight});
  }

  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col xs={12}>
              <TopNav />
            </Col>
          </Row>
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" render={props => <Contact height={this.state.height} width={this.state.width} />} />
        </Container>
      </Router>
    );
  }
}

export default App;
