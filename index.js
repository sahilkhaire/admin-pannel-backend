'use strict';
//import library
const express = require('express');
const app = express();
const routes = require('./routes/routes');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

//port number
let port = process.env.PORT || 2222;

//route path
app.use('/', routes);


//app create on port 2222
let server = require('http').createServer(app);
server.listen(port, '0.0.0.0', function () {
    console.log("started socket successfully : " + ":" + port);
});
