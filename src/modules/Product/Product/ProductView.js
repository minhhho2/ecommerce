import * as React from 'react';
import { observer } from 'mobx-react';
import { Header, Divider, Item } from 'semantic-ui-react'

import ProductStore from './ProductStore';

@observer
export default class ProductView extends React.Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        ProductStore.setup(params.id);
    }

    render() {

        const { product } = ProductStore;
        return (
            <div className='p-5'>
                <Item.Group>
                    <Item>
                        <Item.Image size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>Product Name: {product.name} </Item.Header>
                            <Item.Meta>Meta Data: </Item.Meta>
                            <Item.Description>
                                <p>Product Description: {product.description}</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>

            </div>

        )
    }
}
