import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Home from './Home';
import Work from './Work';
import TopNav from './Components/TopNav';


class App extends Component {
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
        </Container>
      </Router>
    );
  }
}

export default App;
