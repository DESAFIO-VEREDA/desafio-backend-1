const Aluno = require('../models/Aluno')


const addAluno = async (req, res)=>{
    let body = req.body
    try{
        const aluno = await Aluno.create({body})
        return res.status(200).json(aluno)
    }catch(err){
        console.log(err)
        return res.status(500).send('Houve um erro interno!')
    }
}

const allAlunos = async (req, res)=>{
    try{
        const alunos = await Aluno.findAll()
        if(!alunos) return res.status(404).send('Nenhum aluno encontrado!')
        return res.status(200).json(alunos)
    }catch(err){
        console.log(err)
        return res.status(500).send('Houve um erro interno!')
    }
}

const getAlunoByName = async (req, res)=>{
    let name = req.params.name
    try{
        const aluno = await Aluno.findOne({where: {nome: name}})
        if(!aluno) return res.status(404).send('Aluno não encontrado!')
        return res.status(200).json(aluno)
    }catch(err){
        console.log(err)
        return res.status(500).send('Houve um erro interno!')
    }
}

const updateAluno = async (req, res)=>{
    let id = req.params.id
    const { nome } = req.body
    if(!nome) return res.status(400).send('Preencha todos os campos!')
    try{
        const aluno = await Aluno.findByPk(id)
        if(!aluno) return res.status(404).send('Aluno não encontrado!')
        aluno.nome = nome
        const alunoAtualizado = await aluno.save()
        return res.status(200).json(alunoAtualizado)
    }catch(err){
        console.log(err)
        return res.status(500).send('Houve um erro interno!')
    }
}

const deleteAluno = async (req, res)=>{
    let id = req.params.id
    try{
        const aluno = await Aluno.findByPk(id)
        if(aluno) return res.status(404).send('Alunonão encontrado!')
        await aluno.destroy()
        return res.status(200).send('Aluno deletado!')
    }catch(err){
        console.log(err)
        return res.status(500).send('Houve um erro interno!')
    }
}


module.exports = { allAlunos, getAlunoByName, updateAluno, deleteAluno, addAluno }