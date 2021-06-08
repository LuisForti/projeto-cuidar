import React, { Component } from 'react';
import './ListagemPet.css';
import CardPet from '../cardPet';


export default class ListagemPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosPets: [],
            dadosUsuarioPet: []
        };
    }
    componentDidMount() {
        const apiUrl = 'http://localhost:5000/api/pet';
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
                    console.log(error);
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
    }

    render() {
        const { dadosPets } = this.state;
        console.log("Lista de pets " + dadosPets);
        return (
            <div className="listagem-pets">
                <h1 className="tituloListagem">Pets para a adoção</h1>

                <div  id="listagem-dos-pets">
                {(dadosPets.sort((a,b) => 
                    (a.nomePet > b.nomePet) ? 1 : ((b.nomePet > a.nomePet) ? -1 : 0))
                    ).map(
                        (pet) => <CardPet fotoPet={pet.fotoPet} nomePet={pet.nomePet} petId={pet.id} raca={pet.raca}/>
                    )
                }
                </div>
            </div>
        )
    }
}