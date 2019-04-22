import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import firebase from '../../../firebase';
import Modal from '../../Content/Modal';

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
            photoName: '',
            resume: null,
            resumeUrl: '',
            resumeName: '',
            coverLetter: '',
            photoProgress: 0,
            resumeProgress: 0,
            loading: true,
            modal: false,
            position_title: '',
            loadingSubmit: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const postRef = firebase.database().ref('career').orderByKey().equalTo(this.props.match.params.id);
        postRef.on('value', (snapshot) => {
            let post = snapshot.val();
            let fetchedPost = [];
            console.log("Get request for apply.")
            for (let key in post) {
                fetchedPost.push({
                    ...post[key],
                    id: key
                })
            }
            // console.log(fetchedPost[0].position_title);
            this.setState({
                detail: fetchedPost,
                position_title: fetchedPost[0].position_title,
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
            this.setState({
                photo
            });
        }
    }

    handleResumeChange = (e) => {
        if(e.target.files[0]) {
            const resume = e.target.files[0];
            this.setState({
                resume
            });
        }
    }

    handleImageSubmit = () => {
        return new Promise((resolve, reject)=>{
            const { photo } = this.state;
            const photoID = Math.random().toString(36).substr(2, 6);
            // const uploadTask = firebase.storage().ref(`images/${photo.name}`).put(photo);
            const uploadTask = firebase.storage().ref(`images/${photoID}`).put(photo);
            uploadTask.on('state_changed', (snapshot) => {
                // Progress function
                const photoProgress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                this.setState({
                    photoProgress, 
                    loadingSubmit: true,
                    photoName: photoID
                });
            },
            // Error function
            (error) => {
                console.log(error);
                reject(error);
            },
            () => {
                firebase.storage().ref('images').child(photoID).getDownloadURL().then(photoUrl=>{
                    console.log(photoUrl);
                    this.setState({
                        photoUrl
                    });
                    resolve(true);
                })
            })              
        });
        
    }

    handleResumeSubmit = () => {
        return new Promise((resolve, reject)=>{
            const { resume } = this.state;
            const resumeID = Math.random().toString(36).substr(2, 6);
            const uploadTask = firebase.storage().ref(`pdfs/${resumeID}`).put(resume);
            uploadTask.on('state_changed', (snapshot) => {
                // Progress function
                const resumeProgress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                this.setState({
                    resumeProgress, 
                    loadingSubmit: true,
                    resumeName: resumeID
                });
            },
            // Error function
            (error) => {
                console.log(error);
                reject(error);
            },
            () => {
                firebase.storage().ref('pdfs').child(resumeID).getDownloadURL().then(resumeUrl=>{
                    console.log(resumeUrl);
                    this.setState({
                        resumeUrl
                    });
                    resolve(true);
                })
            })
        });        
    }

    async handleSubmit (e) {
        e.preventDefault();

        await this.handleImageSubmit();
        await this.handleResumeSubmit();
        this.setState({loadingSubmit: true})
        
        const postRef = firebase.database().ref('application');
        postRef.push({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            photoUrl: this.state.photoUrl,
            resumeUrl: this.state.resumeUrl,
            postKey: this.props.match.params.id,
            postTitle: this.state.position_title,
            coverLetter: this.state.coverLetter,
            photoName: this.state.photoName,
            resumeName: this.state.resumeName
        }).then((data) => {
            console.log('data ', data);
            this.setState({
                modal: !this.state.modal,
                loadingSubmit: false
            })
        }).catch((err) => {
            this.setState({
                loadingSubmit: false
            })
            console.log('error ', err);
        })
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    
    render() {
        const { loading, loadingSubmit } = this.state;
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
                                    <Link to={'/career/' + this.props.match.params.id} >
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
                                    {loadingSubmit 
                                        ?
                                        <MDBBtn 
                                            outline 
                                            type='submit'
                                            className='btn-get-started career-apply'
                                        >
                                            <MDBIcon icon="spinner" spin size="2x" fixed />
                                        </MDBBtn>
                                        :
                                    <MDBBtn 
                                        outline 
                                        className='btn-get-started career-apply'
                                        onClick={this.handleSubmit}
                                    >
                                        Submit your application
                                    </MDBBtn>
                                    }
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        
                        <Modal 
                            message='Thank you for applying at Pay Nep Pvt. Ltd. We will contact you if you are shortlisted for interview.'
                            modal={this.state.modal}
                            toggleModal={this.toggleModal}
                            path='/career'  />
                        
                    </MDBContainer>
                ))}
                
            </div>
        );
    }
}

export default Apply;