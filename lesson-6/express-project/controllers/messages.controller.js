const { messages } = require('../model/messages.js');

function getMessages(req, res) {
    return res.json(messages);
}

module.exports = { getMessages };
