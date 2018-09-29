import { observable, action } from 'mobx';

class AppRouterStore {
    @observable activeTab = 'home';
    @observable contextRef = null;

    @action
    setup = () => {
        this.activeTab = 'home';
    }

    @action
    handleTabClick = (e, { name }) => {
        this.activeTab = name;
    }

}

export default new AppRouterStore();