import React, { Component } from 'react';

import API from '../../api';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard
} from 'mdbreact';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position_title: '',
            location: 'Naxal, Kathmandu',
            description: '',
            requirements: '',
            benefits: '',
            application: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        API.post('/career.json', {
            position_title: this.state.position_title,
            location: this.state.location,
            description: this.state.description,
            requirements: this.state.requirements,
            benefits: this.state.benefits
        })
        .then(res => {
            console.log(res);
            this.setState({
                ...this.state,
                position_title: '',
                description: '',
                requirements: '',
                benefits: ''
            })
            this.props.history.push('/career');
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div className='bg-brown'>
                <MDBContainer>
                    <MDBCard className='margin-form'>
                        <MDBRow>
                            <MDBCol>
                                <h1
                                    className='post-title'
                                    style={{
                                        paddingTop: '20px',
                                        paddingLeft: '30px',
                                        fontWeight: '400'
                                    }}
                                >Add New Position</h1>    
                            </MDBCol>
                            
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                            <MDBCol lg='1' md='2' ></MDBCol>
                            <MDBCol lg='10' md='8' className='column'>
                                <MDBInput 
                                    label='Position Title' 
                                    name='position_title'
                                    onChange={this.handleChange}
                                    value={this.state.position_title} 
                                    outline />
                                <MDBInput 
                                    label='Location' 
                                    name='location'
                                    onChange={this.handleChange}
                                    value={this.state.location} 
                                    outline />
                                <MDBInput 
                                    type="textarea" 
                                    label="Description" 
                                    name='description'
                                    style={{
                                        height: '100px'
                                    }}
                                    onChange={this.handleChange}
                                    value={this.state.description} 
                                    outline />
                                <MDBInput 
                                    type="textarea" 
                                    label="Requirements" 
                                    name='requirements'
                                    style={{
                                        height: '100px'
                                    }}
                                    onChange={this.handleChange}
                                    value={this.state.requirements} 
                                    outline />  
                                <MDBInput 
                                    type="textarea" 
                                    label="Benefits" 
                                    name='benefits'
                                    style={{
                                        height: '100px'
                                    }}
                                    onChange={this.handleChange}
                                    value={this.state.benefits} 
                                    outline />                         
                                <center>
                                    <MDBBtn outline 
                                        className='btn-get-started'
                                        onClick={this.handleSubmit}
                                    >
                                        Add Post
                                    </MDBBtn>
                                </center>
                            </MDBCol>
                            <MDBCol lg='1' md='2' ></MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </div>
        );
    }
}

export default NewPost;