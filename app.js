const express = require("express");
const cors = require("cors");
const app = express();
const { db, admin } = require('./config/firebase');

app.use(cors());
app.use(express.json());

app.get ("/", (req, res) => {
    res.send("Welcome to Pawprint");
});

module.exports = app;