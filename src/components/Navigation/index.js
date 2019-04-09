import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem
} from 'mdbreact';

import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            width: window.innerWidth
        };
        this.onClick = this.onClick.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ 
            width: window.innerWidth 
        });
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    onLinkClick() {
        this.setState({
            collapse: false
        });
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 800;

        return (
            <div>
                <header>
                    {/* <Router> */}
                        {isMobile
                            ?
                            <MDBNavbar
                                color='white'
                                fixed='top'
                                dark
                                expand='md'
                                className='navbar'
                            >
                                <MDBNavbarBrand href='paynep.com.np'>
                                    <img
                                        src='/images/3x.png'
                                        alt='logo'
                                        className='App-logo'
                                    />
                                </MDBNavbarBrand>
                                {!this.state.isWideEnough && 
                                    <MDBNavbarToggler 
                                        className='nav-toggler'
                                        onClick={this.onClick}
                                        image='/images/toggler5.jpeg'
                                        on
                                    />
                                }
                                <MDBCollapse isOpen={this.state.collapse} navbar>
                                    <MDBNavbarNav right>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#home'>
                                                <strong>Home</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#about'>
                                                <strong>About</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#services'>
                                                <strong>Services</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#gallery'>
                                                <strong>Gallery</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#team'>
                                                <strong>Team</strong>
                                            </AnchorLink>
                                        </MDBNavItem>

                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <Link className='nav-link' to='/career'>
                                                <strong>Career</strong>
                                            </Link>
                                        </MDBNavItem>
                                        
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#contact'>
                                                <strong>Contact</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBNavbar>
                            :
                            <MDBNavbar
                                color='white'
                                fixed='top'
                                dark
                                expand='md'
                                scrolling
                                // transparent
                                className='navbar'
                            >
                                <MDBNavbarBrand href='paynep.com.np'>
                                    <img
                                        src='/images/3x.png'
                                        alt='logo'
                                        className='App-logo'
                                    />
                                </MDBNavbarBrand>
                                {!this.state.isWideEnough && 
                                    <MDBNavbarToggler 
                                        className='nav-toggler'
                                        onClick={this.onClick}
                                        on
                                    />
                                }
                                <MDBCollapse isOpen={this.state.collapse} navbar>
                                    <MDBNavbarNav right>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#home'>
                                                <strong>Home</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#about'>
                                                <strong>About</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#services'>
                                                <strong>Services</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#gallery'>
                                                <strong>Gallery</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#team'>
                                                <strong>Team</strong>
                                            </AnchorLink>
                                        </MDBNavItem>

                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <Link className='nav-link' to='/career'>
                                                <strong>Career</strong>
                                            </Link>
                                        </MDBNavItem>

                                        <MDBNavItem onClick={this.onLinkClick}>
                                            <AnchorLink className='nav-link' href='#contact'>
                                                <strong>Contact</strong>
                                            </AnchorLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBNavbar>
                        }
                    {/* </Router> */}
                </header>
            </div>
        );
    }
};

export default Navigation;