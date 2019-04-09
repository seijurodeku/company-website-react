import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardText,
    MDBCardTitle,
    MDBCardBody,
    Animation,
    MDBIcon
} from 'mdbreact';

import Image from 'react-bootstrap/Image';

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
            directors: [
                {
                    id: 0,
                    name: 'Achyut Raj Joshi',
                    title: 'CA of ICAI, FCA of ICAN',
                    img: '/images/team/arj.jpg',
                    facebook: 'https://www.facebook.com/achyut.joshi.37',
                    linkedin: '',
                    twitter: ''
                },
                {
                    id: 1,
                    name: 'Bhupendra Bhandari',
                    title: 'CA of ICAI, FCA of ICAN',
                    img: '/images/team/bb.jpg',
                    facebook: 'https://www.facebook.com/profile.php?id=1640509559',
                    linkedin: '',
                    twitter: ''
                },
                {
                    id: 2,
                    name: 'Manoj Ghimire',
                    title: 'Co-founder and CEO of nlocate',
                    img: '/images/team/mg.jpg',
                    facebook: 'https://www.facebook.com/ghimiremanoj',
                    linkedin: 'https://www.linkedin.com/in/manojghimire/',
                    twitter: ''
                },
                {
                    id: 3,
                    name: 'Purushottam Pd. Mainali',
                    title: 'CA Intermediate from ICAI',
                    img: '/images/team/pm.jpeg',
                    facebook: 'https://www.facebook.com/purushottam.mainali.9',
                    linkedin: '',
                    twitter: ''
                }
            ]
        }
    }

    render() {
        return(
            <MDBContainer className='text-center'>
                <Animation reveal type='bounceIn'>
                    <MDBContainer>
                        <MDBRow className='banner justify-content-center'>
                            <h1 className='title'>Directors</h1>
                        </MDBRow>
                    </MDBContainer>
                </Animation>

                <MDBContainer className='director-container'>
                    <MDBRow>
                        {this.state.directors.map(director => (
                            <MDBCol md='6' lg='3'>
                                <MDBCard className='team-card'>
                                <Image className='team-img' src={director.img} roundedCircle />
                                    <MDBCardBody>
                                        <MDBCardTitle className='team-name'>{director.name}</MDBCardTitle>
                                        <MDBCardText className='team-title'>
                                            {director.title}
                                        </MDBCardText>
                                        <div className='icon-bar-1'>
                                            <a className='facebook-1' href={director.facebook}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                            <a className='linkedin-1' href={director.linkedin}><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                            <a className='twitter-1' href={director.twitter}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>       
                            </MDBCol>
                        ))}                        
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        );
    }
}

export default Team;