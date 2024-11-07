import { UserDAO } from '../dao/userDao';

export class UserServices {
    static getUsers() {
        return UserDAO.getAllUsers();
    }

    static getUserById(id: string | number) {
        console.log('Service');

        return UserDAO.findById(id);
    }

    static createNewUser(user) {
        return UserDAO.createUser(user);
    }
}
