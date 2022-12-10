import { makeAutoObservable } from 'mobx';

interface IUser {}

class UserStore {
    private _isAuth: boolean;
    private user;

    constructor() {
        this._isAuth = false;
        this.user = {};
        makeAutoObservable(this);
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    }

    setUser(user: any) {
        this.user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get getUser() {
        return this.user;
    }
}

export default new UserStore();
