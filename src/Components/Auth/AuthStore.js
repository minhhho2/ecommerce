import { observable } from 'mobx';
import ApiService from '../../Service/ApiService';

class AuthStore {
    @observable username = '';
    @observable password = '';

    @observable open = false;
    @observable registering = false;

    reset() {
        this.username = '';
        this.password = '';
        this.open = false;
        this.registering = false;
    }

    register() {
        ApiService.post('/register', {
            username: this.username, 
            password: this.password
        })
    }

    login() {
        ApiService.post('/login', { 
            username: this.username, 
            password: this.password
        });
    }
}

export default new AuthStore();