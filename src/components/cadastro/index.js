import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import './cadastro.css';
import Coracao from '../../assets/images/Logo (Coração).png';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosUsuarios: []
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
                    console.log("buscaUsuarioPet:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        return (
            <div id="fundo-form">
                <div id="pagina-forms-criar">

                    <img src={Coracao} alt="Imagem de login" id="img-login" />

                    <Form id="cadastro">
                        <h3>Crie sua conta!</h3>

                        <br></br>

                        <Form.Group controlId="formGroupNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Insira seu nome completo" id="nome" />
                        </Form.Group>

                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="email" />
                        </Form.Group>

                        <Form.Group controlId="formGroupCep">
                            <Form.Label>Cep</Form.Label>
                            <Form.Control type="number" placeholder="Insira o cep" id="cep" />
                        </Form.Group>

                        <Form.Group controlId="formGroupTelefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="19999999999" id="telefone" />
                        </Form.Group>

                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Link da Foto (opcional)</Form.Label>
                            <Form.Control type="text" size="sm" id="foto" accept="image/png, image/jpeg" />
                        </Form.Group>


                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Row>
                                <Col xs={9}>
                                    <Form.Control type="password" placeholder="Password" id="senha" />
                                </Col>

                                <Col>
                                    <Button variant="primary" onClick={e => this.autenticar()}>
                                        Entrar
                                    </Button>
                                </Col>
                            </Form.Row>

                        </Form.Group>


                    </Form>
                </div>
            </div>
        )
    }

    autenticar() {
        var erro = false;
        var nome = document.getElementById("nome").value
        var email = document.getElementById("email").value
        var cep = document.getElementById("cep").value
        var telefone = document.getElementById("telefone").value
        var senha = document.getElementById("senha").value
        var foto = document.getElementById("foto").value

        if (foto != "") {
            var tipoDeFoto = foto.toString().slice(foto.toString().length - 4)
            if (tipoDeFoto != "jpeg" && tipoDeFoto != ".png") {
                window.alert("Dê uma foto jpg ou png!")
                erro = true
            }
        }
        else
        {
            foto = null
        }

        if (nome.toString().length < 2 || nome.toString().length > 51) {
            window.alert("O nome deve ter entre 2 e 50 caracteres!")
            erro = true
        }
        if (email.toString().length > 41) {
            window.alert("O email deve ter menos que 41 caracteres!")
            erro = true
        }
        if (email == "") {
            window.alert("Digite um email!")
            erro = true
        }
        if (cep.toString().length != 8) {
            window.alert("O CEP deve ter 8 caracteres!")
            erro = true
        }
        if (telefone.toString().length != 11) {
            window.alert("O telefone deve ter 11 caracteres!")
            erro = true
        }
        if (senha.toString().length > 51) {
            window.alert("A senha deve ter menos que 51 caracteres!")
            erro = true
        }
        if (senha.toString().length < 5) {
            window.alert("A senha deve ter pelo menos 5 caracteres!")
            erro = true
        }

        this.state.dadosUsuarios.forEach(element => {
            if (element.emailUsuario == email) {
                erro = true
                window.alert("Já existe um usuário com este email!")
            }
            if (element.nomeUsuario == nome) {
                erro = true
                window.alert("Já existe um usuário com este nome!")
            }
        });
        if (erro == false) {
            const metodo = 'post';
            const url = 'http://localhost:5000/api/Usuario';
            fetch(url, {
                method: metodo,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Id": 0, "nomeUsuario": nome, "emailUsuario": email, "telefone": telefone, "enderecoUsuario": cep, "senhaUsuario": senha, "fotoUsuario": foto })
            })
                .then(
                    resp => {
                        resp.json().then((data) => {
                            console.log(data);
                            window.alert("Cadastrado com sucesso!")
                            localStorage.Id = data.id
                            localStorage.Senha = senha
                        })
                    })
        }
    }
}