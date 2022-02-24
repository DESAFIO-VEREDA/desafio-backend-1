const router = require('express').Router()
const Sequelize = require('sequelize')
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

//POST /aluno
router.post('/', async (req,res) => {
    const {ra, name, grade, year, evaluationName, discipline, grade2} = req.body
    if(!name || !ra || !grade || !year || !evaluationName || !discipline || !grade2){
        res.status(422).json({error: 'Todos os campos são obrigatórios'})
    }
    await driver.query(
    `INSERT INTO 
    studentBase(ra, name, grade, year, evaluationName, discipline, grade2) 
    VALUES (${ra}, 
        ${name}, 
        ${grade}, 
        ${year}, 
        ${evaluationName}, 
        ${discipline}, 
        ${grade2})`, { type: driver.QueryTypes.INSERT }
        )
    .then(function(users) {
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(400).json(err)
    }) 
})

//GET ALL
router.get('/', async (req,res) => {
        await driver.query("SELECT * FROM studentBase", { type: driver.QueryTypes.SELECT})
        .then(function(users) {
            res.status(200).json(users)
        })
        .catch(function(err){
            res.status(400).json(err)
        })  
})

//GET BY RA
router.get('/:ra', async (req,res) => {
    const {ra} = req.params
    await driver.query(`SELECT * FROM studentBase WHERE RA=${ra}`, { type: driver.QueryTypes.SELECT})
    .then(function(users) {
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(400).json(err)
    }) 
})


//GET APROVADO
router.get('/aluno/:ra', async (req,res) => {
    const {ra} = req.params
    await driver.query(`SELECT ra,grade,evaluationName,grade2 FROM studentBase WHERE RA=${ra}`, { type: driver.QueryTypes.SELECT})
    .then(function(users) {
        let notas = new Map();
        for(let i = 0; i < users.length; i++) {
            if(users[i].evaluationName == 'AV1') {
                map.set(users[i], users.grade2[i]);
        }
    }
    })
    .catch(function(err){
        res.status(400).json(err)
    }) 
})

//UPDATE Aluno
router.patch('/:ra', async(req,res) => {
    const {ra} = req.params
    const {name, grade, year, evaluationName, discipline, grade2} = req.body

    await driver.query(`UPDATE studentBase SET ra=${ra},
     name=${name}, 
     grade=${grade}, 
     year=${year}, 
     evaluationName=${evaluationName}, 
     discipline=${discipline}, 
     grade=${grade2})`, 
     { type: driver.QueryTypes.UPDATE })
    .then(function(users) {
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(400).json(err)
    })
})

//DELETE Person
router.delete('/:ra', async(req,res) => {
    const {ra} = req.params
    await driver.query(`DELETE FROM studentBase
     WHERE RA=${ra}`,{ type: driver.QueryTypes.DELETE})
    .then(function(users) {
        res.status(200).json(users)
    })
    .catch(function(err){
        res.status(400).json(err)
    })
})

module.exports = router