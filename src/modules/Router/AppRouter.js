// import dependencies
import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// import custom components
import HomeView from '../Views/HomeView';
import ErrorView from '../Views/ErrorView';
import AppRouterStore from './AppRouterStore';

import ProductsView from '../Product/Products/ProductsView';
import ProductView from '../Product/Product/ProductView';

import AnnouncementsView from '../Announcement/AnnouncementsView';


@observer
export default class AppRouter extends React.Component {

    /* Set up initial states */
    componentDidMount() { AppRouterStore.setup(); }
    
    render() {

        const { activeTab, contextRef } = AppRouterStore;

        return (
            <div>

                {/* Router for containing UI links and Url Routes */}
                <BrowserRouter>

                    <div>

                            {/* semantic UI components for linking to url paths */}
                            <Menu size='massive'>
                                <Menu.Item
                                    name='home' active={activeTab === 'home'}
                                    onClick={AppRouterStore.handleTabClick}
                                    as={Link} to='/'
                                />

                                <Menu.Item
                                    name='products' active={activeTab === 'products'}
                                    onClick={AppRouterStore.handleTabClick}
                                    as={Link} to='/products'
                                />

                                <Menu.Item
                                    name='announcements' active={activeTab === 'announcements'}
                                    onClick={AppRouterStore.handleTabClick}
                                    as={Link} to='/announcements'
                                />
                            </Menu>

                        {/* Switch Component that holds Routes */}
                        <br />
                        <Switch>
                            <Route exact path='/' component={HomeView} />
                            <Route exact path='/products' component={ProductsView} />
                            <Route exact path="/products/:id" component={ProductView} />
                            <Route exact path='/announcements' component={AnnouncementsView} />
                            <Route component={ErrorView} />
                        </Switch>
                        <br />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
