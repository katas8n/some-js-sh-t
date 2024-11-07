import http, { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { usersRoutes } from './routes/usersRoutes';

const PORT: number = 4000;

const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-type');

        if (req.method === 'OPTIONS') {
            res.writeHead(204);
            res.end();

            return;
        }

        const parsedUrl = parse(req.url);
        console.log(parsedUrl);

        if (parsedUrl?.pathname.startsWith('/users')) {
            usersRoutes(req, res);
        } else {
            res.statusCode = 404;
            res.end("Page doesn't exist yet");
        }
    }
);

server.listen(PORT, () => {
    console.log('Here we are!');
});
