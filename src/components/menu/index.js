import React, {Component} from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

import Form from 'react-bootstrap/Form'

import Logo from '../../assets/images/Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';


    function ModalLogin(props) {
        return(
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                    </Form>
                </Modal.Body>
            </Modal>
        )
    }

    function ModalCriar(props){

        return <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Criar Conta
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>

                </Form> 
            </Modal.Body>
        </Modal>
    }

    export default function Menu(){
        const [modalLogin, setLoginShow] = React.useState(false);
        const [modalCriar, setCriarShow] = React.useState(false);

        return <div>

            <ModalLogin show={modalLogin} onHide={() => setLoginShow(false)}/>
            <ModalCriar show={modalCriar} onHide={() => setCriarShow(false)}/>

            <Navbar expand="lg">
                <Navbar.Brand>
                    <img src={Logo} alt="Cuidar" id="logo"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => setLoginShow(true)}>Login</Nav.Link>
                        <Nav.Link onClick={() => setCriarShow(true)}>Criar Conta</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }