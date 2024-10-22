import http, { IncomingMessage, ServerResponse } from 'http';

import dotenv from 'dotenv';
import { message } from './file';

dotenv.config();

const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        console.log('Hello!');
    }
);

server.listen(process.env.PORT, () => {
    console.log('There is a working shit!');
    console.log(message());
});
