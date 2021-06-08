import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Sobre from './components/sobreNos';
import Login from './components/login';
import Cadastro from './components/cadastro';
import ListaPets from './components/listarPet';
import DadosPet from './components/dadosPet';
import Historico from './components/historico';
import Perfil from './components/perfil';

export default class Rotas extends Component {
    render() {
        localStorage.Id = 0;
        localStorage.Senha = "";
        localStorage.isFuncionario = false;
        return (
            <Switch>
                <Route exact path="/sobre" component={Sobre} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/" component={ListaPets} />
                <Route exact path="/pets/:id" component={DadosPet} />
                <Route exact path="/historico" component={Historico} />
                <Route exact path="/perfil" component={Perfil} />
                <Redirect from='*' to='/' />
            </Switch>
        )
    }
}