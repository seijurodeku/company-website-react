import React, { Component } from 'react';

import {
    MDBContainer,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBIcon
} from 'mdbreact';

import { Link } from 'react-router-dom';

import firebase from '../../../firebase';

import Image from 'react-bootstrap/Image';

class ApplicationDetail extends Component { 
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            applicationDetail: [],
            loading: true,
            position_title: ''
        }
    }

    componentDidMount() {
        const appRef = firebase.database().ref('application').orderByKey().equalTo(this.props.match.params.applyid);
        appRef.on('value', (snapshot) => {
            let app = snapshot.val();
            let fetchedApplication = [];
            console.log("Get request for apply.")
            for (let key in app) {
                fetchedApplication.push({
                    ...app[key],
                    id: key
                })
            }
            this.setState({
                applicationDetail: fetchedApplication,
                loading: false,
                position_title: fetchedApplication[0].postTitle
            })
        })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className='bg-brown'>
                {loading 
                    ?
                        <MDBIcon 
                            icon="cog" 
                            spin 
                            size="3x" 
                            fixed
                            className='loading-detail tablet' />
                        :
                        this.state.applicationDetail.map(app => (
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
                                            <Link to={'/admin/applications/' + this.props.match.params.postId} >
                                                <MDBIcon 
                                                    icon="home"
                                                    size='3x'
                                                    className='home-icon'
                                                />
                                            </Link>
                                        </MDBCol>
                                        
                                    </MDBRow>
                                    <hr/>
                                    
                                    <MDBRow>
                                        <MDBCol className='padd-detail'>
                                            <h3 className='post-title'>{this.state.position_title}</h3>
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
                                                        src={app.photoUrl} 
                                                        className='profile-img'
                                                        roundedCircle />
                                                </MDBCol>

                                                <MDBCol lg='9' md='9'>
                                                    <MDBRow>
                                                        <MDBCol md='4' lg='4'>
                                                            <p className='profile-label-heading'>Name</p>
                                                        </MDBCol>
                                                        <MDBCol lg='8' md='8'>
                                                            <p className='profile-label-body'>{app.firstName + ' ' + app.lastName}</p>
                                                        </MDBCol>
                                                    </MDBRow>

                                                    <MDBRow>
                                                        <MDBCol md='4' lg='4'>
                                                            <p className='profile-label-heading'>Email</p>
                                                        </MDBCol>
                                                        <MDBCol lg='8' md='8'>
                                                            <p className='profile-label-body'>{app.email}</p>
                                                        </MDBCol>
                                                    </MDBRow>

                                                    <MDBRow>
                                                        <MDBCol md='4' lg='4'>
                                                            <p className='profile-label-heading'>Phone</p>
                                                        </MDBCol>
                                                        <MDBCol lg='8' md='8'>
                                                            <p className='profile-label-body'>{app.phone}</p>
                                                        </MDBCol>
                                                    </MDBRow>

                                                    <MDBRow>
                                                        <MDBCol md='4' lg='4'>
                                                            <p className='profile-label-heading'>Address</p>
                                                        </MDBCol>
                                                        <MDBCol lg='8' md='8'>
                                                            <p className='profile-label-body'>{app.address}</p>
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
                                                    <a href={app.resumeUrl}><p className='profile-label-body'>resume.pdf</p></a>
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

                                            <MDBRow >
                                                <MDBCol >
                                                    <pre 
                                                        className='profile-label-body text-justify'                                                        
                                                    >
                                                        {app.coverLetter}
                                                    </pre>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCard> 
                            </MDBContainer>
                        ))               
                }
            </div>
        );
    }
}

export default ApplicationDetail;