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
    users: any;
    editUser: any;

    constructor() {
        this._isAuth = false;
        this.user = { login: '', role: '', iat: 0, exp: 0 };
        this.users = [];
        this.editUser = {};
        makeAutoObservable(this);
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    }

    setUser(user: any) {
        this.user = user;
    }

    setUsers(users: any) {
        this.users = [...users];
    }

    setEditableUser(user: any) {
        this.editUser = {...user};
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
