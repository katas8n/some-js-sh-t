const express = require('express');
const { getMessages } = require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.use('/all-messages', (req, res) => {
    console.log(2 + 2);
    console.log(2 / 2);
});
messagesRouter.get('/all-messages', getMessages);

module.exports = { messagesRouter };
