import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import firebase from '../../../firebase';

import {
    MDBContainer,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBCardImage,
    MDBInput
} from 'mdbreact';

import ProgressBar from 'react-bootstrap/ProgressBar'

class Apply extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            detail: [],
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            photo: null,
            photoUrl: '',
            resume: null,
            resumeUrl: '',
            coverLetter: '',
            photoProgress: 0,
            resumeProgress: 0,
            loading: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const postRef = firebase.database().ref('career').orderByKey().equalTo(this.props.match.params.id);
        postRef.on('value', (snapshot) => {
            let post = snapshot.val();
            let fetchedPost = [];
            for (let key in post) {
                fetchedPost.push({
                    ...post[key],
                    id: key
                })
            }
            this.setState({
                detail: fetchedPost,
                loading: false
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value    
        })        
    }

    handleImageChange = (e) => {
        if (e.target.files[0]){
            const photo = e.target.files[0];
            this.setState({photo});

            const uploadTask = firebase.storage().ref(`images/${photo.name}`).put(photo);
            uploadTask.on('state_changed', (snapshot) => {
                // Progress function
                const photoProgress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                this.setState({photoProgress});
            },
            // Error function
            (error) => {
                console.log(error);
            },
            () => {
                firebase.storage().ref('images').child(photo.name).getDownloadURL().then(photoUrl=>{
                    console.log(photoUrl);
                    this.setState({photoUrl});
                })
            })
        }
    }

    handleResumeChange = (e) => {
        if(e.target.files[0]) {
            const resume = e.target.files[0];
            this.setState({resume});

            const uploadTask = firebase.storage().ref(`pdfs/${resume.name}`).put(resume);
            uploadTask.on('state_changed', (snapshot) => {
                // Progress function
                const resumeProgress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                this.setState({resumeProgress});
            },
            // Error function
            (error) => {
                console.log(error);
            },
            () => {
                firebase.storage().ref('pdfs').child(resume.name).getDownloadURL().then(resumeUrl=>{
                    console.log(resumeUrl);
                    this.setState({resumeUrl});
                })
            })
        }
    }

    handleSubmit (e) {
        e.preventDefault();

        // this.handleImageSubmit();
        // this.handleResumeSubmit();
        
        const postRef = firebase.database().ref('application');
        postRef.push({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            photoUrl: this.state.photoUrl,
            resumeUrl: this.state.resumeUrl,
            postKey: this.props.match.params.id
        }).then((data) => {
            console.log('data ', data)
        }).catch((err) => {
            console.log('error ', err);
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
                                            <MDBInput 
                                                label="First Name" 
                                                outline 
                                                required
                                                onChange={this.handleChange}
                                                name='firstName' />
                                        </MDBCol>
                                        <MDBCol lg='4' md='4'>
                                            <MDBInput 
                                                label="Last Name" 
                                                outline 
                                                required
                                                onChange={this.handleChange}
                                                name='lastName' />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Email</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <MDBInput 
                                                label="Email" 
                                                type='email'
                                                outline 
                                                required
                                                name='email'
                                                onChange={this.handleChange} />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Phone</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <MDBInput 
                                                label="Phone" 
                                                outline 
                                                required
                                                name='phone'
                                                onChange={this.handleChange} />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Address</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <MDBInput 
                                                label="Address" 
                                                outline 
                                                required
                                                name='address'
                                                onChange={this.handleChange} />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className='input-name'>
                                        <MDBCol lg='2' md='2'>
                                            <p className='label'><span className='compulsary'>* </span>Photo</p>
                                        </MDBCol>
                                        <MDBCol lg='8' md='8'>
                                            <input 
                                                type='file'
                                                className='input-file'
                                                onChange={this.handleImageChange} />

                                            <ProgressBar 
                                                animated 
                                                variant='warning'
                                                now={this.state.photoProgress}
                                                style={{
                                                    marginTop: '10px'
                                                }}
                                            />                                            
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
                                                className='input-file'
                                                onChange={this.handleResumeChange} />  

                                            <ProgressBar 
                                                animated 
                                                variant='info'
                                                now={this.state.resumeProgress}
                                                style={{
                                                    marginTop: '10px'
                                                }}
                                            />                                          
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
                                                outline
                                                name='coverLetter'
                                                onChange={this.handleChange} />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            
                            <MDBRow>
                                <MDBCol>
                                    <MDBBtn 
                                        outline 
                                        className='btn-get-started career-apply'
                                        onClick={this.handleSubmit}
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