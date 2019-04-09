import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    Animation,
    MDBCard,
    MDBBtn,
    MDBIcon
} from 'mdbreact'; 

import Modal from '../Modal';

import API from '../../api';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            modal: false,
            detail: [
                    {
                        icon: 'map-marker-alt',
                        description: '3rd Floor, Nirdhan Bhawan, Bhagwati Bahal, Naxal-1 Kathmandu, Nepal'
                    },
                    {
                        icon: 'envelope',
                        description: 'info@moru.com.np'
                    },
                    {
                        icon: 'phone',
                        description: '+977-1-4443888'
                    }
            ]
        }
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        API.post('/contact.json', {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        })
        .then(res => {
            console.log(res);
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
                modal: !this.state.modal
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <MDBContainer className='text-center'>
                <Animation reveal type='bounceIn'>
                    <MDBContainer>
                        <MDBRow className='banner justify-content-center'>
                            <h1 className='title'>Get In Touch</h1>
                        </MDBRow>
                    </MDBContainer>
                </Animation>

                <Animation reveal type='slideInUp'>
                    <MDBRow className='contact-row'>
                        {this.state.detail.map(det => (
                            <MDBCol md='4'>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol md='5'></MDBCol>
                                        <MDBCol md='2'>
                                            <MDBIcon icon={det.icon} size='2x' className='contact-icon' />
                                        </MDBCol>
                                        <MDBCol md='5'></MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol lg='2' md='0'></MDBCol>
                                        <MDBCol lg='8' md='12'>
                                            <p>{det.description}</p>
                                        </MDBCol>
                                        <MDBCol lg='2' md='0'></MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCol>
                        ))}
                        
                    </MDBRow>

                    <MDBRow className='contact-row'>
                        <MDBCol>
                            <MDBRow>    
                                <MDBCol md='5'>
                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCol>
                                                <MDBInput 
                                                    label='Your Name' 
                                                    name='name'
                                                    onChange={this.handleChange}
                                                    value={this.state.name} outline />
                                                <MDBInput 
                                                    label='Your Email' 
                                                    name='email'
                                                    onChange={this.handleChange}
                                                    value={this.state.email} outline />
                                                <MDBInput 
                                                    label='Subject' 
                                                    name='subject'
                                                    onChange={this.handleChange}
                                                    value={this.state.subject} outline />
                                                <MDBInput 
                                                    type="textarea" 
                                                    label="Message" 
                                                    name='message'
                                                    onChange={this.handleChange}
                                                    value={this.state.message} outline />
                                                <MDBBtn outline 
                                                    className='btn-get-started'
                                                    onClick={this.handleSubmit}
                                                >
                                                    Send Message</MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBContainer>
                                </MDBCol>       

                                <MDBCol md="7" className="map-nav">
                                    <div
                                        id="map-container-google-11"
                                        className="z-depth-1-half map-container-6"
                                        style={{height: '100%', width: '100%'}}
                                    >
                                        <iframe
                                            title="map"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.17396661311!2d85.32616021557541!3d27.71191448279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a12d7497d%3A0xda6c2c0bbb0658ba!2sPay+Nep+Pvt+Ltd!5e0!3m2!1sen!2snp!4v1554106674281!5m2!1sen!2snp"
                                            frameborder="0"
                                            style={{border: '0'}}
                                            allowfullscreen
                                        />
                                    </div>

                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </Animation>
                
                <Modal 
                    message='We received your message. We will get back to you soon.' 
                    modal={this.state.modal}
                    toggleModal={this.toggleModal}  />
            </MDBContainer>
        );
    }
}

export default Contact;