import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody
} from 'mdbreact';

import firebase from '../../../firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                this.props.history.push('/admin/applications');
                console.log('Hello world');
                console.log("User: ",res.user.ra);
                localStorage.setItem('token', res.user.ra);
                localStorage.setItem('refresh_token', res.user.refreshToken)
            })
            .catch(error => {
                this.setState({error});
            })
    }

    render() {
        const { email, password, error } = this.state;
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='2' lg='3'></MDBCol>
                    <MDBCol md='8' lg='6'>
                        <MDBCard 
                            id='login'>
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <p 
                                        className='h4 text-center py-4 login-header'
                                    >Log In</p>
                                    
                                    <div className='grey-text'>
                                        <MDBInput 
                                            label='Email'
                                            icon='user'
                                            group
                                            type='text'
                                            validate
                                            error='wrong'
                                            success='right'
                                            name='email'
                                            onChange={this.handleChange}
                                            value={email}
                                        />
                                        <MDBInput
                                            label='Password'
                                            icon='lock'
                                            group
                                            type='password'
                                            name='password'
                                            onChange={this.handleChange}
                                            value={password}
                                            validate 
                                        />
                                    </div>
                                    <div className='text-center py-4 mt-3'>
                                        <MDBBtn 
                                            outline 
                                            type='submit'
                                            className='btn-get-started'
                                        >
                                            Login
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='2' lg='3'></MDBCol>
                </MDBRow>

                {error
                ?
                <MDBRow>
                    <MDBCard color="red lighten-1" text="white" className="text-center">
                        <MDBCardBody>
                        {error.message}
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                :
                null}
                
            </MDBContainer>
        );
    }
}

export default withRouter(Login);