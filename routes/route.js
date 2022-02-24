const express = require('express')
const router = express.Router()
const { Sequelize, sequelize } = require('../models/db')
const Aluno = require('../models/Aluno')
const { allAlunos,deleteAluno, getAlunoByName, updateAluno, addAluno } = require('../controlers/controlerAluno')

router.get('/', async (req, res)=>{
    const Table = 'studentbases'
    const aluno = await sequelize.showAllSchemas()
    console.log(aluno);
    return aluno
})

router.get('/all', allAlunos)
router.get('/name/:name', getAlunoByName)
router.post('/add', addAluno)
router.put('/', updateAluno)
router.delete('/', deleteAluno)


module.exports = router