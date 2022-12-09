import { makeAutoObservable } from "mobx";

class TourStore {
    constructor() {
        makeAutoObservable(this);
    }
}

export default new TourStore();