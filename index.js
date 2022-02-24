require('dotenv').config()
const Request = require('tedious').Request
const express = require('express')
const app = express()
const { sequelize } = require('./models/db')
const route = require('./routes/route')
const sql = require('mssql')

sequelize.authenticate().then(()=>{
    console.log('Banco carregado!')
}).catch(err=>{
    console.log(err);
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', route)


app.listen(process.env.PORT || 5000, ()=>{
    console.log("server running!");
})