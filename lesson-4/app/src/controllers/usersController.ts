import { IncomingMessage, ServerResponse } from 'http';
import { UserServices } from '../services/userServices';

export class UserController {
    static getUserById(_: IncomingMessage, res: ServerResponse, id) {
        console.log('Controller ready to ask service');

        const user = UserServices.getUserById(id);

        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(user));
    }
    static getUsers(req: IncomingMessage, res: ServerResponse) {
        const users = UserServices.getUsers();
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(users));
    }
    static createUser(req: IncomingMessage, res: ServerResponse) {
        console.log('Controller ready to create a User');
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const user = JSON.parse(body);

            UserServices.createNewUser(user);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');

            res.end(
                JSON.stringify({
                    message: 'User was successfully created!'
                })
            );
        });
    }
}
