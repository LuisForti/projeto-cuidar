import React, { Component } from 'react';
import './footer.css';
import Logo from '../../assets/images/Logo.png';
import { Link } from "react-router-dom";

export default class Footer extends Component{

    render(){
        return(
            <footer id="footer">
                <img src={Logo} alt="Cuidar"/>
                <div>
                    <Link to="sobre"><p>Sobre nós</p></Link>
                </div>
            </footer>
        )
    }
}