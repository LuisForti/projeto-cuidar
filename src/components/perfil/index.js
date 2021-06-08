import React, { Component } from 'react';
import './dadosPet.css';
import { Link } from "react-router-dom";
import foto from "../../assets/images/facebookperfil.jpg"


export default class ListagemPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosUsuarios: [],
            dadosFuncionario: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:5000/api/Usuario/' + localStorage.Id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosUsuarios: result
                    });
                    console.log("buscaUsuario:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )
        fetch('http://localhost:5000/api/Funcionario/' + localStorage.Id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosFuncionario: result
                    });
                    console.log("buscaFuncionario:" + result);
                    document.getElementById("temporario").click()
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        return (
            <div id="pagina">
                <button id="temporario" onClick={e => this.carregar()} />
            </div>
        )
    }

    carregar() {
        if (localStorage.isFuncionario == "false") {
            const { dadosUsuarios } = this.state;
            if (localStorage.Senha == dadosUsuarios.senhaUsuario) {
                document.getElementById("temporario").remove()
                var divPrincipal = document.getElementById("pagina")

                var novaDiv = document.createElement("div")
                var imagem = document.createElement("img")
                var outraDiv = document.createElement("div")
                var nome = document.createElement("h1")
                var email = document.createElement("p")
                var telefone = document.createElement("p")
                var cep = document.createElement("p")

                novaDiv.className = "listagem-pet"
                imagem.id = "fotoPet"
                outraDiv.id = "dados"
                nome.className = "nome"

                if (dadosUsuarios.fotoUsuario == null) {
                    imagem.src = foto
                }
                else {
                    imagem.src = dadosUsuarios.fotoUsuario
                }
                nome.innerHTML = dadosUsuarios.nomeUsuario
                email.innerHTML = "Email: " + dadosUsuarios.emailUsuario
                telefone.innerHTML = "Telefone: (" + dadosUsuarios.telefone.toString().slice(0, 2) + ") " + dadosUsuarios.telefone.slice(2, 7) + "-" + dadosUsuarios.telefone.slice(7)
                cep.innerHTML = "CEP: " + dadosUsuarios.enderecoUsuario

                outraDiv.appendChild(nome)
                outraDiv.appendChild(email)
                outraDiv.appendChild(telefone)
                outraDiv.appendChild(cep)

                novaDiv.appendChild(imagem)
                novaDiv.appendChild(outraDiv)

                divPrincipal.appendChild(novaDiv)
            }
            else {
                window.alert("Faça login primeiro!")
                window.location = "/login"
            }
        }
        else
        {
            const { dadosFuncionario } = this.state;
            console.log(localStorage.Senha)
            console.log(dadosFuncionario.senhaFuncionario)
            if (localStorage.Senha == dadosFuncionario.senhaFuncionario) {
                document.getElementById("temporario").remove()
                var divPrincipal = document.getElementById("pagina")

                var novaDiv = document.createElement("div")
                var imagem = document.createElement("img")
                var outraDiv = document.createElement("div")
                var nome = document.createElement("h1")
                var email = document.createElement("p")

                novaDiv.className = "listagem-pet"
                imagem.id = "fotoPet"
                outraDiv.id = "dados"
                nome.className = "nome"

                if (dadosFuncionario.fotoFuncionario == null) {
                    imagem.src = foto
                }
                else {
                    imagem.src = dadosFuncionario.fotoFuncionario
                }
                nome.innerHTML = dadosFuncionario.nomeFuncionario
                email.innerHTML = "Email: " + dadosFuncionario.emailFuncionario

                outraDiv.appendChild(nome)
                outraDiv.appendChild(email)

                novaDiv.appendChild(imagem)
                novaDiv.appendChild(outraDiv)

                divPrincipal.appendChild(novaDiv)
            }
            else {
                window.alert("Faça login primeiro!")
                window.location = "/login"
            }
        }
    }
}