import { observable, action } from 'mobx';
import MockAnnouncements from './MockAnnouncements';

class AnnouncementsStore {

    @observable announcements = [];
    
    @action
    setup = () => {
        this.announcements = MockAnnouncements.slice();
    }

}

export default new AnnouncementsStore();