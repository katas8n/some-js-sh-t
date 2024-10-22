import { IncomingMessage, ServerResponse } from 'http';
import { UserServices } from '../services/userServices';

export class UserController {
    static getUserById(_: IncomingMessage, res: ServerResponse, id) {
        console.log('Controller ready to ask service');

        const user = UserServices.getUserById(id);

        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(user));
    }
    static getUsers() {}
    static createUser() {}
}
