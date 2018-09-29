import { observable, action } from 'mobx';
import MockData from '../MockData';

class ProductsStore {
    // Product fields
    @observable products = [];


    @action
    setup = () => {
        this.products = MockData.products;

    }
}

export default new ProductsStore();