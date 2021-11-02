import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <Row className="about">
                    <Col xs="12">
                        <h1 className="page-title">
                            About
                        </h1>
                    </Col>
                    <Col xs="4">
                        <img src="/profile-picture.jpg" alt="Profile portrait"/>
                    </Col>
                    <Col xs="8" className="text-block">
                        <p>
                            I'm a huge fantasy nerd, which has partially driven my desire to write
                            code. I think of coding like spell-casting. By memorizing a 
                            series of cryptic words, I can exert my will on the digital world, turning
                            mere thoughts into something physical, something tangible. That sounds a 
                            bit egotistcal when I type it out, but it's one of the ways I view coding.
                        </p>
                        <p>
                            I started learning about website development in the very early 2000's. Back then
                            we were still using the CSS2 standard, tables, and a lot of gimmicks to make things
                            look cool. The internet has sure come a long way since then.
                        </p>
                        <p>
                            Even though bandwidth is plentiful now a days, and web languages verbose, I still think
                            it is important to code for performance. That means optimizing images, avoiding code 
                            repetition, and keeping scripts small. I am also a firm believer in the value of accessibility.
                            The internet is the powerful communication medium ever invented, bringing all corners of the world
                            into our very living quarters, so I think it's important for it to be accessible to all. I am 
                            proud to have helped Microsoft work on it's goal of total accessibility for all of their products 
                            and now I continue that ambition with Expedia Group.
                        </p>
                        <p>
                            Outside of work I enjoy rock climbing, backpacking, boating, archery, mathematics, electronics, 
                            ham radio, and building quadcopters from scratch. I guess I have a bit of ADD when it comes to hobbies.
                            I will dive passionately into a hobbie and pursue it for months, then drop it for a year or more before 
                            returning to it.
                        </p>
                        <p>
                            Anyways, that's a brief summary of what drives my motivation for website development, and a little 
                            about what I do with myself when away from work. Feel free to <Link to="/Contact">send me a message if you want</Link>. 
                        </p>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default About;
