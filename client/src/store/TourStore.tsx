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
    newTourPoints: any;

    cities: any;
    hotels: any;

    bookedTours: any;

    searchInput: string;
    filteredHotels: any;
    tourWithTourPoints: any;

    constructor() {
        makeAutoObservable(this);
        this.tours = [];
        this.selectedTour = {};
        this.sellsReport = [];
        this.newTour = {};
        this.cities = [];
        this.filteredListOfTours = [];
        this.hotels = [];
        this.filteredHotels = [];
        this.tourWithTourPoints = {};
        this.bookedTours = [];
        this.newTourPoints = [];
        this.searchInput = '';
    }

    setCities(data: any) {
        this.cities = [...data];
    }

    setHotels(data: any) {
        this.hotels = [...data];
    }

    setBookedTours(data: any) {
        this.bookedTours = [...data];
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
        this.searchInput = input;
        this.filteredListOfTours = this.tours.filter((tour: any) => {
            const concatString = Object.values(tour).join('');
            if (
                concatString
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase())
            ) {
                return true;
            }
            return false;
        });
    }

    filterHotels() {
        this.filteredHotels = this.hotels.filter((hotel: any) => {
            if (hotel.city === this.newTour.city.name) {
                return true;
            }
            return false;
        });
    }
}

export default new TourStore();
