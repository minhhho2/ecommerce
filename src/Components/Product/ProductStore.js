import { observable } from 'mobx';
import ApiService from '../../Service/ApiService';
import ProductsStore from './ProductsStore';

class ProductStore {
    // Product fields
    @observable name = '';
    @observable price = 0;
    @observable description = '';
    @observable urlsValues = [];

    // Helpers
    @observable numUrls = 1;
    @observable open = false;
    @observable urls = [];
    @observable editDisabled = true;

    setup() {
        console.log('product store setup');
    }

    reset() {
        this.name = '';
        this.price = 0;
        this.description = '';
        this.urlsValues = [];
        this.numUrls = 1;
        this.open = false;
        this.editDisabled = true;
    }

    // CRUD Operations
    create() {
        ApiService.post('/products', {
            name: this.name,
            price: this.price,
            description: this.description,
            img: this.urlsValues.slice()
        })
            .then(() => ProductsStore.getProducts());
    }

    read(id) {
        ApiService.get('/products/' + id)
            .then(res => {
                this.name = res.name;
                this.price = res.price;
                this.description = res.description;
                this.urlsValues = res.img;
            });
    }

    update(id) {
        ApiService.put('/products' + id, {
            name: this.name,
            price: this.price,
            description: this.description,
            img: this.urlsValues.slice()
        })
            .then(() => ProductsStore.getProducts());
    }
    
    delete(id) {
        ApiService.delete('/products/' + id)
            .then(res => console.log(res));
    }
}

export default new ProductStore();