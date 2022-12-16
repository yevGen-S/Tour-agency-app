import { makeAutoObservable } from 'mobx';

class TourStore {
    tours: any;
    /**
     * id of selected tour
     */
    selectedTour: any;
    selectedTourPoints: any;
    selectedTourImage: any;

    sellsReport: any

    constructor() {
        makeAutoObservable(this);
        this.tours = [];
        this.selectedTour = {};
        this.sellsReport = [];
    }

    setSelected(tour: any) {
        this.selectedTour = tour;
    }

    setTours(tours: any) {
        this.tours = [...tours];
    }

    setSelectedTourPoints(tourPoinst: any) {
        this.selectedTourPoints = [...tourPoinst];
    }

    changeTour(id: string, changeTour: any) {
        this.tours.map((tour: any) => {
            if (tour.id === id) {
                return changeTour;
            }
            return tour;
        });
    }

    setSelectedTourImage(src: any) {
        this.selectedTourImage = src;
    }

    setSellsReport(report: any) {
        this.sellsReport = [...report];
    }
}

export default new TourStore();
