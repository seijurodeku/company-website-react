import React, { Component } from 'react';
import {
    MDBRow,
    MDBContainer,
    MDBCol,
    Animation,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody
} from 'mdbreact';
import Flippy, {FrontSide, BackSide} from 'react-flippy';

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            services: [
                {
                    img: '/images/services/coins.png',
                    title: 'Moru Paisa',
                    description: 'Person to Person (P2P) money transfer facility'
                },
                {
                    img: '/images/services/sales.png',
                    title: 'Moru Kinmel',
                    description: 'Person to Business (P2B) and Business to Person (B2P) \
                                    money transfer facility'
                },
                {
                    img: '/images/services/wallet.png',
                    title: 'Moru Wallet',
                    description: 'Digital wallet service provided by Pay Nep'
                },
                {
                    img: '/images/services/delivery.svg',
                    title: 'Moru Delivery',
                    description: 'P2B and B2B money transfer facility especially focused \
                    for the online transactions where the product is ordered online and the \
                    payment is made upon the delivery'
                },
                {
                    img: '/images/services/talab.png',
                    title: 'Moru Talab',
                    description: 'B2P money transfer facility where the business pays \
                    the money to people either employees or other stakeholders'
                },
                {
                    img: '/images/services/moru_online.png',
                    title: 'Moru Online',
                    description: 'P2B and B2B money transfer facility where the digital\
                    goods such as e-tickets, e-books, movies are bought and delivered online'
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
                            <h1 className='title'>Products & Services</h1>
                        </MDBRow>
                    </MDBContainer>
                </Animation>

                <MDBRow className='flex-container'>
                    {
                        this.state.services.map(service => (
                            <MDBCol md='6' lg='4'>
                                <Flippy
                                    flipOnHover={true} // default false
                                    flipOnClick={false} // default false
                                    flipDirection="horizontal" // horizontal or vertical
                                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                    // if you pass isFlipped prop component will be controlled component.
                                    // and other props, which will go to div
                                    style={{ 
                                        width: '20rem', 
                                        height: '16rem', 
                                        marginLeft: '25px' }} /// these are optional style, it is not necessary
                                    className='service-card '
                                >
                                    <FrontSide
                                    style={{
                                        backgroundColor: '#fff',
                                        marginTop: '20px'
                                    }}
                                    className='z-depth-1-half'
                                    >
                                        <MDBCardImage className='card-img' src={service.img} />
                                        <h4 className='card-heading'>{service.title}</h4>
                                    </FrontSide>
                                    <BackSide
                                    style={{ 
                                        backgroundColor: '#FF7F50'
                                    }}
                                    className='z-depth-1-half'
                                    >
                                        <MDBCardBody className='service-card-body'>
                                            <MDBCardTitle style={{'font-weight': '500'}}>{service.title}</MDBCardTitle>
                                            <MDBCardText>
                                                {service.description}
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </BackSide>
                                </Flippy>
                            </MDBCol>
                        ))
                    }                    
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Services;