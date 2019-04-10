import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import API from '../../api';

import {
    MDBContainer,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBCardImage
} from 'mdbreact'

class DetailPost extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            detail: [],
            loading: true
        }
    }

    componentDidMount() {
        API.get('/career.json')
            .then(res => {
                console.log(res)
                const fetchedPost = [];
                for (let key in res.data) {
                    if(key == this.props.match.params.id){
                        fetchedPost.push({
                            ...res.data[key],
                            id: key
                        })    
                    }
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
        return(
            <div className='bg-brown-cp'>
                {loading 
                ?
                    <MDBIcon 
                        icon="cog" 
                        spin 
                        size="3x" 
                        fixed
                        className='loading-detail' />
                    :
                    this.state.detail.map(det => (
                    <MDBContainer>
                        <MDBCard className='detail-card'>
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
                                    <Link to='/career' >
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
                                <MDBCol className='padd-detail'>
                                    <h3 className='post-title'>{det.position_title}</h3>
                                    <span className='small'>{det.location}</span>
                                </MDBCol>
                            </MDBRow> 
                            <hr/>
                            
                            <MDBRow>
                                <MDBCol className='padd-detail'>
                                    <h6 className='career-heading'>DESCRIPTION</h6>
                                    <p className='text-justify career-desc'>
                                        {det.description}
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            <hr/>

                            <MDBRow>
                                <MDBCol className='padd-detail'>
                                    <h6 className='career-heading'>REQUIREMENTS</h6>
                                        <ul>
                                            {det.requirements.split(/\n/).map((el, i) => <li key={i} className='career-desc bullet'>{el}</li>)}
                                        </ul>
                                </MDBCol>
                            </MDBRow>
                            <hr/>

                            <MDBRow>
                                <MDBCol className='padd-detail'>
                                    <h6 className='career-heading'>BENEFITS</h6>
                                    <ul>
                                    {det.benefits.split(/\n/).map((el, i) => <li key={i} className='career-desc bullet'>{el}</li>)}
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            
                            <MDBRow>
                                <MDBCol>
                                    <Link to={'/career/' + det.id +'/apply/'}>                                    
                                        <MDBBtn outline 
                                            className='btn-get-started career-apply'
                                            // onClick={this.handleSubmit}
                                        >
                                            Apply for this job
                                        </MDBBtn>
                                    </Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBContainer>
                    ))}
            </div>
        );
    }
}

export default DetailPost;