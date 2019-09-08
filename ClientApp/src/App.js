import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Inserir } from './components/Inserir';
import { ExibirClientes } from './components/ExibirClientes';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/Inserir' component={Inserir} />
                <Route path='/ExibirClientes' component={ExibirClientes} />
            </Layout>
        );
    }
}
