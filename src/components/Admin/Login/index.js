import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';

import firebase from '../../../firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            email: '',
            password: '',
            error: null,
            loading: false,
            authenticated: this.props.authenticated
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit (e) {
        e.preventDefault();
        this.setState({ loading: true })
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                this.setState({
                    loading: false
                })
                this.props.history.push('/admin/applications');
            })
            .catch(error => {
                this.setState({error});
                this.setState({loading: false})
            })
    }

    render() {
        const { email, password, error, loading } = this.state;
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
                                        {loading 
                                        ?
                                        <MDBBtn 
                                            outline 
                                            type='submit'
                                            className='btn-get-started'
                                        >
                                            <MDBIcon icon="spinner" spin size="2x" fixed />
                                        </MDBBtn>
                                        :
                                        <MDBBtn 
                                            outline 
                                            type='submit'
                                            className='btn-get-started'
                                        >
                                            Login
                                        </MDBBtn>
                                        }
                                    </div>
                                </form>

                                {error
                                ?
                                <MDBRow>
                                    <MDBCol>
                                        <MDBCard style={{opacity: '0.8'}} color="red lighten-1" text="white" className="text-center">
                                            <MDBCardBody>
                                            {error.message}
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>                    
                                :
                                null}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='2' lg='3'></MDBCol>

                    
                </MDBRow>

                
                
            </MDBContainer>
        );
    }
}

export default withRouter(Login);