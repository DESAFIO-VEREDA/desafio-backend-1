const Sequelize = require('sequelize')
const express = require('express');
const app = express();
const alunosRoutes = require('./routes/alunosRoute')
const DB_USER= process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB = process.env.DB
const fs = require("fs");

const driver = new Sequelize(
    "desafio_backend",
    "rafael.torreson",
    "Abacaxi100%",
    {
        host: '191.239.240.59',
        port: 11433,
        dialect: 'mssql',
        quoteIdentifiers: false,
        operatorsAliases: 0
        
    }
)
//read json
app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json());

//api routes
app.use('/alunos', alunosRoutes)
app.use('/', alunosRoutes)

async function main(){
    try {
        await driver.authenticate()
        console.log('Connected to SQL')
        app.listen(3000)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main()