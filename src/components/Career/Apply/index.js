import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import API from '../../api';

import {
    MDBContainer,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBCardImage,
    MDBInput
} from 'mdbreact'

class Apply extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            detail: [],
            loading: true
        }
    }

    componentDidMount() {
        API.get('/career.json')
            .then(res => {
                console.log(res)
                const fetchedPost = [];
                for (let key in res.data) {
                    if(key == this.props.match.params.id){
                        fetchedPost.push({
                            ...res.data[key],
                            id: key
                        })    
                    }
                }
                this.setState({
                    detail: fetchedPost,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { loading } = this.state;
        return(
            <div className='bg-brown'>
            {loading 
                ?
                    <MDBIcon 
                        icon="cog" 
                        spin 
                        size="3x" 
                        fixed
                        className='loading-detail' />
                    :
                this.state.detail.map(det=> (
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
                                    <Link to={'/career'} >
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
                                    <h3 className='post-title'>{det.position_title}</h3>
                                    <span className='small'>{det.location}</span>
                                </MDBCol>
                            </MDBRow> 
                            <hr/>
                            
                            <MDBRow>
                                <MDBCol className='padd-detail'>
                                    <h6 className='career-heading'>PERSONAL INFORMATION</h6>
                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Name</p>
                                        </MDBCol>
                                        <MDBCol lg='4' md='4'>
                                            <MDBInput label="First Name" outline required />
                                        </MDBCol>
                                        <MDBCol lg='4' md='4'>
                                            <MDBInput label="Last Name" outline required />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Email</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <MDBInput label="Email" outline required />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Phone</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <MDBInput label="Phone" outline required />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Address</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <MDBInput label="Address" outline required />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Photo</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <input 
                                                type='file'
                                                className='input-file' />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <hr/>

                            <MDBRow>
                                <MDBCol className='padd-detail'>
                                    <h6 className='career-heading'>YOUR PROFILE</h6>
                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'>Resume</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <input 
                                                type='file'
                                                className='input-file' />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <hr/>

                            <MDBRow>
                                <MDBCol className='padd-detail'>
                                    <h6 className='career-heading'>APPLICATION DETAILS</h6>
                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label' style={{float: 'left'}}>Cover Letter</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <MDBInput 
                                                type="textarea" 
                                                label="Cover Letter" 
                                                style={{
                                                    height: '100px'
                                                }}
                                                outline />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            
                            <MDBRow>
                                <MDBCol>
                                    <MDBBtn outline 
                                        className='btn-get-started career-apply'
                                        // onClick={this.handleSubmit}
                                    >
                                        Submit your application
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBContainer>
                ))}
                
            </div>
        );
    }
}

export default Apply;