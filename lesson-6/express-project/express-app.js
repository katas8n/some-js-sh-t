const express = require('express');
const http = require('http');

const { messagesRouter } = require('./router/messages.router');

const app = express();

// POST , GET, PUT, PATCH, DELETE, OPTION
app.use(express.json());

app.use('/messages', messagesRouter);

const server = http.createServer(app);

server.listen(4000);
