import { log } from 'console';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { initializeDatabase } from './dao/dao';
import { errorHandler } from './middlwares/errorHandler';
import { productRouter } from './routes/productRoutes';

const app = express();

app.use(cors()); // Access-Controll-Allow-Methods ...
app.use(express.json()); // Just make req.body readable from the box

//
app.use('/api/produts', productRouter);
app.use(errorHandler);

const server = http.createServer(app);

initializeDatabase()
    .then(() => {
        server.listen(8080, () => {
            log(`Server has been running on the port ${8080}`);
        });
    })
    .catch(e => {
        log(e);
    });
