import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    Animation
} from 'mdbreact';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction : [
                {
                    title: 'Person To Person (P2P)',
                    subtitle: 'Moru Paisa'
                },
                {
                    title: 'Person To Business (P2B)',
                    subtitle: 'Moru Kinmel, Moru Delivery, Moru Online'
                },
                {
                    title: 'Business To Person (B2P)',
                    subtitle: 'Moru Talab'
                },
                {
                    title: 'Business To Business (B2B)',
                    subtitle: 'Moru Kinmel, Moru Delivery, Moru Online'
                }
            ]
        }
    }
    render() {
        return (
            <MDBContainer className='text-center'>
                <Animation reveal type='bounceIn'>
                    <MDBContainer>
                        <MDBRow className='banner justify-content-center'>
                            <h1 className='title'>About Us</h1>
                        </MDBRow>
                    </MDBContainer>
                </Animation>

                <MDBContainer>
                    <MDBRow className='justify-content-center'>
                        <MDBCol md='6' className='about-img'>
                            <Animation reveal type='slideInLeft'>
                                <img 
                                    className='about-image'
                                    src='/images/phone-1.png'
                                    alt='about-image'
                                />
                            </Animation>
                        </MDBCol>

                        <MDBCol md='6' className='about-description'>
                            {/* <MDBIcon icon="quote-left" size="3x" pull="left" border /> */}
                            <Animation reveal type='slideInRight'>
                                <p>
                                    <h2><span style={{color: "#FF7F50"}}>Pay Nep - </span>Payment Service Provider (PSP) </h2>
                                    <p class="text-justify">Established in 2017 under the Companies Act 2053 with a paid up capital of 60 Million NRS,
                                    Pay Nep Pvt. Ltd. is a payment service provider (PSP) which provide mobile based, web based and 
                                    iOS based will collaborate with the various banks and financial institutions licenced by
                                    Nepal Rastra Bank to operate as an electronic payment service provider in Nepal. 
                                    </p>

                                    <p class="text-justify">
                                    As a Payment service provider (PSP), 
                                    Pay Nep will offer shops online services for accepting electronic payments by a variety of payment methods including 
                                    credit card, bank-based payments such as direct debit, bank transfer, and real-time bank transfer 
                                    based on online banking using a software as a service model and form a single payment gateway
                                    for their clients (merchants) to multiple payment methods. It will operate under 
                                    “MoRu” brand name for commercial purpose.
                                    </p>

                                    <p class="text-justify">
                                    “Moru” is the combination of two acronyms “Mo" and “Ru”,
                                    representing Mobile Rupee(Digital Currency) when used together.
                                    </p>
                                </p>
                            </Animation>
                        </MDBCol>
                    </MDBRow>

                    {/* <MDBRow>
                        {this.state.transaction.map(txn => (
                            <MDBCol md='3' lg='3' sm='6' className='mb-4'>
                                <MDBCard color="white" text="black" className="text-center card-txn">
                                    <MDBCardBody>
                                        <MDBCardTitle>{txn.title}</MDBCardTitle>
                                        <MDBCardText>
                                            {txn.subtitle}
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))}
                    </MDBRow> */}
                </MDBContainer>
            </MDBContainer>
        );
    }
};

export default About;