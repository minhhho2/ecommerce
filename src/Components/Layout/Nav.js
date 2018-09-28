import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import AuthStore from '../Auth/AuthStore';

export default class Nav extends React.Component {

    state = {
        activeItem: 'home',
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLogin = () => {
        AuthStore.open = true;
        console.log("handle sign in");
    }

    render() {
        const { activeItem, activeAuth } = this.state

        return (
            <Container>
                <AuthForm />
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link} to='/'
                    />

                    <Menu.Item
                        name='test'
                        active={activeItem === 'test'}
                        onClick={this.handleItemClick}
                        as={Link} to='/test'
                    />

                    <Menu.Item
                        name='products'
                        active={activeItem === 'products'}
                        onClick={this.handleItemClick}
                        as={Link} to='/products'
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item name='sign in' active={activeItem === 'sign in'} onClick={this.handleLogin} />
                    </Menu.Menu>
                </Menu>
                <br />
                <br />
            </Container>

        )
    }
}