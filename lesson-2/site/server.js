const http = require('http');

const PORT = 4000;

const server = http.createServer((req, res) => {
    const profiles = [
        {
            name: 'John',
            surname: 'Doe',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRB-nI2DUZ-05w7mjAbyeOkregAYAsgobMg&s'
        },
        {
            name: 'John',
            surname: 'Doe',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRB-nI2DUZ-05w7mjAbyeOkregAYAsgobMg&s'
        }
    ];

    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();

        return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/profile' && req.method === 'GET') {
        const profile = {
            name: 'John',
            surname: 'Doe',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRB-nI2DUZ-05w7mjAbyeOkregAYAsgobMg&s'
        };

        res.end(JSON.stringify(profile));
    }

    if (req.url === '/profiles' && req.method === 'GET') {
        res.end(JSON.stringify(profiles));
    }

    const message = {
        data: "It's message from the server! Welcome to the http module!"
    };

    const urlParts = req.url.split('/');
    console.log('[urlParts]', urlParts);

    if (req.method === 'GET' && urlParts[1] === 'profiles' && urlParts[2]) {
        const userName = urlParts[2];

        const messageResponse = {
            message: `Hi there, ${userName.split('=')[1]}`
        };

        res.end(JSON.stringify(messageResponse));
    }
    res.end(JSON.stringify(message));
});

server.listen(PORT, () => {
    console.log('There is all alright with hucking server!');
});
