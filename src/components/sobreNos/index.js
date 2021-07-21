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
                                <Card.Img src={Logo} alt="Logo" id="fotoLogo" />

                                <Card.Body>
                                    <Card.Title>O começo</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>

                        <a href="#oqQueremos" id="card-spin">
                            <Card class="card">
                                <Card.Img src="https://cdn.discordapp.com/attachments/813722841580830753/851992056750669834/cao-e-seu-dono.png" alt="Logo" />

                                <Card.Body>
                                    <Card.Title>O que queremos</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>

                        <a href="#ondeEstamos" id="card-spin">
                            <Card class="card">
                                <Card.Img src="https://cdn.discordapp.com/attachments/813722841580830753/852005003300306974/comportamento-cachorro-dono-20160618-001.png" alt="Logo" />

                                <Card.Body>
                                    <Card.Title>Onde nos encontrar?</Card.Title>
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
                        <div>
                            <p>
                                Começamos com uma simples ideia de <strong>ajudar os animais</strong>.
                                Animais de rua, maltratados, vivendo em condições horrendas, <strong id="textoForte">não era algo bom de se ver</strong>.
                                Foi daí que tivemos a ideia de dar a eles a chance de encontrar um lar e uma família.
                                Então, no dia 16 de fevereiro de 2021, <strong>surgiu o </strong>  <strong id="textoForte">projeto Cuidar</strong>.
                            </p>
                        </div>
                    </section>


                    <div class="oqQueremos">
                        <div id="oqQueremos" class="fundo">
                            <div id="texto2">
                                O que <strong id="textoForte"> nós queremos</strong>
                            </div>
                        </div>
                    </div>
                    <section class="oqQueremos">
                        <div>
                            <p>
                                <strong>Criado por</strong> <strong id="textoForte">3 adolescentes</strong>, esperamos que todos aqueles animais de rua possam encontrar suas famílias e que tenham uma ótima vida com eles.
                            </p>
                        </div>
                    </section>


                    <div class="ondeEstamos">
                        <div id="ondeEstamos" class="fundo">
                            <div id="texto2">
                                Onde <strong> nos </strong> <strong id="textoForte"> encontrar</strong>
                            </div>
                        </div>
                    </div>

                    <section class="ondeEstamos">
                    <div>
                        <p>
                            Ainda estamos definindo um local para ficar. <strong id="textoForte">A gente te avisa!</strong>
                        </p>
                    </div>
                </section>

                </main>               
            </>
        )
    }
}