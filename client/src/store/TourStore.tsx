import { makeAutoObservable } from 'mobx';

class TourStore {
    tours: any;
    filteredListOfTours: any;
    /**
     * id of selected tour
     */
    selectedTour: any;
    selectedTourPoints: any;
    selectedTourImage: any;

    sellsReport: any;

    newTour: any;

    cities: any;
    hotels: any;

    constructor() {
        makeAutoObservable(this);
        this.tours = [];
        this.selectedTour = {};
        this.sellsReport = [];
        this.newTour = {};
        this.cities = [];
        this.filteredListOfTours = [];
        this.hotels = [];
    }

    setCities(data: any) {
        this.cities = [...data];
    }

    setHotels(data: any) {
        this.hotels = [...data];
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

    filterTours(input: string) {
        this.filteredListOfTours = this.tours.filter((tour: any) => {
            const concatString = Object.values(tour).join('');
            if (
                concatString
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase())
            ) {
                return tour;
            }
        });
    }
}

export default new TourStore();
