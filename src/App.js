import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Home from './Home';
import About from './About';
import Work from './Work';
import TopNav from './Components/TopNav';
import Contact from './Contact';
import 'confetti-js';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      canvasStyle: {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "-9999",
        width: "100%",
        height: "100%",
        background: "transparent"
      }
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    const ConfettiGenerator = window.ConfettiGenerator;
    let confettiSettings = { 
        target: 'my-canvas',
        clock: 1,
        colors: [0,0,0],
        rotate: true
    };
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
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
          <Route path="/about" exact component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <canvas id="my-canvas" style={this.state.canvasStyle}>
          </canvas>
        </Container>
      </Router>
    );
  }
}

export default App;
