import { makeAutoObservable } from 'mobx';

class ServiceStore {
    services : any;
    /**
     * id of selected tour
     */
    selectedService: any;
    selectedServiceImage: any;

    constructor() {
        makeAutoObservable(this);
        this.services = [];
        this.selectedServiceImage = {};
    }

    setSelected(service: any) {
        this.selectedServiceImage = service;
    }

    setServices(services: any) {
        this.services = [...services];
    }

    changeService(id: string, changeService: any) {
        this.services.map((tour: any) => {
            if (tour.id === id) {
                return changeService;
            }
            return tour;
        });
    }
}

export default new ServiceStore();
