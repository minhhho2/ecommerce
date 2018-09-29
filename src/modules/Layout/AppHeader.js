import * as React from 'react';
import { Header, Icon } from 'semantic-ui-react'

export default class AppHeader extends React.Component {
    render() {
        return (
            <div className='p-5 text-center bg-dark'>
                <Header className='text-light' as='h1'>
                    Middle  <Icon className='male'/>Man
                </Header>
            </div>
        )
    }
}