import { IncomingMessage, ServerResponse } from 'http';

import { Database } from 'sqlite3';
import { UserController } from '../controllers/usersController';
import { isMatchingMethod } from '../utils/isMatchingMethod';

export const usersRoutes = (
    req: IncomingMessage,
    res: ServerResponse,
    db: Database
) => {
    const { method, url } = req;

    const id = parseInt(url.split('/')[2]);

    const GET_USERS = isMatchingMethod('GET', method);

    if (GET_USERS) {
        db.all('SELECT * FROM users', [], (err, rows) => {
            if (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ msg: 'There is a server error' }));
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.end(JSON.stringify(rows));
        });
    } else if (isMatchingMethod('POST', method)) {
        let temporaryShit = '';

        req.on('data', chunk => {
            console.log(chunk);
            temporaryShit += chunk.toString();
        });

        req.on('end', () => {
            const { name, email, password } = JSON.parse(temporaryShit);

            db.run(
                'INSERT INTO users VALUES(?, ?, ?)',
                [name, email, password],
                err => {
                    if (err) {
                        console.log('Something went wrong!');
                        res.end({ msg: 'Huck u' });
                        return;
                    }

                    res.end({
                        msg: `There is ${name}, ${email}, ${password} which successfully added to DB!`
                    });
                }
            );
        });
    }

    if (GET_USERS && id) {
        console.log('In the controller');
        UserController.getUserById(req, res, id);
    }
};
