import { IncomingMessage, ServerResponse } from 'http';

import { UserController } from '../controllers/usersController';
import { isMatchingMethod } from '../utils/isMatchingMethod';

export const usersRoutes = (req: IncomingMessage, res: ServerResponse) => {
    const { method, url } = req;

    const id = parseInt(url.split('/')[2]);

    const GET_USERS = isMatchingMethod('GET', method);

    if (isMatchingMethod('POST', req.method)) {
        console.log('Router [FILE]');

        UserController.createUser(req, res);
    } else if (GET_USERS) {
        UserController.getUsers(req, res);
    } else if (GET_USERS && id) {
        console.log('In the controller');
        UserController.getUserById(req, res, id);
    } else {
        console.log('Something went wrong.', req.method, req.headers, req.url);
    }
};
