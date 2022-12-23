import { makeAutoObservable } from 'mobx';

class HotelStore {
    constructor() {
        makeAutoObservable(this);
    }
}

export default new HotelStore();
