import React, { Component } from 'react';
import './ListagemPet.css';
import CardPet from '../cardPet';

export default class ListagemPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosPets: []
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
                }
            )
    }
    render() {
        const { dadosPets } = this.state;
        return (
            <div className="listagem">
                <h1 className="tituloListagem">Pets para a adoção</h1>
                {}
                {dadosPets.map(
                    (pet) => <CardPet fotoPet={pet.fotoPet} nomePet={pet.nomePet} />
                ) }
            </div>
        )
    }
}