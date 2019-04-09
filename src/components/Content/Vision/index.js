import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard
} from 'mdbreact';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class Vision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vission: [
                {
                    title: 'Our Vision',
                    subtitle: 'To be the most trusted digital payment service provider,\
                    across Nepal and become a household name for mobile rupee.'
                },
                {
                    title: 'Mission Statement',
                    subtitle: 'To be the leading payment service provider, delivering world class service through the blending of state-of-the-art technology and \
                      visionary management in partnership with competent and committed staff, to achieve reliable system of services to all with sustainable \
                      value addition to all our stakeholders.'
                },
                {
                    title: 'Mission Statement',
                    subtitle: 'We are committed to do this mission while ensuring the \
                    highest levels of ethical standards, transparency, professional \
                    integrity, corporate governance and regulatory compliance.'
                }
            ]
        }
    }

    render() {
        return (
            <MDBContainer>
                <Carousel 
                        showThumbs={false} 
                        infiniteLoop={true}
                        autoPlay={true}
                        showStatus={false}
                        showArrows={false}
                        showIndicators={false}
                >
                    {this.state.vission.map(vision => (
                        <MDBRow>
                            <MDBCol>
                                <MDBCard className='card-vision '>
                                    <h1 className='vision-title'>
                                        {vision.title}
                                    </h1>
                                    <p className='vision-subtitle'>
                                        {vision.subtitle}
                                    </p>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    ))}
                </Carousel>
                
            </MDBContainer>
        );
    }
};

export default Vision;