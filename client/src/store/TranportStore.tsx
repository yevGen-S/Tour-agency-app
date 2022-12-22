import { makeAutoObservable } from 'mobx';

class TransportStore {
    tranports: any;

    constructor() {
        makeAutoObservable(this);
        this.tranports = [];
    }

    setTranports(data: any) {
        this.tranports = [...data];
    }

    filterByCityTo(city: string) {
        return this.tranports.filter((transport: any) => {
            if (transport.city_to === city) {
                console.log(transport.city_to);
                return true;
            }
            return false;
        });
    }
}

export default new TransportStore();
