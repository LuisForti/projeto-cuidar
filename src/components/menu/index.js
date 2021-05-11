import React, {Component} from 'react';

import Logo from '../../assets/images/Logo.png';
import Navbar from 'react-bootstrap/Navbar';

import './Menu.css';

export default class Menu extends Component{

    render(){
        return <nav class="navbar navbar-expand-lg navbar-light fixed-top">

        <a class="navbar-brand"><img src="Logo.png" alt="Cuidar" id="logo"/></a>
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
  
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#" id="btnLogin">Login</a></li>
                <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#" id="btnCriarConta">Cadastrar</a> </li>
            </ul>
  
        </div>
      </nav>
    }
}