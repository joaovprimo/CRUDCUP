import express from "express";
import dotenv from "dotenv";
import routeGamblers from './routes/routegamblers.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(routeGamblers);

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
});