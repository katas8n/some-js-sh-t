import http, { IncomingMessage, ServerResponse } from 'http';
import sqlite3 from 'sqlite3';
import { parse } from 'url';
import { usersRoutes } from './routes/usersRoutes';

const PORT: number = 4000;

const db = new sqlite3.Database('./db.db', err => {
    if (err) return console.error(err);

    console.log('There is all alright!');

    db.run(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            password TEXT 
        )
    `);
});

const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-type');

        const parsedUrl = parse(req.url);

        if (parsedUrl?.pathname.startsWith('/users')) {
            console.log('Route');
            usersRoutes(req, res, db);
        } else {
            res.statusCode = 404;
            res.end("Page doesn't exist yet");
        }
    }
);

server.listen(PORT, () => {
    console.log('Here we are!');
});
