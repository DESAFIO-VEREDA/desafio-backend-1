const { config } = require('dotenv')
const Sequelize = require('sequelize')
const express = require('express')
var Connection = require('tedious').Connection;

const sequelize = new Sequelize('mssql://testeVereda:Vereda99@191.239.240.59:11433/desafio_backend', {
    dialect: 'mssql',
    dialectOptions: {
        requestTimeout: 3000
    },
})

sequelize.authenticate().then(()=>{
    console.log('foi')
}).catch(err=>{
    console.log(err);
})

const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', function(req, res) {
    res.send('salve');
});

// //inicia o servidor
app.listen(process.env.APP_URL)
console.log('API funcionando!')