import React, { Component } from 'react';
export class Inserir extends Component {    
    constructor(props) {
        super(props);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.Enviar = this.Enviar.bind(this);
        this.usuario = {
            nome: "",
            idade:0
        };
    }
    onChangeUser(e) {
        this.usuario.nome = e.target.value;
    }
    onChangeAge(e) {
        this.usuario.idade = e.target.value;
    }
    Enviar() {
        fetch(`/api/Clientes`, {
            method: 'POST',
            body: JSON.stringify(this.usuario),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => {
            alert('ok');
        }).catch(err => console.log(err));
    }
    render() {
        return (
            <div>
            <h1>Inserir</h1>
                <label>Informe seu Nome</label>
                <input type="text" className="form-control"  onChange={this.onChangeUser} />
                <label>Informe sua Idade</label>
                <input className="form-control" onChange={this.onChangeAge} />
                <button className="btn btn-success" onClick={this.Enviar}>Salvar</button>
            </div>
        );
    }
}