import users from '../data/users.json';

export class UserDAO {
    static findById(id: string | number) {
        console.log('There is DAO is working!');
        return users.find(user => user.id === id);
    }

    static getAllUsers() {
        return users;
    }

    static createUser(user) {
        return users.push(user);
    }
}
