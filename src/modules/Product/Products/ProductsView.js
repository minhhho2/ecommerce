import * as React from 'react';
import { observer } from 'mobx-react';
import { Card, Image, Button, Container } from 'semantic-ui-react'

import ProductsStore from './ProductsStore';

@observer
export default class ProductsView extends React.Component {

    componentDidMount() {
        ProductsStore.setup();
    }

    onRedirectProduct = (e) => {
        console.log(e.target.id);
        this.props.history.push('/product/' + e.target.id);
    }

    render() {
        return (

            <div className='p-5'>
                <Card.Group itemsPerRow={4}>
                    {ProductsStore.products.map(product => {
                        return (
                            <Card className='text-center' key={product.id}>
                                <Card.Content>
                                    <Card.Header>{product.name}</Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <Card.Meta>Some Meta Data</Card.Meta>
                                </Card.Content>
                                <Image src={product.img[0]} />
                                <Card.Content>
                                    <Card.Description>{product.description.substring(0, 100) + ' ... '}</Card.Description>
                                    <Button
                                        id={product.id}
                                        className='m-3' content='VIEW FULL PRODUCT'
                                        onClick={this.onRedirectProduct}
                                    />
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>

            </div>

        )
    }
}
