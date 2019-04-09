import React, { Component } from 'react';
import {
    MDBRow,
    MDBMask,
    MDBView,
    MDBBtn
} from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Cover extends Component {
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
                    ? <img src='/images/loading3.gif'/>
                    : 
                    <header>
                        <MDBView>
                            <img
                                src="/images/career-3.png"
                                className="bg img-fluid career-bg"
                                alt=""
                            />
                            <MDBMask
                                overlay='white-light'
                                className='flex-center flex-column text-white text-center'
                            >
                                <div className='box'>
                                    <MDBRow className='banner justify-content-center'>
                                        <h1 className='career-title'>
                                            Join Our Team
                                        </h1>
                                    </MDBRow>

                                    <MDBRow>
                                        <AnchorLink className='nav-link' href='#about'>
                                            <MDBBtn outline className='btn-get-started'>Current Opening</MDBBtn>
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

export default Cover;