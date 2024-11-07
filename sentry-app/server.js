require('dotenv').config();

const express = require('express');
const http = require('http');
const Sentry = require('@sentry/node');
const morgan = require('morgan');

const app = express();

// Sentry settings
Sentry.init({
    dsn: process.env.SENTRY_DSN
});

// Middleware (request log handling)
app.use(morgan('dev'));

// Middleware (JSON DATA handling)
app.use(express.json());

// products JSON
const products = [
    {
        id: 0,
        label: 'Pepsi',
        price: 23.23
    },
    {
        id: 1,
        label: 'Fanta',
        price: 13.13
    },
    {
        id: 2,
        label: 'Sprite',
        price: 23.13
    },
    {
        id: 3,
        label: 'Slipknot',
        price: 132.23
    }
];

app.get('/products', (req, res) => {
    const { page = 1, limit = 3, label, minPrice, maxPrice } = req.query;

    let filteredProducts = products;

    if (label) {
        filteredProducts = filteredProducts.filter(product =>
            product.label.toLowerCase().includes(label)
        );
    }
    if (minPrice) {
        filteredProducts = filteredProducts.filter(
            product => product.price >= parseFloat(minPrice)
        );
    }
    if (maxPrice) {
        filteredProducts = filteredProducts.filter(
            product => product.price <= parseFloat(maxPrice)
        );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + +limit;

    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    res.json({
        data: paginatedProducts,
        total: products.length,
        page: +page,
        pages: Math.ceil(filteredProducts.length / limit)
    });
});

app.get('/error', (req, res, next) => {
    const error = new Error('Something went wrong');

    error.status = 500;

    next(error);
});

app.use((req, res, next) => {
    const error = new Error("Resource hasn't been found");

    error.status = 404;

    next(error);
});

app.use((error, req, res, next) => {
    Sentry.captureException(error);

    res.status(error.status || 500).json({
        error: {
            message: error.message || 'Servers error'
        }
    });
});

Sentry.setupExpressErrorHandler(app);

// routes
// app.get("/")
// app.get("/error") // 500
// app.get("/")

const server = http.createServer(app);

server.listen(process.env.PORT || process.argv[2]);
