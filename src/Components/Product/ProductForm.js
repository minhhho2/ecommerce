import * as React from 'react';
import { observer } from 'mobx-react';
import { Container, Form, Header, Divider, Button, Modal } from 'semantic-ui-react'
import ProductStore from './ProductStore';

@observer
export default class ProductForm extends React.Component {

    componentDidMount() {
        ProductStore.setup();
    }

    handleChangeName = (e) => { ProductStore.name = e.target.value }
    handleChangeDescription = (e) => { ProductStore.description = e.target.value }
    handleChangePrice = (e) => { ProductStore.price = e.target.value }
    handleChangeUrls = (e) => { ProductStore.urlsValues[e.target.id] = e.target.value; }

    handleAddNewUrl = () => {
        var index = ProductStore.urls.length;
        ProductStore.urls.push(
            <Form.Input
                id={index}
                key={index}
                placeholder='url'
                type='text'
                onChange={this.handleChangeUrls}
            />
        );
    }

    close = () => {
        ProductStore.open = false;
    }
    submit = () => {
        ProductStore.create();
        this.close();
    }


    render() {
        const { name, price, description, urls, open, numUrls } = ProductStore;


        const modalStyle = {
            position: 'absolute',
            top: '50%',
            left: '20%'
        };

        return (
            <Modal open={open} onClose={this.close} style={modalStyle}>
                <Modal.Header color='blue'>Create New Product</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Input
                                placeholder='name'
                                label='name'
                                type='text'
                                value={name}
                                onChange={this.handleChangeName}
                            />
                            <Form.Input
                                placeholder='price'
                                type='number'
                                label='price'
                                value={price}
                                onChange={this.handleChangePrice}
                            />
                            <Form.Input
                                placeholder='description'
                                type='text'
                                label='description'
                                value={description}
                                onChange={this.handleChangeDescription}
                            />

                            <Button onClick={this.handleAddNewUrl}>
                                Add New Url
                            </Button>
                            <Divider />

                            {ProductStore.urls.slice()}

                            <Form.Group widths="equal">
                                <Form.Button
                                    type='button'
                                    positive fluid
                                    onClick={this.submit}
                                > Submit
                                </Form.Button>
                                <Form.Button
                                    negative fluid
                                    onClick={this.close}
                                > Cancel
                                </Form.Button>
                            </Form.Group>
                        </Form>

                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}
