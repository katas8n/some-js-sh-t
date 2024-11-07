const { ClientSideError, DataBaseError } = require('../utils/errors');

const errorHandler = (err, req, res) => {
    console.error(err.message);

    if (err instanceof ClientSideError) {
        res.status(err.statusCode).json({
            message: 'Something went wrong'
        });
    }
};

module.exports = { errorHandler };
