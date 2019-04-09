import React, { Component } from 'react';
// import CoverFlow from 'react-coverflow';
// import { StyleRoot } from 'radium';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import {
    MDBContainer,
    Animation,
    MDBRow
} from 'mdbreact'

class Gallery extends Component {
    screenshots = [
        { id: 0, img: '/images/screenshots/1.jpg', alt: 'screenshot1' },
        { id: 1, img: '/images/screenshots/2.jpg', alt: 'screenshot2' },
        { id: 2, img: '/images/screenshots/3.jpg', alt: 'screenshot3' },
        { id: 3, img: '/images/screenshots/4.jpg', alt: 'screenshot4' },
        { id: 4, img: '/images/screenshots/5.jpg', alt: 'screenshot5' },
        { id: 5, img: '/images/screenshots/6.jpg', alt: 'screenshot6' },
        { id: 6, img: '/images/screenshots/7.jpg', alt: 'screenshot7' },
        { id: 7, img: '/images/screenshots/8.jpg', alt: 'screenshot8' },
        { id: 8, img: '/images/screenshots/9.jpg', alt: 'screenshot9' },
        { id: 9, img: '/images/screenshots/10.jpg', alt: 'screenshot10' },
        { id: 10, img: '/images/screenshots/11.jpg', alt: 'screenshot11' },
        { id: 11, img: '/images/screenshots/12.jpg', alt: 'screenshot12' }
    ]
    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 3 } },
        galleryItems: this.galleryItems()
    }

    slideTo = (i) => this.setState({ currentIndex: i })

    onSlideChanged = (e) => this.setState({ currentIndex: e.item })

    galleryItems () {
        return this.screenshots.map((i) => 
        <img 
            src={i.img} 
            style={{
                marginTop: '2em',
                height: '500px',
                'box-shadow': '8px 8px 10px #aaa',
                'border-radius': '25px',
                transform: 'scale(0.9)'
            }}
        />)
    }

    render() {
        const { galleryItems, responsive, currentIndex } = this.state
        return (
            <MDBContainer className='text-center'>
                <Animation reveal type='bounceIn'>
                    <MDBContainer>
                        <MDBRow className='banner justify-content-center'>
                            <h1 className='title'>App Gallery</h1>
                        </MDBRow>
                    </MDBContainer>
                </Animation>
                <Animation reveal type='slideInLeft'>
                    <MDBContainer>
                        <MDBRow className='justify-content-center '>
                            <AliceCarousel
                                dotsDisabled={false}
                                buttonsDisabled={true}
                                items={galleryItems}
                                responsive={responsive}
                                autoPlayInterval={2000}
                                autoPlayDirection="ltr"
                                autoPlay={true}
                                fadeOutAnimation={true}
                                mouseDragEnabled={true}
                                slideToIndex={currentIndex}
                                onSlideChanged={this.onSlideChanged}
                            />
    
                            {/* <StyleRoot className='coverflow'>
                                <CoverFlow
                                    displayQuantityOfSide={2}
                                    enableHeading={false}
                                    media={{
                                        '@media (max-width: 900px)':{
                                            width: '600px',
                                            height: '350px'
                                        },
                                        '@media (min-width: 900px)':{
                                            width: '1110px',
                                            height: '600px'
                                        }
                                    }}
                                >
                                    {this.state.screenshots.map(screenshot => (
                                        <img
                                            src={screenshot.img}
                                            style={{
                                                width: '100%',
                                                padding: '5%',
                                                borderRadius: '5px'
                                            }}
                                            alt={screenshot.alt}
                                        />
                                    ))}
                                </CoverFlow>
                            </StyleRoot> */}

                        </MDBRow>
                    </MDBContainer>
                </Animation>
            </MDBContainer>
        )
    }
}

export default Gallery;