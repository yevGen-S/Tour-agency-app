import { makeAutoObservable } from 'mobx';

class ServiceStore {
    services: any;
    /**
     * id of selected tour
     */
    selectedService: any;
    selectedServiceImage: any;
    // commentsAndResponses: any;
    responses: any;
    feedbacks: any;

    constructor() {
        makeAutoObservable(this);
        this.services = [];
        this.selectedServiceImage = '';
        this.tourPoints = [];
        // this.commentsAndResponses = [];
        this.responses = [];
        this.feedbacks = [];
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

    // setAllCommentsAndResponses(data: any) {
    //     this.commentsAndResponses = [...data];
    // }

    setFeedbacks(data: any) {
        this.feedbacks = [...data];
    }

    setResponses(data: any) {
        this.responses = [...data];
    }
}

export default new ServiceStore();
