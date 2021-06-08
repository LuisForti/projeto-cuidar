import React, {Component} from 'react';
import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form'

import Logo from '../../assets/images/Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';


    export default function Menu(){
        return <div>
            <Navbar expand="lg" id="navbar">
                <Navbar.Brand>
                    <img src={Logo} alt="Cuidar" id="logo"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                        <Nav.Link><Link to="/cadastro">Criar Conta</Link></Nav.Link>
                        <Nav.Link><Link to="/">Animais</Link></Nav.Link>
                        <Nav.Link><Link to="/historico">Histórico de Adoção</Link></Nav.Link>
                        <Nav.Link><Link to="/perfil">Perfil</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }