import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import './sobreNos.css';

import Logo from '../../assets/images/Logo.png';
import Fundo from '../../assets/images/fundo.jpg';


export default class SobreNos extends Component {
    render() {

        return (
            <>
                <header>
                    <div class="fundo">
                        <div id="texto">
                            Uma <strong>ONG</strong> que cuida <strong id="textoForte">deles</strong>
                        </div>
                    </div>
                </header>

                <main>
                    <section id="cards">
                        
                            <a href="#comoComecamos" id="card-spin">
                                <Card class="card">
                                    <Card.Img src={Logo} alt="Logo" id="fotoLogo"/>

                                    <Card.Body>
                                        <Card.Title>O começo</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>

                            <a href="#" id="card-spin">
                                <Card class="card">
                                    <Card.Img src={Fundo} alt="Logo" />

                                    <Card.Body>
                                        <Card.Title>Teste</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>

                            <a href="#" id="card-spin">
                                <Card class="card">
                                    <Card.Img src={Fundo} alt="Logo" />

                                    <Card.Body>
                                        <Card.Title>Teste</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                    </section>

                    <div class="comoComecamos">
                        <div id="comoComecamos" class="fundo">
                            <div id="texto2">
                                <strong>Como </strong><strong id="textoForte"> começamos?</strong>
                            </div>
                        </div>
                    </div>

                    <section class="comoComecamos">
                        aaaaaaaaaaaaaaaaa
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </section>
                </main>

            </>
        )
    }
}