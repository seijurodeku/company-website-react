import React, { Component } from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends Component {
    render() {
        return (
            <Footer
                color='stylish-color-dark'
                className='footer-section font-small footer'
            >
                <div className='footer-copyright text-center text-white py-3'>
                    <Container fluid>
                        &copy; Copyright{" "} <strong>{new Date().getFullYear()},{" "}</strong>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://paynep.com.np"
                            className='company'
                        >
                        Pay Nep Pvt. Ltd.
                        </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;