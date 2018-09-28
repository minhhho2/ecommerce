import * as React from 'react';
import { observer } from 'mobx-react';
import { Container, Header, Grid, Form, Button } from 'semantic-ui-react'


import ProductForm from './ProductForm';
import ProductStore from './ProductStore';
import ProductsStore from './ProductsStore';

@observer
export default class ProductsView extends React.Component {

    openForm = () => {
        ProductStore.open = true;
    }

    componentDidMount() {
        ProductsStore.getProducts();
        //ProductsStore.addMockData();
    }

    render() {
        return (
            <Container>
                <ProductForm />

                <Button fluid color='teal' onClick={this.openForm}> New </Button>


                <Header as='h2'>Products</Header>
                <Grid doubling columns={4}>
                    {ProductsStore.products.map((product, index) => {
                        return (
                            <Grid.Column key={index}>
                                <div className="ui card">
                                    <a className="image">
                                        <img src={product.img[0]} />
                                    </a>
                                    <div className="content">
                                        <a className="header" href={'/products/' + product._id}>{product.name}</a>
                                        <div className="description">
                                            {product.description}
                                        </div>
                                        <div className="description">
                                            $ {product.price}
                                        </div>
                                    </div>
                                </div>
                            </Grid.Column>
                        )
                    })}
                </Grid>
                <br />
            </Container>
        )
    }
}
