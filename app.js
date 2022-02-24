//initial configuration for express server
require('dotenv').config()
const express = require('express');
const app = express();
const sequelize = require('sequelize');
const personRoutes = require('./routes/personRoutes')


//read json
app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json());


//set a port and connect with mongoose listening on port 3000
