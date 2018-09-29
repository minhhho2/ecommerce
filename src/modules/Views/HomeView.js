
import * as React from 'react';
import { observer } from 'mobx-react';
import { Container, Header, Divider } from 'semantic-ui-react';

import AnnouncementsView from '../Announcement/AnnouncementsView';

@observer
export default class Home extends React.Component {

    render() {
        return (
            <div>

                <Container className='m-3'>
                    <Header className='text-center' as='h1' content='Middle-Man' />
                    <Divider />
                    <p><strong>Middleman</strong>: a person or company which buys things from the people who produce them and sells them to the people who want to buy them.
                    </p>
                    <p> I like shopping online because its cheaper. </p>
                    <p> I buy things in large numbers so I can get it at a lower price</p>
                    <p> I sell whats left at a lower than retail price </p>
                    <p> I only post things that I actually use or have been requested by a lot of people</p>
                </Container>


                <AnnouncementsView />


            </div>
        )
    }
}