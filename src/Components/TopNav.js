import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Octicon, { Info, FileCode, Mail, MarkGithub } from '@githubprimer/octicons-react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    closeNavbar() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">
                        <img src="./logo.png" alt="JML dev logo and home button" />
                        {/* <span className="jml">JML</span><span className="bracket">&#123;</span><span className="dev">dev</span><span className="bracket">&#125;</span> */}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/about" onClick={this.closeNavbar}><Octicon icon={Info} />About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/work" onClick={this.closeNavbar}><Octicon icon={FileCode} /> Work</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/JMLdev"><Octicon icon={MarkGithub} /> GitHub</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/contact" onClick={this.closeNavbar}><Octicon icon={Mail} /> Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}