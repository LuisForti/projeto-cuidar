import React, {Component} from "react";
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'


export default class LinhaAluno extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return <Card>
            <Card.Body>
                <Card.Img variant="top" src={this.props.fotoPet}/>
                <Card.Title>{this.props.nomePet}</Card.Title>
            </Card.Body>
        </Card>
    }
}