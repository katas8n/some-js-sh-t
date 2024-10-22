const http = require('http');

const PORT = 4000;

const server = http.createServer((req, res) => {
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

    const message = {
        data: "It's message from the server! Welcome to the http module!"
    };

    res.end(JSON.stringify(message));
});

server.listen(PORT, () => {
    console.log('There is all alright with hucking server!');
});
