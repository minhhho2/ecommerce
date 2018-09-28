import { observable } from 'mobx';
import MockData from './MockData';
import ApiService from '../../Service/ApiService';

class ProductsStore {
    // Product fields
    @observable products = [];

    getProducts() {
        ApiService.get('/products')
            .then(res => this.products = res);
    }

    addMockData() {
        MockData.products.forEach(product => {
            console.log('product: ' + product);
            ApiService.post('/products', product);
        });
        
    }
}

export default new ProductsStore();