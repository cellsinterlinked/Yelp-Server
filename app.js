require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mastercontroller = require('./controllers/mastercontroller');
var axios = require("axios")

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/mastercontroller', mastercontroller);

app.listen(process.env.PORT, () => console.log("Running"));
