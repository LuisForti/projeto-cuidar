import React, { Component } from 'react';
import "./Card.css"
import "./ListagemPet.css"

export default class Historico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosPet: [],
            dadosFuncionario1: [],
            dadosFuncionario: [],
            dadosUsuarioPet: [],
            dadosUsuarioFuncionario: [],
            dadosUsuario: [],
            dadosUsuario2: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/Pet')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosPet: result
                    });
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
                        dadosFuncionario1: result
                    });
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
                        dadosFuncionario: result
                    });
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
                },
                (error) => {
                    this.setState({ error });
                }
            )

        fetch('http://localhost:5000/api/UsuarioFuncionario')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosUsuarioFuncionario: result
                    });
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
                        dadosUsuario: result
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )

        fetch('http://localhost:5000/api/Usuario')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosUsuario2: result
                    });
                    var botaoIncluir = document.createElement("button")
                    botaoIncluir.onclick = e => this.abrirInsercao()
                    botaoIncluir.id = "inserir"
                    botaoIncluir.innerHTML = "Inserir Pet"
                    document.getElementById("lista").appendChild(botaoIncluir)
                    document.getElementById("botao").click()
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        return (
            <div id="lista">
                <div id="listagem-dos-pets">
                    <button id="botao" onClick={e => this.carregar()}>Carregar</button>
                </div>
            </div>
        )
    }

    carregar() {
        if (localStorage.isFuncionario == "false") {
            if (Number(localStorage.Id) == this.state.dadosUsuario.id) {
                if (localStorage.Senha != this.state.dadosUsuario.senhaUsuario) {
                    window.alert("Primeiro faça login!")
                    window.location = "/login"
                }
                else {
                    document.getElementById("botao").remove()
                    const { dadosUsuarioPet } = this.state;
                    const { dadosUsuarioFuncionario } = this.state;
                    const { dadosPet } = this.state;
                    const { dadosFuncionario } = this.state;

                    var divLista = document.createElement("div")

                    dadosUsuarioPet.map(
                        (usuarioPet) => {
                            var usuarioFuncionario;
                            var pet = { "id": 0 };
                            var funcionario = { "nomeFuncionario": "" };
                            if (usuarioPet.idUsuario == Number(localStorage.Id)) {
                                dadosPet.forEach(function (elemento) {
                                    if (usuarioPet.idPet == elemento.id) {
                                        pet = elemento
                                    }
                                })
                                dadosUsuarioFuncionario.forEach(function (element) {
                                    if (element.idUsuarioPet == usuarioPet.id) {
                                        usuarioFuncionario = element
                                        dadosFuncionario.forEach(function (elemento2) {
                                            if (usuarioFuncionario.idFuncionario == elemento2.id)
                                                funcionario = elemento2
                                        })
                                    }
                                })

                                var link = document.createElement("a")
                                var cardPrincipal = document.createElement("div")
                                var cardCorpo = document.createElement("div")
                                var cardImagem = document.createElement("img")
                                var cardDataAdocao = document.createElement("h4")
                                var cardHorarioAdocao = document.createElement("h4")
                                var cardNomePet = document.createElement("h5")
                                var cardNomeFuncionario = document.createElement("h5")
                                var cardEmailFuncionario = document.createElement("h5")

                                if (usuarioPet.dataDeAdocao == null) {
                                    cardDataAdocao.innerHTML = "Ainda no processo de adoção"
                                }
                                else {
                                    cardDataAdocao.innerHTML = "Data de adoção: " + usuarioPet.dataDeAdocao.slice(0, 1+usuarioPet.dataDeAdocao.length / 2)
                                    cardHorarioAdocao.innerHTML = "Horário de adoção: " + usuarioPet.dataDeAdocao.slice(usuarioPet.dataDeAdocao.length / 2)
                                }

                                cardImagem.src = pet.fotoPet
                                cardNomePet.innerHTML = "Nome do pet: " + pet.nomePet
                                if (usuarioFuncionario == undefined) {
                                    cardNomeFuncionario.innerHTML = "Nenhum funcionário está atendendo o pedido ainda!"
                                    cardEmailFuncionario.innerHTML = ""
                                }
                                else {
                                    cardNomeFuncionario.innerHTML = "Nome do funcionário: " + funcionario.nomeFuncionario
                                    cardEmailFuncionario.innerHTML = "Email do funcionário: " + funcionario.emailFuncionario
                                }

                                cardImagem.className = "card-img-top"
                                cardImagem.id = "image-pet"

                                cardDataAdocao.id = "titulo"
                                cardHorarioAdocao.id = "titulo"
                                cardNomePet.id = "titulo"
                                cardNomeFuncionario.id = "titulo"
                                cardEmailFuncionario.id = "titulo"

                                cardCorpo.appendChild(cardImagem)
                                cardCorpo.appendChild(cardDataAdocao)
                                cardCorpo.appendChild(cardHorarioAdocao)
                                cardCorpo.appendChild(cardNomePet)
                                cardCorpo.appendChild(cardNomeFuncionario)
                                cardCorpo.appendChild(cardEmailFuncionario)

                                cardCorpo.className = "card-body"

                                cardPrincipal.appendChild(cardCorpo)
                                cardPrincipal.className = "card"

                                link.href = "/pets/" + pet.id
                                link.className = "card-link card"

                                link.appendChild(cardPrincipal)

                                divLista.appendChild(link)
                            }
                        }
                    )
                    divLista.id = "listagem-dos-pets"
                    divLista.className = "divPrincipal"
                    document.getElementById("lista").appendChild(divLista)
                }
            }
            else {
                window.alert("Primeiro faça login!")
                window.location = "/login"
            }
        }
        else {
            if (Number(localStorage.Id) == this.state.dadosFuncionario1.id) {
                if (localStorage.Senha != this.state.dadosFuncionario1.senhaFuncionario) {
                    window.alert("Primeiro faça login!")
                    window.location = "/login"
                }
                else {
                    document.getElementById("botao").remove()

                    var botao = document.createElement("button")
                    botao.onclick = e => this.listar()
                    botao.id = "atualizar"
                    botao.innerHTML = "Pedidos disponíveis"
                    document.getElementById("lista").appendChild(botao)

                    const { dadosUsuarioPet } = this.state;
                    const { dadosUsuarioFuncionario } = this.state;
                    const { dadosPet } = this.state;
                    const { dadosUsuario2 } = this.state;

                    var divLista = document.createElement("div")

                    try{
                        document.getElementById("listagem-dos-pets").remove()
                    }
                    catch(erro)
                    {
                        document.getElementById("pagina-forms-criar").remove()
                    }

                    dadosUsuarioFuncionario.map(
                        (usuarioFuncionario) => {
                            var usuarioPet = { "dataDeAdocao": null };
                            var pet = { "id": 0 };
                            var usuario = { "nomeUsuario": "" };
                            if (usuarioFuncionario.idFuncionario == Number(localStorage.Id)) {
                                dadosUsuarioPet.forEach(function (element) {
                                    if (usuarioFuncionario.idUsuarioPet == element.id) {
                                        usuarioPet = element

                                        dadosPet.forEach(function (elemento) {
                                            if (usuarioPet.idPet == elemento.id) {
                                                pet = elemento
                                            }
                                        })

                                        dadosUsuario2.forEach(function (elemento2) {
                                            if (usuarioPet.idUsuario == elemento2.id) {
                                                usuario = elemento2
                                            }
                                        })
                                    }
                                })

                                var link = document.createElement("a")
                                var cardPrincipal = document.createElement("div")
                                var cardCorpo = document.createElement("div")
                                var cardImagem = document.createElement("img")
                                var cardDataAdocao = document.createElement("h4")
                                var cardHorarioAdocao = document.createElement("h4")
                                var cardNomePet = document.createElement("h5")
                                var cardNomeUsuario = document.createElement("h5")
                                var cardEmailUsuario = document.createElement("p")
                                var cardCEPUsuario = document.createElement("p")
                                var cardTelefoneUsuario = document.createElement("p")

                                var deveAdicionar = false
                                var botaoConcluir = document.createElement("button")

                                if (usuarioPet.dataDeAdocao == null) {
                                    cardDataAdocao.innerHTML = "Ainda no processo de adoção"
                                    cardHorarioAdocao.innerHTML = ""
                                    deveAdicionar = true
                                    botaoConcluir.onclick = e => this.concluir(usuarioFuncionario.id, usuarioPet.id, usuario.id, Number(localStorage.Id), pet.id)
                                    botaoConcluir.innerHTML = "Concluir Adoção"
                                }
                                else {
                                    cardDataAdocao.innerHTML = "Data de adoção: " + usuarioPet.dataDeAdocao.slice(0, 1+usuarioPet.dataDeAdocao.length / 2)
                                    cardHorarioAdocao.innerHTML = "Horário de adoção: " + usuarioPet.dataDeAdocao.slice(usuarioPet.dataDeAdocao.length / 2)
                                }

                                cardImagem.src = pet.fotoPet
                                cardNomePet.innerHTML = "Nome do pet: " + pet.nomePet

                                cardNomeUsuario.innerHTML = "Nome do cliente: " + usuario.nomeUsuario
                                cardEmailUsuario.innerHTML = "Email do cliente: " + usuario.emailUsuario
                                cardCEPUsuario.innerHTML = "CEP do cliente: " + usuario.enderecoUsuario
                                cardTelefoneUsuario.innerHTML = "Telefone do cliente: " + usuario.telefone

                                cardImagem.className = "card-img-top"
                                cardImagem.id = "image-pet"

                                cardDataAdocao.id = "titulo"
                                cardHorarioAdocao.id = "titulo"
                                cardNomePet.id = "titulo"
                                cardNomeUsuario.id = "titulo"
                                cardEmailUsuario.id = "titulo"
                                cardCEPUsuario.id = "titulo"
                                cardTelefoneUsuario.id = "titulo"

                                link.href = "/pets/" + pet.id

                                link.appendChild(cardImagem)

                                cardCorpo.appendChild(link)
                                cardCorpo.appendChild(cardDataAdocao)
                                cardCorpo.appendChild(cardHorarioAdocao)
                                cardCorpo.appendChild(cardNomePet)
                                cardCorpo.appendChild(cardNomeUsuario)
                                cardCorpo.appendChild(cardEmailUsuario)
                                cardCorpo.appendChild(cardCEPUsuario)
                                cardCorpo.appendChild(cardTelefoneUsuario)

                                if (deveAdicionar) {
                                    cardCorpo.appendChild(botaoConcluir)
                                }

                                cardCorpo.className = "card-body"

                                cardPrincipal.appendChild(cardCorpo)
                                cardPrincipal.className = "card-link card"

                                divLista.appendChild(cardPrincipal)
                            }
                        }
                    )
                    divLista.id = "listagem-dos-pets"
                    divLista.className = "divPrincipal"
                    document.getElementById("lista").appendChild(divLista)
                }
            }
            else {
                window.alert("Primeiro faça login!")
                window.location = "/login"
            }
        }
    }

    listar() {
        if (localStorage.isFuncionario == "true") {
            if (Number(localStorage.Id) == this.state.dadosFuncionario1.id) {
                if (localStorage.Senha != this.state.dadosFuncionario1.senhaFuncionario) {
                    window.alert("Primeiro faça login!")
                    window.location = "/login"
                }
                else {
                    try{
                        document.getElementById("listagem-dos-pets").remove()
                    }
                    catch(erro)
                    {
                        document.getElementById("pagina-forms-criar").remove()
                    }

                    var divLista = document.createElement("div")

                    document.getElementById("atualizar").remove()
                    var botao = document.createElement("button")
                    botao.onclick = e => this.carregar()
                    botao.id = "botao"
                    botao.innerHTML = "Seus pedidos"
                    document.getElementById("lista").appendChild(botao)

                    const { dadosUsuarioPet } = this.state;
                    const { dadosUsuarioFuncionario } = this.state;
                    const { dadosPet } = this.state;
                    const { dadosUsuario2 } = this.state;

                    dadosUsuarioPet.map(
                        (usuarioPet) => {
                            var jaProcessado = false
                            var pet = { "id": 0 };
                            var usuario = { "nomeUsuario": "" };

                            dadosUsuarioFuncionario.forEach(function (element) {
                                if (element.idUsuarioPet == usuarioPet.id) {
                                    jaProcessado = true
                                }
                            })

                            if (jaProcessado == false) {
                                dadosPet.forEach(function (elemento) {
                                    if (usuarioPet.idPet == elemento.id) {
                                        pet = elemento
                                    }
                                })

                                dadosUsuario2.forEach(function (elemento2) {
                                    if (usuarioPet.idUsuario == elemento2.id) {
                                        usuario = elemento2
                                    }
                                })

                                var link = document.createElement("a")
                                var cardPrincipal = document.createElement("div")
                                var cardCorpo = document.createElement("div")
                                var cardImagem = document.createElement("img")
                                var cardDataAdocao = document.createElement("h4")
                                var cardNomePet = document.createElement("h5")
                                var cardNomeUsuario = document.createElement("h5")
                                var cardEmailUsuario = document.createElement("p")
                                var cardCEPUsuario = document.createElement("p")
                                var cardTelefoneUsuario = document.createElement("p")
                                var botao = document.createElement("button")

                                if (usuarioPet.dataDeAdocao == null) {
                                    cardDataAdocao.innerHTML = "Ainda no processo de adoção"
                                }
                                else {
                                    cardDataAdocao.innerHTML = "Data de adoção: " + usuarioPet.dataDeAdocao
                                }

                                cardImagem.src = pet.fotoPet
                                cardNomePet.innerHTML = "Nome do pet: " + pet.nomePet

                                cardNomeUsuario.innerHTML = "Nome do cliente: " + usuario.nomeUsuario
                                cardEmailUsuario.innerHTML = "Email do cliente: " + usuario.emailUsuario
                                cardCEPUsuario.innerHTML = "CEP do cliente: " + usuario.enderecoUsuario
                                cardTelefoneUsuario.innerHTML = "Telefone do cliente: " + usuario.telefone

                                cardImagem.className = "card-img-top"
                                cardImagem.id = "image-pet"

                                cardDataAdocao.id = "titulo"
                                cardNomePet.id = "titulo"
                                cardNomeUsuario.id = "titulo"
                                cardEmailUsuario.id = "titulo"
                                cardCEPUsuario.id = "titulo"
                                cardTelefoneUsuario.id = "titulo"

                                botao.innerHTML = "Aceitar"
                                botao.onclick = e => this.aceitar(usuarioPet.id)

                                link.href = "/pets/" + pet.id

                                link.appendChild(cardImagem)

                                cardCorpo.appendChild(link)
                                cardCorpo.appendChild(cardDataAdocao)
                                cardCorpo.appendChild(cardNomePet)
                                cardCorpo.appendChild(cardNomeUsuario)
                                cardCorpo.appendChild(cardEmailUsuario)
                                cardCorpo.appendChild(cardCEPUsuario)
                                cardCorpo.appendChild(cardTelefoneUsuario)
                                cardCorpo.appendChild(botao)

                                cardCorpo.className = "card-body"

                                cardPrincipal.appendChild(cardCorpo)
                                cardPrincipal.className = "card-link card"

                                divLista.appendChild(cardPrincipal)
                            }
                        })
                    divLista.id = "listagem-dos-pets"
                    divLista.className = "divPrincipal"
                    document.getElementById("lista").appendChild(divLista)
                }
            }
            else {
                window.alert("Primeiro faça login!")
                window.location = "/login"
            }
        }
        else {
            window.alert("Você não é um funcionário!")
            window.alert("Para se voluntariar, fale conosco: (19) 99875-4227")
            window.location = "/login"
        }
    }

    getHorario() {
        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano4 = data.getFullYear();
        var hora = data.getHours();
        var min = data.getMinutes();
        var seg = data.getSeconds();

        // Formata a data e a hora (note o mês + 1)
        var str_data = dia + '/' + (mes + 1) + '/' + ano4 + " " + hora + ':' + min + ':' + seg;

        // Mostra o resultado
        return str_data;
    }

    concluir(idUsuarioFunc, idUsuarioPet, idUsuario, idFunc, idPet) {
        if (localStorage.Senha != this.state.dadosFuncionario1.senhaFuncionario) {
            window.alert("Primeiro faça login!")
            window.location = "/login"
        }
        else {
            const metodo = 'put';
            const url = 'http://localhost:5000/api/UsuarioFuncionario/' + idUsuarioFunc;
            fetch(url, {
                method: metodo,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Id": idUsuarioFunc, "idUsuarioPet": idUsuarioPet, "idFuncionario": idFunc, "dataDeAdocao": this.getHorario() })
            })
                .then(
                    resp => {
                        resp.json().then((data) => {
                        })
                    })

            const url2 = 'http://localhost:5000/api/UsuarioPet/' + idUsuarioPet;
            fetch(url2, {
                method: metodo,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Id": idUsuarioPet, "idUsuario": idUsuario, "idPet": idPet, "dataDeAdocao": this.getHorario() })
            })
                .then(
                    resp => {
                        resp.json().then((data) => {
                            window.alert("Processo de adoção concluído!")
                        })
                    })
        }
    }

    aceitar(id) {
        if (localStorage.Senha != this.state.dadosFuncionario1.senhaFuncionario) {
            window.alert("Primeiro faça login!")
            window.location = "/login"
        }
        else {
            const metodo = 'post';
            const url = 'http://localhost:5000/api/UsuarioFuncionario';
            fetch(url, {
                method: metodo,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Id": 0, "idUsuarioPet": id, "idFuncionario": Number(localStorage.Id), "dataDeAdocao": null })
            })
                .then(
                    resp => {
                        resp.json().then((data) => {
                            window.alert("Agora você cuida deste pedido!")
                        })
                    })
        }
    }

    abrirInsercao()
    {
        if (localStorage.isFuncionario == "true") {
            if (Number(localStorage.Id) == this.state.dadosFuncionario1.id) {
                if (localStorage.Senha != this.state.dadosFuncionario1.senhaFuncionario) {
                    window.alert("Primeiro faça login!")
                    window.location = "/login"
                }
                else{
                    try{
                        document.getElementById("listagem-dos-pets").remove()
                    }
                    catch(erro)
                    {
                        document.getElementById("pagina-forms-criar").remove()
                    }
                    var divPrincipal = document.createElement("div")
                    divPrincipal.id = "pagina-forms-criar"

                    var imagem = document.createElement("img")
                    var formulario = document.createElement("form")
                    var titulo = document.createElement("h3")
                    var espaco = document.createElement("br")
                    var nome = document.createElement("div")
                    var raca = document.createElement("div")
                    var idade = document.createElement("div")
                    var condicoesMedicas = document.createElement("div")
                    var descricao = document.createElement("div")
                    var foto = document.createElement("div")
                    var botaoInserir = document.createElement("input")

                    var textoNome = document.createElement("label")
                    var inputNome = document.createElement("input")
                    
                    var textoRaca = document.createElement("label")
                    var inputRaca = document.createElement("input")
                    
                    var textoIdade = document.createElement("label")
                    var inputIdade = document.createElement("input")
                    
                    var textoCondicoesMedicas = document.createElement("label")
                    var inputCondicoesMedicas = document.createElement("input")
                    
                    var textoDescricao = document.createElement("label")
                    var inputDescricao = document.createElement("input")
                    
                    var textoFoto = document.createElement("label")
                    var inputFoto = document.createElement("input")

                    imagem.src = "/projeto-cuidar/static/media/Logo (Coração).b4c50f54.png"
                    imagem.id = "img-login"

                    titulo.innerHTML = "Cadastrar Pet"

                    textoNome.innerHTML = "Nome"
                    textoNome.className = "form-label"
                    inputNome.id = "nome"
                    inputNome.className = "form-control"
                    inputNome.type = "text"

                    nome.appendChild(textoNome)
                    nome.appendChild(inputNome)

                    nome.className = "form-group"

                    textoRaca.innerHTML = "Raça"
                    textoRaca.className = "form-label"
                    inputRaca.id = "raca"
                    inputRaca.className = "form-control"
                    inputRaca.type = "text"

                    raca.appendChild(textoRaca)
                    raca.appendChild(inputRaca)

                    raca.className = "form-group"

                    textoIdade.innerHTML = "Idade"
                    textoIdade.className = "form-label"
                    inputIdade.id = "idade"
                    inputIdade.className = "form-control"
                    inputIdade.type = "number"

                    idade.appendChild(textoIdade)
                    idade.appendChild(inputIdade)

                    idade.className = "form-group"

                    textoCondicoesMedicas.innerHTML = "Condições Médicas"
                    textoCondicoesMedicas.className = "form-label"
                    inputCondicoesMedicas.id = "condicoesMedicas"
                    inputCondicoesMedicas.className = "form-control"
                    inputCondicoesMedicas.type = "text"

                    condicoesMedicas.appendChild(textoCondicoesMedicas)
                    condicoesMedicas.appendChild(inputCondicoesMedicas)

                    condicoesMedicas.className = "form-group"

                    textoDescricao.innerHTML = "Descrição"
                    textoDescricao.className = "form-label"
                    inputDescricao.id = "descricao"
                    inputDescricao.className = "form-control"
                    inputDescricao.type = "text"

                    descricao.appendChild(textoDescricao)
                    descricao.appendChild(inputDescricao)

                    descricao.className = "form-group"

                    textoFoto.innerHTML = "Foto"
                    textoFoto.className = "form-label"
                    inputFoto.id = "foto"
                    //inputFoto.className = "form-control"
                    inputFoto.type = "file"

                    botaoInserir.type = "button"
                    botaoInserir.className = "btn btn-primary"
                    botaoInserir.value = "Inserir"
                    botaoInserir.onclick = e => this.enviar()
                    
                    var divInterna1 = document.createElement("div")
                    divInterna1.className = "form-row"

                    var divInterna2 = document.createElement("div")
                    divInterna2.className = "col-9"

                    var divInterna3 = document.createElement("div")
                    divInterna3.className = "col"

                    divInterna2.appendChild(inputFoto)
                    divInterna3.appendChild(botaoInserir)

                    divInterna1.appendChild(divInterna2)
                    divInterna1.appendChild(divInterna3)

                    foto.appendChild(textoFoto)
                    foto.appendChild(divInterna1)

                    foto.className = "form-group"

                    formulario.appendChild(titulo)
                    formulario.appendChild(espaco)
                    formulario.appendChild(nome)
                    formulario.appendChild(raca)
                    formulario.appendChild(idade)
                    formulario.appendChild(condicoesMedicas)
                    formulario.appendChild(descricao)
                    formulario.appendChild(foto)
                    formulario.id = "cadastro"
                    
                    divPrincipal.appendChild(imagem)
                    divPrincipal.appendChild(formulario)

                    document.getElementById("lista").appendChild(divPrincipal)
                }
            }
            else{
                window.alert("Primeiro faça login!")
                window.location = "/login"
            }
        }
        else{
            window.alert("Você não é um funcionário!")
            window.location = "/login"
        }
    }

    enviar(){
        var erro = false;
        var nome = document.getElementById("nome").value
        var raca = document.getElementById("raca").value
        var idade = document.getElementById("idade").value
        var condicoesMedicas = document.getElementById("condicoesMedicas").value
        var descricao = document.getElementById("descricao").value
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

        if (nome.toString().length < 2 || nome.toString().length > 21) {
            window.alert("O nome deve ter entre 2 e 20 caracteres!")
            erro = true
        }
        if (raca.toString().length > 41) {
            window.alert("O email deve ter menos que 41 caracteres!")
            erro = true
        }
        console.log(idade)
        if (idade == "" || Number(idade) < 0) {
            window.alert("Dê uma idade válida!")
            erro = true
        }
        if (condicoesMedicas.toString().length > 201) {
            window.alert("As condições médicas devem ter menos que 200 caracteres!")
            erro = true
        }
        if (descricao.toString().length > 501) {
            window.alert("A descrição deve ter menos que 501 caracteres!")
            erro = true
        }

        this.state.dadosPet.forEach(element => {
            if (element.nomePet == nome) {
                erro = true
                window.alert("Já existe um pet com este nome!")
            }
        });
        if (erro == false) {
            const metodo = 'post';
            const url = 'http://localhost:5000/api/Pet';
            fetch(url, {
                method: metodo,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Id":0,"nomePet":nome,"fotoPet":foto,"raca":raca,"idade":Number(idade),"condicoesMedicas":condicoesMedicas,"descricao":descricao })
            })
                .then(
                    resp => {
                        resp.json().then((data) => {
                            console.log(data);
                            window.alert("Cadastrado com sucesso!")
                        })
                    })
        }
    }
}