import http, { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

const PORT: number = 4000;

const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-type');

        const parsedUrl = parse(req.url);

        if (parsedUrl?.pathname.startsWith('/users')) {
        }
    }
);

server.listen(PORT, () => {
    console.log('Here we are!');
});
