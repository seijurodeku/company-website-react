import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
    MDBContainer,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardImage,
    MDBBtn
    // MDBBadge
} from 'mdbreact';

import firebase from '../../../firebase';

class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            detail: [],
            applications: []
        }
    }

    fetchCareer = () => {
        const postRef = firebase.database().ref('career');
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

    fetchApplication = () => {
        const applicationRef = firebase.database().ref('application');
        applicationRef.on('value', (snapshot) => {
            let apply = snapshot.val();
            let newApplication = [];
            for (let key in apply) {
                newApplication.push({
                    ...apply[key],
                    id: key
                })
            }
            this.setState({
                applications: newApplication,
                loading: false
            })
        })
    }

    handleLogout = (e) => {
        e.preventDefault();
        firebase.auth().signOut();
        this.props.history.push('/admin');
    }

    componentDidMount(){
        this.fetchCareer();
        this.fetchApplication();
    }

    render() {
        const { loading } = this.state;
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
                                <Link to='/' >
                                    <MDBIcon 
                                        icon="home"
                                        size='3x'
                                        className='home-icon'
                                    />
                                </Link>
                            </MDBCol>
                            
                        </MDBRow>
                        <hr/>
                        
                        {loading 
                        ?
                            <MDBIcon 
                                icon="cog" 
                                spin 
                                size="3x" 
                                fixed
                                className='loading-detail tablet' />
                            :
                            this.state.detail.map(det=>(
                                <div>
                                    <MDBRow>
                                        <MDBCol className='padd-detail'>
                                            <h4 className='post-title'>
                                                <MDBRow>
                                                    <MDBCol md='11'>
                                                        <Link 
                                                            to={'/admin/applications/' + det.id} 
                                                            style={{color: '#FF7F50'}}
                                                        >{det.position_title}</Link>
                                                        
                                                        {/* &nbsp;
                                                        <MDBBadge  
                                                            className="ml-2 badge"
                                                        >9</MDBBadge> */}
                                                    </MDBCol>
                                                    
                                                    <MDBCol md='1'>
                                                        <Link 
                                                            to={'/admin/applications/' + det.id} 
                                                            style={{color: '#FF7F50'}}
                                                        >
                                                            <MDBIcon 
                                                                icon="angle-double-right" 
                                                            />
                                                        </Link>
                                                    </MDBCol>
                                                </MDBRow>                                    
                                            </h4>
                                        </MDBCol>
                                    </MDBRow> 
                                    <hr/>    
                                </div>
                            ))                        
                        }

                    <MDBRow>
                        <MDBCol>                                   
                            <MDBBtn outline 
                                className='btn-get-started career-apply mt-4'
                                onClick={this.handleLogout}
                            >
                                <MDBIcon icon='power-off' /> Logout
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol> 
                            <Link 
                                to='/admin/newpost/' 
                                style={{color: '#FF7F50'}}
                            >                                  
                                <MDBBtn outline 
                                    className='btn-get-started career-apply mt-4'
                                >
                                    <MDBIcon icon='plus' /> Add New Position
                                </MDBBtn>
                            </Link>
                        </MDBCol>
                    </MDBRow>

                    </MDBCard>
                </MDBContainer>
            </div>
        );
    }
}

export default Applications;