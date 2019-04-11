import React from 'react';

import { Link } from 'react-router-dom';

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
                    <Link to={props.path}>
                        <MDBBtn
                            color='primary' 
                            onClick={props.toggleModal}
                        >OK</MDBBtn>
                    </Link>
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    );
}

export default Modal;