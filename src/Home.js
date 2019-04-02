import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopNav from './Components/TopNav';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            content: ''
        }
        this.aboutText = React.createRef();
    }

    componentDidMount() {
        this.typeWriter();
    }

    typeWriter = () => {
        let speed = 10;
        let tempText = this.state.content;
        let text = "Howdy. My name is Jeremiah Long. Micah is my middle name and there's the letters in JMLdev.com. I've been creating websites for a long time. I started right after we ironed out the bugs for Y2K. In this time I've managed to get pretty good at a few things. JavaScript for one, HTML and CSS of course, then a bunch of other cool stuff like React, Node.js, MERN stack... I could go on for a long time, but I think I'll just create a page for those skills. Anyways, nice to meet you. Feel free to look around and get to know me a little better.";
        if (this.state.content.length < text.length) {
            tempText += text.charAt(this.state.content.length);
            this.setState({content: tempText});
            setTimeout(this.typeWriter, speed);
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <TopNav />
                    </Col>
                    <Col xs={12}>
                        <h1 className="home-heading">
                            About Me
                        </h1>
                        <p>
                            {this.state.content}
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
