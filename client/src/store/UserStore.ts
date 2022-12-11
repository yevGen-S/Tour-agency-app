import { makeAutoObservable } from 'mobx';

interface IUser {
    login: string;
    role: string;
    iat: number;
    exp: number;
}

class UserStore {
    _isAuth: boolean;
    user: IUser;

    constructor() {
        this._isAuth = false;
        this.user = { login: '', role: '', iat: 0, exp: 0 };
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

    get userRole() {
        return this.user.role;
    }
}

export default new UserStore();
