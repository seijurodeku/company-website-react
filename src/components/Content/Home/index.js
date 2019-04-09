import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    MDBRow,
    MDBMask,
    MDBView,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        const { loading } = this.state;
        return (
            <div>
                {loading
                    ? <MDBIcon 
                        icon="cog" 
                        spin 
                        size="3x" 
                        fixed
                        className='loading' 
                    />
                    : 
                    <header>
                        <MDBView>
                            <img
                                src="/images/cover2.jpeg"
                                className="bg img-fluid"
                                alt=""
                            />
                            <MDBMask
                                overlay='blue-light'
                                className='flex-center flex-column text-white text-center'
                            >
                                <div className='icon-bar'>
                                    <a className='facebook'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                    <a className='linkedin'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                    <a className='twitter'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                </div>

                                <div className='box'>
                                    <MDBRow className='banner justify-content-center'>
                                        <h1 className='banner-title'>
                                            Pay Nep Pvt. Ltd.
                                        </h1>
                                    </MDBRow>

                                    <MDBRow className='banner justify-content-center'>
                                        <h2 className='banner-subtitle'>
                                            Payment Service Provider
                                        </h2>
                                    </MDBRow>

                                    <MDBRow>
                                        <AnchorLink className='nav-link' href='#about'>
                                            <MDBBtn outline className='btn-get-started'>Get Started</MDBBtn>
                                        </AnchorLink>
                                    </MDBRow>
                                </div>
                            </MDBMask>
                        </MDBView>
                    </header>
                }
            </div>
        );
    }
}

export default Home;