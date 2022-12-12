const beachResort1 = require('../../assets/images/services/beach-resort.jpg');
const beachResort2 = require('../../assets/images/services/beach-resort2.webp');

const cruise1 = require('../../assets/images/services/cruise.jpg');
const cruise2 = require('../../assets/images/services/cruise2.jpeg');
const cruise3 = require('../../assets/images/services/cruise3.jpeg');

const excursion1 = require('../../assets/images/services/excursion.jpg');
const excursion2 = require('../../assets/images/services/excursion2.webp');

const expedition1 = require('../../assets/images/services/expedition.jpg');
const expedition2 = require('../../assets/images/services/expedition2.jpg');

const journey1 = require('../../assets/images/services/journey.jpeg');
const journey2 = require('../../assets/images/services/journey2.jpg');

class ServiceImages {
    images: {
        beach_resort: any;
        cruise: any;
        excursion: any;
        expedition: any;
        journey: any;
    };

    constructor() {
        this.images = {
            beach_resort: [beachResort1, beachResort2],
            cruise: [cruise1, cruise2, cruise3],
            excursion: [excursion1, excursion2],
            expedition: [expedition1, expedition2],
            journey: [journey1, journey2],
        };
    }

    getRandImage = (day: number, type: string) => {
        switch (type) {
            case 'beach_resort':
                return this.getRandBeachResort(day);
            case 'cruise':
                return this.getRandCruise(day);
            case 'excursion':
                return this.getRandExcursion(day);
            case 'expedition':
                return this.getRandExpedition(day);
            case 'journey':
                return this.getRandJourney(day);
            default:
                break;
        }
    };

    getRandBeachResort = (day: number) => {
        return this.images.beach_resort[day % this.images.beach_resort.length];
    };
    getRandCruise = (day: number) => {
        return this.images.cruise[day % this.images.cruise.length];
    };
    getRandExcursion = (day: number) => {
        return this.images.excursion[day % this.images.excursion.length];
    };
    getRandExpedition = (day: number) => {
        return this.images.expedition[day % this.images.expedition.length];
    };
    getRandJourney = (day: number) => {
        return this.images.journey[day % this.images.journey.length];
    };
}

export default new ServiceImages();
