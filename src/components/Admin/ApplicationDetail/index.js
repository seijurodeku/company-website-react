import React, { Component } from 'react';

import {
    MDBContainer,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBIcon
} from 'mdbreact';

import Image from 'react-bootstrap/Image';

class ApplicationDetail extends Component { 
    render() {
        return (
            <div className='bg-brown'>
                <MDBContainer>
                    <MDBCard className='apply-card'>
                        <MDBRow>
                            <MDBCol md='10'>
                                <MDBCardImage 
                                    className="img-fluid" 
                                    src="/images/2x.png" 
                                    style={{
                                        marginLeft: '40px',
                                        marginBottom: '-20px'
                                        }} 
                                />
                            </MDBCol>
                            <MDBCol md='2'>
                                {/* <Link to={'/career/' + this.props.match.params.id} > */}
                                    <MDBIcon 
                                        icon="home"
                                        size='3x'
                                        className='home-icon'
                                    />
                                {/* </Link> */}
                            </MDBCol>
                            
                        </MDBRow>
                        <hr/>
                        
                        <MDBRow>
                            <MDBCol className='padd-detail'>
                                <h3 className='post-title'>Business Development Executive</h3>
                                <span className='small'>Naxal, Kathmandu</span>
                            </MDBCol>
                        </MDBRow> 
                        <hr/>
                        
                        <MDBRow>
                            <MDBCol className='padd-detail'>
                                <h6 className='career-heading'>PERSONAL INFORMATION</h6>
                                <MDBRow>
                                    <MDBCol lg='3' md='3'>
                                        <Image 
                                            src='/images/team/mg.jpg' 
                                            className='profile-img'
                                            roundedCircle />
                                    </MDBCol>

                                    <MDBCol lg='9' md='9'>
                                        <MDBRow>
                                            <MDBCol md='4' lg='4'>
                                                <p className='profile-label-heading'>Name</p>
                                            </MDBCol>
                                            <MDBCol lg='8' md='8'>
                                                <p className='profile-label-body'>Manoj Ghimire</p>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow>
                                            <MDBCol md='4' lg='4'>
                                                <p className='profile-label-heading'>Email</p>
                                            </MDBCol>
                                            <MDBCol lg='8' md='8'>
                                                <p className='profile-label-body'>manoj.ghimire@gmail.com</p>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow>
                                            <MDBCol md='4' lg='4'>
                                                <p className='profile-label-heading'>Phone</p>
                                            </MDBCol>
                                            <MDBCol lg='8' md='8'>
                                                <p className='profile-label-body'>9860652944</p>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow>
                                            <MDBCol md='4' lg='4'>
                                                <p className='profile-label-heading'>Address</p>
                                            </MDBCol>
                                            <MDBCol lg='8' md='8'>
                                                <p className='profile-label-body'>Biratnagar, Nepal</p>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                    
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <hr/>

                        <MDBRow>
                            <MDBCol className='padd-detail'>
                                <h6 className='career-heading'>YOUR PROFILE</h6>
                                <MDBRow>
                                    <MDBCol lg='3' md='3'>
                                        <p className='profile-label-heading'>Resume</p>
                                    </MDBCol>
                                    <MDBCol lg='9' md='9'>
                                        <p className='profile-label-body'>resume.pdf</p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <hr/>

                        <MDBRow>
                            <MDBCol className='padd-detail'>
                                <h6 className='career-heading'>APPLICATION DETAILS</h6>
                                <MDBRow>
                                    <MDBCol>
                                        <p className='profile-label-heading'>Cover Letter</p>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                    <MDBCol>
                                        <p className='profile-label-body text-justify'>
                                        Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry. Lorem Ipsum has been the industry's 
                                        standard dummy text ever since the 1500s, when an unknown 
                                        printer took a galley of type and scrambled it to make a 
                                        type specimen book. It has survived not only five centuries,
                                         but also the leap into electronic typesetting, remaining 
                                         essentially unchanged. It was popularised in the 1960s with 
                                         the release of Letraset sheets containing Lorem Ipsum passages,
                                          and more recently with desktop publishing software like Aldus
                                           PageMaker including versions of Lorem Ipsum.
                                        </p>

                                        <p className='profile-label-body text-justify'>
                                        Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry. Lorem Ipsum has been the industry's 
                                        standard dummy text ever since the 1500s, when an unknown 
                                        printer took a galley of type and scrambled it to make a 
                                        type specimen book. It has survived not only five centuries,
                                         but also the leap into electronic typesetting, remaining 
                                         essentially unchanged. It was popularised in the 1960s with 
                                         the release of Letraset sheets containing Lorem Ipsum passages,
                                          and more recently with desktop publishing software like Aldus
                                           PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard> 
                </MDBContainer>
            </div>
        );
    }
}

export default ApplicationDetail;