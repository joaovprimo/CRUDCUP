import express from "express";
import dotenv from "dotenv";
dotenv.config();
var app = express();
app.use(express.json());
app.listen(process.env.PORT, function () {
    console.log("listening on port ".concat(process.env.PORT));
});
