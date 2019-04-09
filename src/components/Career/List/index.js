import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API from '../../api';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBIcon,
    MDBCardImage
} from 'mdbreact';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
            loading: true
        }
    }

    componentDidMount() {
        API.get('/career.json')
            .then(res => {
                const fetchedPost = [];
                for (let key in res.data) {
                    fetchedPost.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({
                    detail: fetchedPost,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render() {
        const { loading } = this.state;
        return (
            <div className='bg-brown'>
                <MDBContainer>
                    <MDBCard className='career-card'>
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

                        <MDBRow>
                            <MDBCol md='6' className='padd-content'>
                                <h6 className='career-heading about-content'>ABOUT MORU</h6>
                                <p className='text-justify about-content'>"Moru " is envisioned with the idea of being the most 
                                    trusted digital payment service provider, across Nepal 
                                    and become a household name for mobile rupee. It is now 
                                    equipped with highly experienced group of promoters,
                                    who will mentor the organization, stirring it towards 
                                    its vision. At present "Moru" seeks to hire committed,
                                    competent and creative individuals, who shall journey
                                    with the organization's inception. </p>
                            </MDBCol>
                            <MDBCol md='6' className='padd-content career-list'>
                                <h6 className='career-heading'>CURRENT OPENINGS</h6>
                                { loading
                                    ?
                                    <MDBIcon 
                                        icon="cog" 
                                        spin 
                                        size="3x" 
                                        fixed
                                        className='loading' />
                                    :
                                    this.state.detail.map(det => (
                                        <div>
                                            <Link to={'/career/' + det.id}>
                                                <h5 className='post-title'>
                                                    {det.position_title}
                                                </h5>
                                            </Link>                                                
                                            
                                            <p className='small'>{det.location}</p>
                                        </div>
                                    ))
                                }
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </div>          
        );
    }
}

export default PostList;