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
    newUser: any;
    filteredListOfUsers: any;

    userManipulationMode: any;

    searchInput: string;

    constructor() {
        this._isAuth = false;
        this.user = { login: '', role: '', iat: 0, exp: 0 };
        this.users = [];
        this.editUser = {};
        this.newUser = {};
        this.filteredListOfUsers = [];
        this.searchInput = '';
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
        this.editUser = { ...user };
    }

    filterUsers(input: string) {
        this.searchInput = input;
        this.filteredListOfUsers = this.users.filter((user: any) => {
            const concatString = Object.values(user).join('');
            if (
                concatString
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase())
            ) {
                return user;
            }
        });
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
