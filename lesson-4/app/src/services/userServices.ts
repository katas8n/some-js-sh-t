import { UserDAO } from '../dao/userDao';

export class UserServices {
    static getUserById(id: string | number) {
        console.log('Service');

        return UserDAO.findById(id);
    }

    static getUsers() {
        return UserDAO.getAllUsers();
    }

    static createNewUser(user) {
        return UserDAO.createUser(user);
    }
}
