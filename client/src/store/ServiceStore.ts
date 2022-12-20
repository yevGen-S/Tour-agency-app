import { makeAutoObservable } from 'mobx';

class ServiceStore {
    services: any;
    /**
     * id of selected tour
     */
    selectedService: any;
    selectedServiceImage: any;

    constructor() {
        makeAutoObservable(this);
        this.services = [];
        this.selectedServiceImage = '';
        this.tourPoints = [];
    }

    setSelected(service: any) {
        this.selectedService = service;
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

    filteredServices = [];

    filter(city: string) {
        this.filteredServices = this.services.filter((service: any) => {
            if (service.city === city) {
                return service;
            }
        });
    }

    tourPoints: any;

    addTourPoints(newPoint: any) {
        this.tourPoints.push(newPoint);
    }

    setSelectedServiceImage(image: any) {
        this.selectedServiceImage = image;
    }
}

export default new ServiceStore();
