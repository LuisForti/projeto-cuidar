import React, {Component} from "react";

import Card from 'react-bootstrap/Card';
//{require(this.props.fotoPet)}

import './Card.css'
import { Link } from "react-router-dom";


export default class CardPet extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            dadosUsuarioPet: []
        };
    }

    componentDidMount()
    {
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
        var encontrouAlgo = "nada";
        for(var i = 0; i < this.state.dadosUsuarioPet.length; i++)
        {
            var atual = this.state.dadosUsuarioPet[i]
            
            if(this.props.petId == atual.idPet)
            {
                encontrouAlgo = "pet";
                break;
            }
        }
        if(encontrouAlgo == "nada")
        {
            return <Link to={"pets/" + this.props.petId} class="card-link">
                <Card class="card">
                    <Card.Body>
                        <Card.Img variant="top" src={window.location.origin + "/" + this.props.fotoPet} id="image-pet"/>
                        <Card.Title id="titulo">{this.props.nomePet}</Card.Title>
                        <footer>
                            <small className="text-muted">
                                <cite title="Source Title">{this.props.raca}</cite>
                            </small>
                        </footer>
                    </Card.Body>
                </Card>
            </Link>
        }
        else
        {
            return null;
        }
    }
}