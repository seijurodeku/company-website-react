import React, { Component } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

import Home from './Home';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Team from './Team';
import Subscribe from './Subscribe';
import Vision from './Vision';
import Contact from './Contact';
import Navigation from '../Navigation';
import FooterPage from '../Footer';

class ContentPage extends Component {
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
            <div>
                <Navigation />
                <section id='home'>
                    <div>
                        <Home />
                    </div>
                </section>

                <secion id='about'>
                    <div className='section'>
                        <About />
                    </div>
                </secion>

                {/* <div>
                    <Carousel 
                        showThumbs={false} 
                        infiniteLoop={true}
                        autoPlay={true}
                        showStatus={false}
                    >
                        {this.state.transaction.map(txn => (
                            <Streak 
                                title={txn.title}
                                subtitle={txn.subtitle} 
                            />
                        ))} 
                    </Carousel>                       
                </div> */}

                <section id='services' className='bg-grey'>
                    <div className='section'>
                        <Services />
                    </div>
                </section>

                <section id='gallery'>
                    <div className='section'>
                        <Gallery />
                    </div>
                </section>

                <section id='team' className='bg-grey'>
                    <div className='section'>
                        <Team />
                    </div>
                </section>

                <section id='vision'>
                    <div className='section bg-img'>
                        <Vision />
                    </div>
                </section>

                <div className='subscribe'>
                    <Subscribe />
                </div>

                <section id='contact'>
                    <div className='section bg-grey'>
                        <Contact />
                    </div>
                </section>

                <FooterPage />
            </div>
        );
    }
}

export default ContentPage;