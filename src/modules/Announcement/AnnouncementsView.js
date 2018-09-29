

import * as React from 'react';
import { observer } from 'mobx-react';
import { Header, Divider, Container } from 'semantic-ui-react'
import AnnouncementsStore from './AnnouncementsStore';


@observer
export default class AnnouncementsView extends React.Component {

    componentDidMount() {
        AnnouncementsStore.setup();
    }

    render() {

        const { announcements } = AnnouncementsStore;

        return (
            <div>

                <Container className='m-3'>
                    <Header className='text-center' as='h2' content='Latest News' />
                    <Divider />

                    {announcements.map((announcement, index) => {
                        return (
                            <div className='text-left' key={index}>
                                <Header as='h3' content={announcement.name} />
                                <p>{announcement.date}</p>
                                <p>{announcement.description}</p>
                                <Divider />
                            </div>
                        )
                    })}
                </Container>
            </div>
        )
    }
}
