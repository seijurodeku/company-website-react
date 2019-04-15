import React, { Component } from 'react';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody
} from 'mdbreact';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='2' lg='3'></MDBCol>
                    <MDBCol md='8' lg='6'>
                        <MDBCard 
                            id='login'>
                            <MDBCardBody>
                                <form>
                                    <p 
                                        className='h4 text-center py-4 login-header'
                                    >Log In</p>
                                    <div className='grey-text'>
                                        <MDBInput 
                                            label='Username'
                                            icon='user'
                                            group
                                            type='text'
                                            validate
                                            error='wrong'
                                            success='right'
                                        />
                                        <MDBInput
                                            label='Password'
                                            icon='lock'
                                            group
                                            type='password'
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
            </MDBContainer>
        );
    }
}

export default Login;