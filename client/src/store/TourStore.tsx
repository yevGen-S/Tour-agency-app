import { makeAutoObservable } from 'mobx';

interface ITour {}

class TourStore {
    tours: [ITour];

    constructor() {
        makeAutoObservable(this);
        this.tours = [{}];
    }
}

export default new TourStore();
