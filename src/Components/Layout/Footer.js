import * as React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react'

export default class Footer extends React.Component {

    render() {
        const clickers = [
            { href: "https://www.facebook.com/minh.nguyen.14661", icon: 'facebook square icon huge' },
            { href: "https://github.com/minhhho2", icon: 'git square icon huge' },
            { href: "https://www.linkedin.com", icon: 'linkedin square icon huge' }
        ];

        return (
            <div>
                <br />
                <br />

                <div className='ui inverted vertical footer segment'>
                    <Container text textAlign='center'>
                        <br />
                        <Header as='h3' className='inverted'>&copy; Copyright 2017 | All rights reserved | Minh D. Nguyen</Header>

                        <br />
                        <Divider inverted />
                        <br />

                        {clickers.map((click, index) => {
                            return <a key={index} href={click.href}> <i className={click.icon}></i></a>
                        })}

                        <br />
                        <br />
                    </Container>
                </div >
            </div>
        )
    }
}