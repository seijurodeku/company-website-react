import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import API from '../../api';
import firebase from '../../../firebase';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBIcon
} from 'mdbreact';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position_title: '',
            location: '',
            description: '',
            requirements: '',
            benefits: '',
            loading: false,
        }
    }

    componentDidMount() {
        const postRef = firebase.database().ref('career').orderByKey().equalTo(this.props.match.params.id);
        let onValueChange = postRef.on('value', (snapshot) => {
            let post = snapshot.val();
            let fetchedPost = [];
            for (let key in post) {
                fetchedPost.push({
                    ...post[key],
                    id: key
                })
            }
            this.setState({
                position_title: fetchedPost[0].position_title,
                location: fetchedPost[0].location,
                description: fetchedPost[0].description,
                requirements: fetchedPost[0].requirements,
                benefits: fetchedPost[0].benefits
            })
        })

        postRef.off('value', onValueChange);
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
        firebase.database().ref('career').child(this.props.match.params.id)
            .update({
                position_title: this.state.position_title,
                location: this.state.location,
                description: this.state.description,
                requirements: this.state.requirements,
                benefits: this.state.benefits,
                loading: false
            })
            this.props.history.push('/career');
    }

    handleDelete = (e) => {
        e.preventDefault();
        firebase.database().ref('career').child(this.props.match.params.id).remove();

        const appRef = firebase.database().ref('application').orderByChild('postKey').equalTo(this.props.match.params.id);
        appRef.on('value', (snapshot) => {
            let app = snapshot.val();
            for (let key in app) {
                firebase.database().ref('application').child(key).remove()
                firebase.storage().ref(`images/${app[key]['photoName']}`).delete()
                firebase.storage().ref(`pdfs/${app[key]['resumeName']}`).delete()
            }
        })
        this.props.history.push('/admin/applications');
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
                                >Edit</h1>    
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
                                        value={this.state.position_title} 
                                        onChange={this.handleChange}
                                        outline />
                                    <MDBInput 
                                        label='Location' 
                                        name='location'
                                        value={this.state.location} 
                                        onChange={this.handleChange}
                                        outline />
                                    <MDBInput 
                                        type="textarea" 
                                        label="Description" 
                                        name='description'
                                        style={{
                                            height: '100px'
                                        }}
                                        value={this.state.description} 
                                        onChange={this.handleChange}
                                        outline />
                                    <MDBInput 
                                        type="textarea" 
                                        label="Requirements" 
                                        name='requirements'
                                        style={{
                                            height: '100px'
                                        }}
                                        value={this.state.requirements} 
                                        onChange={this.handleChange}
                                        outline />  
                                    <MDBInput 
                                        type="textarea" 
                                        label="Benefits" 
                                        name='benefits'
                                        style={{
                                            height: '100px'
                                        }}
                                        value={this.state.benefits} 
                                        onChange={this.handleChange}
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
                                                <MDBIcon icon='edit' /> 
                                                {' '} Edit
                                            </MDBBtn>
                                        }
                                            <MDBBtn outline 
                                                className='btn-get-started'
                                                onClick={this.handleDelete}
                                            >
                                                <MDBIcon icon='trash' /> 
                                                {' '} Delete
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

export default EditPost;