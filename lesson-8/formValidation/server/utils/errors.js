class ClientSideError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ClientSideError';
        this.statusCode = 400;
    }
}

class DataBaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Server side database error';
        this.statusCode = 500;
    }
}

module.exports = { ClientSideError, DataBaseError };
