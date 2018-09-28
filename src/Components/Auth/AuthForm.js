import * as React from 'react';
import { observer } from 'mobx-react';
import { Modal, Container, Form, Header, Icon, Divider } from 'semantic-ui-react';
import AuthStore from './AuthStore';

@observer
export default class AuthForm extends React.Component {

    close = () => AuthStore.reset();

    handleChangePassword = (e) => AuthStore.password = e.target.value;
    handleChangeUsername = (e) => AuthStore.username = e.target.value;

    handleLogin = () => AuthStore.login();
    handleRegister = () => AuthStore.register();
    handleRegistering = () => AuthStore.registering = true;
    handleLogging = () => AuthStore.registering = false;


    render() {
        const { open, registering, username, password } = AuthStore;

        const modalStyle = {
            top: '40%',
            left: '25%',
            position: 'fixed'
        }

        const authButton = registering ?
            <Form.Button color='teal' fluid onClick={this.handleRegister}> Register </Form.Button> :
            <Form.Button color='teal' fluid onClick={this.handleLogin}> Login </Form.Button>;

        const authSelection = registering ?
            <Header as='h3' onClick={this.handleLogging}> Already registered? Click to Log in! </Header> :
            <Header as='h3' onClick={this.handleRegistering}> New User? Click to Register! </Header>;

        return (
            <Modal open={open} style={modalStyle} onClose={this.close}>
                <Modal.Header color='blue'>
                    <Icon name='users' />
                    Log-in to your account
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form onSubmit={this.handleRegister}>
                            <Form.Input
                                placeholder='Username'
                                type='text'
                                value={username}
                                icon='hand spock' iconPosition='left'
                                onChange={this.handleChangeUsername}
                            />
                            <Form.Input
                                placeholder='Passowrd'
                                type='password'
                                value={password}
                                icon='hand lizard' iconPosition='left'
                                onChange={this.handleChangePassword}
                            />
                            {authButton}
                        </Form>

                        <Container textAlign='center'>
                            <br />
                            <Divider />
                            {authSelection}
                        </Container>

                    </Modal.Description>
                </Modal.Content>
            </Modal>


        )
    }
}

/*

<Form.Input
                                placeholder='First name'
                                type='text'
                                icon='hand spock'
                                iconPosition='left'
                            />
                            <Form.Input
                                placeholder='Last name'
                                type='text'
                                icon='hand lizard'
                                iconPosition='left'
                            />
                            <Form.Input
                                placeholder='E-mail address'
                                type='email'
                                icon='mail'
                                iconPosition='left'
                            />
                            <Form.Input
                                placeholder='Password'
                                type='password'
                                icon='lock'
                                iconPosition='left'
                            />
                            <Form.Input
                                placeholder='Phone number'
                                type='phone'
                                icon='phone'
                                iconPosition='left'
                            />

                            */