import * as React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react'

export default class Headers extends React.Component {

    render() {

        return (
            <div className='ui inverted header segment'>
                <br />
                <br />
                <Container text textAlign='center'>
                    <Header as='h1' className='App-header' inverted>
                        <Icon name='phone' size='huge' color='teal' />
                        Your Call
                    </Header>
                </Container>
                <br />
            </div>
        )
    }
}
