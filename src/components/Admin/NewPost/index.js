import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import API from '../../api';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBIcon
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
            loading: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
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
                benefits: '',
                loading: false
            })
            this.props.history.push('/career');
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const { loading } = this.state;
        return(
            <div className='bg-brown'>
                <MDBContainer>
                    <MDBCard className='margin-form'>
                        <MDBRow>
                            <MDBCol sm='10' lg='10' md='10'>
                                <h1
                                    className='post-title'
                                    style={{
                                        paddingTop: '20px',
                                        paddingLeft: '30px',
                                        fontWeight: '400'
                                    }}
                                >Add New Position</h1>    
                            </MDBCol>
                            
                            <MDBCol sm='2' lg='2' md='2'>
                                <Link 
                                    to='/admin/applications/' 
                                    style={{color: '#FF7F50'}}
                                > 
                                    <MDBIcon 
                                        style={{marginTop: '1em'
                                    }}
                                        size='2x' 
                                        icon='angle-double-left' />
                                </Link>   
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
                                    <MDBBtn outline 
                                        className='btn-get-started'
                                        onClick={this.handleSubmit}
                                    >
                                        Add Post
                                    </MDBBtn>
                                    }
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