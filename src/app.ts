import express from "express";
import dotenv from "dotenv";
import routeGamblers from './routes/routegamblers.js';
import routeBets from './routes/routeBets.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(routeGamblers);
app.use(routeBets);

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
});