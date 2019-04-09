import React, { Component } from 'react';

import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
} from 'mdbreact';

const Modal = (props) => {
    return(
        <MDBContainer>
            <MDBModal 
                isOpen={props.modal} 
                toggle={props.toggleModal} 
                side 
                position='top-right'
                // backdrop={false}
            >
                <MDBModalBody className='text-center'>
                    {props.message}<br/>
                    <MDBBtn
                        color='primary' 
                        onClick={props.toggleModal}
                    >OK</MDBBtn>
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    );
}

export default Modal;