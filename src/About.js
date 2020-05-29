import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs={12}>
                        <h1 className="home-heading">
                            About Me
                        </h1>
                        <p className="home-text">
                            Howdy. My name is Jeremiah Long. Micah is my middle name and there's the letters in JMLdev.com. I've been creating websites for a long time. I started right after we ironed out the bugs for Y2K. Since then I've managed to get pretty good at a few things. JavaScript for one, HTML and CSS of course, then a bunch of other cool stuff like React, Node.js, MERN stack... I could go on for a long time, but I think I'll just create a page for those skills. Anyways, nice to meet you. Feel free to look around and get to know me a little better.
                        </p>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default About;
