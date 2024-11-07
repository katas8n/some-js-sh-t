const http = require('http');
const express = require('express');
const cors = require('cors');
const { check, validationResult } = require('express-validator');
const { errorHandler } = require('./middlewares/errorHandler');
const { ClientSideError } = require('./utils/errors');

const app = express();

// use - middleware
app.use(cors());
app.use(express.urlencoded({ extends: true }));
app.use(express.json());

app.get('/', (req, res) => {
    try {
        if (!req.query.email) {
            console.log('We tried!');
            throw new ClientSideError(
                "There isn't any email in a query string!"
            );
        }
        res.json('Something interesting');
    } catch (error) {
        console.log('[error.status]', error.statusCode);
        if (error.name === 'ValidationError') {
            console.error('Validation error', error.message);
            res.status(400).json({ msg: 'Validation error' });
        } else if (error.statusCode === 400) {
            console.error('Something wrong with Client Side');
            res.status(404).json({ msg: 'ClientSideError error' });
        } else if (error.name === 'DatabaseError') {
            console.error('Something wrong with Client Side');
            res.status(500).json({ msg: 'DatabaseError error' });
        } else if (error.name === 'ReferenceError') {
            console.error('ref error!');
            res.status(500).json({ msg: 'ref error' });
        }
    }
});

app.get('/', (req, res, next) => {
    try {
        res.send('There is a usual get req');
    } catch (err) {
        next(err);
    }
});

app.get('/test-error', (req, res, next) => {
    try {
        throw new Error('Something went wrong');
    } catch (err) {
        next(err);
    }
});

app.use((req, res) => {
    res.status(404).send('There is nothing here yet!');
});

// Middleware always has a next as a third argument
// app.post(
//     '/submit',
//     [
//         check('name').isAlpha().withMessage('There must be only chars'),
//         // Min int
//         check('age')
//             .isInt({ min: 1 })
//             .withMessage('There must be positive number')
//     ],
//     (req, res, next) => {
//         const errors = validationResult(req);

//         if (!errors.isEmpty()) {
//             return res.json({
//                 error: errors.array()
//             });
//         }

//         next();
//     }
// );

// app.post('/submit', (req, res, next) => {
//     const { name, age } = req.body;

//     res.send(`The name of the person: ${name}, it's ${age} years old.`);
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);

//     res.status(500).send('Something went wrong!');
// });

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on the port 8080');
});
