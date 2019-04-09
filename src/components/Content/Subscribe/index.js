import React, { Component } from 'react';
import {
    Mask,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdbreact';
import { Parallax } from 'react-parallax';

import API from '../../api';

import Modal from '../Modal';

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribeEmail: '',
            modal: false
        }
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleChange = (event) => {
        this.setState({
            subscribeEmail: event.target.value
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        API.post('/subscribe.json', {
            subscribeEmail: this.state.subscribeEmail
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    subscribeEmail: '',
                    modal: !this.state.modal
                })
            }) 
            .catch(err=> {
                console.log(err);
            })
    }

    render () {
        return (
            <Parallax
                blur={3}
                bgImage={'/images/cover1.jpg'}
                bgImageAlt='parallax-img'
                strength={100}
            >
                <Mask className='streak' overlay='blue-grey-slight'>
                    <div style={{height: '200px'}}>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol lg='3' md='2'></MDBCol>
                                <MDBCol lg='4' md='5' sm='12'>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control subscribe-input"
                                            id="formGroupExampleInput"
                                            placeholder='Your Email'
                                            value={this.state.subscribeEmail}
                                            onChange={this.handleChange}
                                        />                                        
                                    </div>                              
                                </MDBCol>
                                <MDBCol lg='2' md='3' sm='12'>
                                    <MDBBtn outline 
                                        className='subscribe-button'
                                        onClick={this.handleClick}
                                    >
                                        Subscribe
                                    </MDBBtn>
                                    
                                </MDBCol>
                                <MDBCol lg='3' md='2'></MDBCol>
                            </MDBRow>
                        </MDBContainer>

                        <Modal 
                            message='We will keep you posted through email!!!' 
                            modal={this.state.modal}
                            toggleModal={this.toggleModal}  />
                    </div>
                </Mask>
            </Parallax>
        );
    }
}

export default Subscribe;