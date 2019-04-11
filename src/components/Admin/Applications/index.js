import React, { Component } from 'react';

import {
    MDBContainer,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardImage,
    MDBBadge
} from 'mdbreact';

class Applications extends Component {
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
                                <h4 className='post-title'>
                                    <MDBRow>
                                        <MDBCol md='11'>
                                            Business Development Executive
                                            &nbsp;
                                            <MDBBadge  
                                                className="ml-2 badge"
                                            >9</MDBBadge>
                                        </MDBCol>
                                        <MDBCol md='1'>
                                            <MDBIcon 
                                                icon="angle-double-right" 
                                            />
                                        </MDBCol>
                                    </MDBRow>                                    
                                </h4>
                            </MDBCol>
                        </MDBRow> 
                        <hr/>

                        <MDBRow>
                            <MDBCol className='padd-detail'>
                                <h4 className='post-title'>
                                    <MDBRow>
                                        <MDBCol md='11'>
                                            Business Operations Executive
                                            &nbsp;
                                            <MDBBadge  
                                                className="ml-2 badge"
                                            >7</MDBBadge>
                                        </MDBCol>
                                        <MDBCol md='1'>
                                            <MDBIcon 
                                                icon="angle-double-right" 
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                </h4>
                            </MDBCol>
                        </MDBRow> 
                        <hr/>

                        <MDBRow>
                            <MDBCol className='padd-detail'>
                                <h4 className='post-title'>
                                    <MDBRow>
                                        <MDBCol md='11'>
                                            Front Desk Executive
                                            &nbsp;
                                            <MDBBadge  
                                                className="ml-2 badge"
                                            >3</MDBBadge>
                                        </MDBCol>
                                        <MDBCol md='1'>
                                            <MDBIcon 
                                                icon="angle-double-right" 
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                </h4>
                            </MDBCol>
                        </MDBRow> 
                        <hr/>

                        <MDBRow>
                            <MDBCol className='padd-detail'>
                                <h4 className='post-title'>
                                    <MDBRow>
                                        <MDBCol md='11'>
                                            Call Center Executive
                                            &nbsp;
                                            <MDBBadge  
                                                className="ml-2 badge"
                                            >4</MDBBadge>
                                        </MDBCol>
                                        <MDBCol md='1'>
                                            <MDBIcon 
                                                icon="angle-double-right" 
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                </h4>
                            </MDBCol>
                        </MDBRow> 
                    </MDBCard>
                </MDBContainer>
            </div>
        );
    }
}

export default Applications;