import { makeAutoObservable } from "mobx";

class ServiceStore {
    constructor() {
        makeAutoObservable(this);
    }
}

export default new ServiceStore();