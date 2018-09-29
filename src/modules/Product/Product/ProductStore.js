import { observable, action } from 'mobx';
import MockData from '../MockData';

class ProductStore {

    @observable product = {};
    
    @action
    setup = (id) => {
        this.product = MockData.products.filter(product => {
            return product.id === parseInt(id);
        })[0];
    }
}

export default new ProductStore();