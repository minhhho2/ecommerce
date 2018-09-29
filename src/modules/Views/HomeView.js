
import * as React from 'react';
import { observer } from 'mobx-react';
import { Container, Header, Divider, Segment } from 'semantic-ui-react';

import AnnouncementsView from '../Announcement/AnnouncementsView';

@observer
export default class Home extends React.Component {

    render() {

        const imgUrl = 'https://images.unsplash.com/photo-1493952113579-dfa2cfd5398b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=672627cf88d91039c782e362f99332d0&auto=format&fit=crop&w=1350&q=80';

        const styles = {
            introContainer: {
                backgroundImage: `url(${imgUrl})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `auto`
            }
        };
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