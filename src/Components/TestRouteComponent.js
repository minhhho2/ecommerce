import * as React from 'react';
import { Header, Button } from 'semantic-ui-react'
import ApiService from '../Service/ApiService';

export default class TestRouteComponent extends React.Component {
    state = {
        bears: [{
            name: 'bear 1',
            age: 2
        }]
    }
    componentDidMount() {
        // get data
        this.loadBearFromServer();
    }

    componentWillUnmount() {
        // delete field data if needed
    }

    loadBearFromServer = () => {
        ApiService.get('/bears').then(res => this.setState({bears: res}));
    }

    render() {
        return (
            <div>

                <Header as='h2'>Second Header</Header>
                <Header as='h2'> Before Header</Header>

                <ul>
                    {this.state.bears.map((bear, index) =>
                        <li key={index}>name: {bear.name} age: {bear.age}</li>)
                    }
                </ul>
                <Header as='h2'> After Header</Header>
                <Button primary onClick={this.loadBearFromServer}> Update </Button>

            </div>
        )
    }
}
