import * as React from 'react';
import { observer } from 'mobx-react';
import { Container, Header, Button, Input, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

import ProductForm from './ProductForm';
import ProductStore from './ProductStore';

@observer
export default class ProductView extends React.Component {

    componentDidMount() {
        ProductStore.read(this.props.match.params.id);
    }

    edit = () => {
        ProductStore.editDisabled = false;
    }

    save = () => {
        ProductStore.editDisabled = true;
        ProductStore.update(this.props.match.params.id);
    }

    delete = () => {
        ProductStore.delete(this.props.match.params.id);
        this.props.history.push('/products');
        ProductStore.reset();
    }

    handleChangeName = (e) => { ProductStore.name = e.target.value }
    handleChangeDescription = (e) => { ProductStore.description = e.target.value }
    handleChangePrice = (e) => { ProductStore.price = e.target.value }

    render() {


        const { name, price, description, urlsValues, editDisabled } = ProductStore;

        const editButton = editDisabled ?
            <Button onClick={this.edit}> Edit </Button> :
            <Button onClick={this.save}> Save </Button>;

        /*
        Grid 1 x 2
        scroll bar
        add to cart
        */
        return (
            <Container>


                {editButton}
                <Button type='button' onClick={this.delete}> Delete </Button>
                <Button type='button' > Add to cart </Button>

                <Header as='h2'>Product Name</Header>
                <Form>
                    <Form.Input
                        disabled={editDisabled}
                        label='name'
                        type='text'
                        value={name}
                        onChange={this.handleChangeName}
                    />
                    <Form.Input
                        disabled={editDisabled}
                        label='name'
                        type='number'
                        value={price}
                        onChange={this.handleChangePrice}
                    />
                    <Form.Input
                        disabled={editDisabled}
                        label='name'
                        type='text'
                        value={description}
                        onChange={this.handleChangeDescription}
                    />
                    <Form.Input
                        disabled={editDisabled}
                        label='quantity'
                        type='number'
                        value={1}
                    />
                </Form>
            </Container>
        )
    }
}
