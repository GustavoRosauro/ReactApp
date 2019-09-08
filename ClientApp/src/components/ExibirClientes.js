import React, { Component } from 'react';
    
export class ExibirClientes extends Component {
    displayName = ExibirClientes.name;

    constructor(props) {
        super(props);
        this.idPage = 0;
        this.state = { clientes: [], loading: true };
        this.Dados();
    }
    Dados() {
        fetch('api/Clientes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ clientes: data, loading: false });
            });
    }
    Delete(id) {
        fetch(`api/Clientes/${id}`, {
            method: 'Delete'
        })
            .then(data => {
                this.Dados();
            });
        }
    Editar(id) {
        window.location.href = `/Edit/${id}`;
    }
    render() {
            let contents = this.state.loading ? <p><em>Loading....</em></p> :
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clientes.map(cliente =>
                            <tr key={cliente.id} >
                                <td>{cliente.nome}</td>
                                <td>{cliente.idade}</td>
                                <td><button className='btn btn-danger' onClick={this.Delete.bind(this, cliente.id)} >Exluir</button></td>
                                <td><button className='btn btn-warning' onClick={this.Editar.bind(this, cliente.id)}>Editar</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
        return (
            <div>
                <h1>Aplicação Crud Basico React</h1>
                {contents}
            </div>
        );
    }
}