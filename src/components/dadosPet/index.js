import React, { Component } from 'react';
import './dadosPet.css';
import { Link } from "react-router-dom";


export default class ListagemPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosPets: [],
            dadosUsuarioPet: [],
            dadosUsuarios: []
        };
    }
    componentDidMount() {
        const apiUrl = 'http://localhost:5000/api/pet/' + window.location.href.slice(27);
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosPets: result
                    });
                    console.log("buscaPets:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )

        fetch('http://localhost:5000/api/UsuarioPet')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosUsuarioPet: result
                    });
                    console.log("buscaUsuarioPet:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )

        fetch('http://localhost:5000/api/Usuario/' + localStorage.Id)
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
        const { dadosPets } = this.state;
        console.log(dadosPets);
        return (
            <div id="pagina">

                <div className="listagem-pet">
                    <img id="fotoPet" src={dadosPets.fotoPet}></img>

                    <div id="dados">
                        <h1 className="nome">{dadosPets.nomePet}</h1>
                        <p>Ra??a: {dadosPets.raca}</p>
                        <p>Idade: {dadosPets.idade}</p>
                        <p>Condi????es M??dicas: {dadosPets.condicoesMedicas}</p>
                        <p>Descri????o: {dadosPets.descricao}</p>
                        <button onClick={e => this.enviar()}>Adotar</button>
                    </div>
                </div>
            </div>
        )
    }

    enviar() {
        if (localStorage.isFuncionario == "false") {
            if (Number(localStorage.Id) == this.state.dadosUsuarios.id) {
                if (localStorage.Senha != this.state.dadosUsuarios.senhaUsuario) {
                    window.alert("Primeiro fa??a login!")
                }
                else {
                    var encontrouAlgo = "nada";
                    for (var i = 0; i < this.state.dadosUsuarioPet.length; i++) {
                        var atual = this.state.dadosUsuarioPet[i]
                        if (atual.idUsuario == Number(localStorage.Id)) {
                            if (atual.dataDeAdocao == null) {
                                encontrouAlgo = "usuario";
                                break;
                            }
                        }
                        else {
                            if (atual.idPet == this.state.dadosPets.id) {
                                encontrouAlgo = "pet";
                                break;
                            }
                        }
                    }
                    if (encontrouAlgo == "nada") {
                        const metodo = 'post';
                        const url = 'http://localhost:5000/api/UsuarioPet';
                        fetch(url, {
                            method: metodo,
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ "Id": 0, "idUsuario": Number(localStorage.Id), "idPet": this.state.dadosPets.id, "dataDeAdocao": null })
                        })
                            .then(
                                resp => {
                                    resp.json().then((data) => {
                                        console.log(data);
                                        window.alert("Pedido conclu??do com sucesso!")
                                    })
                                })
                    }
                    else {
                        if (encontrouAlgo == "usuario") {
                            window.alert("Voc?? j?? est?? no processo de ado????o de um animal!")
                        }
                        else {
                            window.alert("O animal j?? est?? em um processo de ado????o!")
                        }
                    }
                }
            }
            else {
                window.alert("Primeiro fa??a login!")
            }
        }
        else
        {
            window.alert("Funcion??rios n??o podem adotar animais com suas contas de funcion??rios!")
        }
    }
}