const Sequelize = require('sequelize')
const sequelize = new Sequelize('mssql://testeVereda:Vereda99@191.239.240.59:11433/desafio_backend', {
    dialect: 'mssql',
    dialectOptions: {
        requestTimeout: 3000
    },
})

module.exports = { Sequelize, sequelize }