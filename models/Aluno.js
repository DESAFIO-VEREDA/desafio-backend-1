const { Sequelize, sequelize } = require('../models/db')

const Aluno = sequelize.define('studentbase', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING
})

module.exports =  Aluno