import { observable, action } from 'mobx';
import MockAnnouncements from './MockAnnouncements';

class AnnouncementsStore {

    @observable announcements = [];
    
    @action
    setup = (size) => {
        this.announcements = MockAnnouncements.slice();
    }

}

export default new AnnouncementsStore();