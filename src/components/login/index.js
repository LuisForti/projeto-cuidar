import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

import LogIn from '../../assets/images/login.png'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosUsuarios: [],
            dadosFuncionarios: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/Usuario')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosUsuarios: result
                    });
                    console.log("buscaUsuarios:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )

        fetch('http://localhost:5000/api/Funcionario')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosFuncionarios: result
                    });
                    console.log("buscaFuncionarios:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        return (
            <div id="fundo-form">
                <div id="pagina-forms">

                    <img src={LogIn} alt="Imagem de login" id="img-login"/>

                    <Form id="login">
                        <h3>Faça seu login!</h3>

                        <br></br>

                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="email"/>
                        </Form.Group>
        
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="senha"/>
                        </Form.Group>

                        <Form.Row>
                                <Col xs={2}></Col>
                                <Col>
                                    <Button variant="primary" onClick={e => this.mudarParaFuncionario()} block>
                                        Entrar como Funcionário
                                    </Button>
                                </Col>
                                <Col xs={3}>
                                    <Button variant="primary" onClick={e => this.autenticar()} block>
                                        Entrar
                                    </Button>
                                </Col>
                            </Form.Row>
                    </Form>
                </div>
            </div>
        )
    }

    autenticar()
    {
        var emailEncontrado = false;
        var email = document.getElementById("email").value
        var senha = document.getElementById("senha").value
        this.state.dadosUsuarios.forEach(element => {
            if(element.emailUsuario == email)
            {
                if(element.senhaUsuario == senha)
                {
                    localStorage.Id = element.id
                    localStorage.Senha = senha
                    localStorage.isFuncionario = false;
                    emailEncontrado = true
                    window.alert("Login concluído!")
                }
                else
                {
                    window.alert("Senha incorreta!")
                    emailEncontrado = true
                }
            }
        });
        if(!emailEncontrado)
        {
            window.alert("Email não encontrado!")
        }
    }

    mudarParaFuncionario()
    {
        var emailEncontrado = false;
        var email = document.getElementById("email").value
        var senha = document.getElementById("senha").value
        this.state.dadosFuncionarios.forEach(element => {
            if(element.emailFuncionario == email)
            {
                console.log(element.senhaFuncionario)
                console.log(senha)
                if(element.senhaFuncionario == senha)
                {
                    localStorage.Id = element.id
                    localStorage.Senha = senha
                    localStorage.isFuncionario = true;
                    emailEncontrado = true
                    window.alert("Login concluído!")
                }
                else
                {
                    window.alert("Senha incorreta!")
                    emailEncontrado = true
                }
            }
        });
        if(!emailEncontrado)
        {
            window.alert("Email não encontrado!")
        }
    }
}