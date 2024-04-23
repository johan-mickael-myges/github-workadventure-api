import dotenv from 'dotenv';
dotenv.config();

import registerRoutes from "./routers/index.js";

import cacheControlMiddleware from "./middlewares/cacheControlMiddleware.js";
import corsMiddleware from './middlewares/corsMiddleware.js';
import httpsMiddleware from "./middlewares/httpsMiddleware.js";

import express from 'express';

const app = express();

app.use(corsMiddleware);
app.use(cacheControlMiddleware);
app.use(express.static('public'));

registerRoutes(app);

const port = 8877;

httpsMiddleware(app).listen(port, () => {
    console.log(`Workadventure for Developers server is running on https://localhost:${port}`);
});
