import React, { Component } from 'react';

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:{ nome: '', idade: 0 }
        };
        this.setNome = this.setNome.bind(this);
        this.setIdade = this.setIdade.bind(this);
        this.Editar = this.Editar.bind(this);
        this.id = this.props.match.params.id;
        fetch(`api/Clientes/${this.id}`, {
            method: 'GET'
        }).then(response => response.json())
            .then(result => {
                this.setState({ usuario: result});
        });
    }
    setNome(e) {
        this.setState({
            usuario: { id: parseInt(this.id), nome: e.target.value, idade: this.state.usuario.idade }
        });
    }
    setIdade(e) {
        this.setState({
            usuario: { id: parseInt(this.id), nome: this.state.usuario.nome  ,idade: e.target.value}
        }); 
    }
    Editar() {
        fetch('api/Clientes/' + this.id, {
            method: 'PUT',
            body: JSON.stringify(this.state.usuario),
            mode: 'cors',
            headers: {id: parseInt(this.id),
                'Content-Type': 'application/json'
            }
        }).then(res=> {
            window.location.href = '/ExibirClientes';
            //console.log(res);
        }
        ).catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <label>Nome</label>
                <input className='form-control' value={this.state.usuario.nome} type="text" onChange={this.setNome} />
                <label>Idade</label>
                <input className='form-control' value={this.state.usuario.idade} type="number" onChange={this.setIdade} />
                <button className='btn btn-success' onClick={this.Editar}>Salvar</button>
            </div>
        );
    }
}