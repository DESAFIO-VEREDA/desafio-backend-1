const { Router } = require("express");
const {
  findAllAlunos,
  findOneAluno,
  createAluno,
  updateAluno,
  removeAluno,
} = require("../sql/connection");

const alunoRoute = Router();

alunoRoute.get("/alunos", async (req, res, next) => {
  try {
    const alunos = await findAllAlunos();
    res.status(200).send(alunos);
  } catch (err) {
    console.log(err);
  }
});

alunoRoute.get("/alunos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const aluno = await findOneAluno(id);
    res.status(200).send(aluno);
  } catch (err) {
    console.log(err);
  }
});

alunoRoute.post("/alunos", async (req, res, next) => {
  try {
    const newAluno = req.body;
    const created = await createAluno(newAluno);
    res.status(201).send(created);
  } catch (err) {
    console.log(err);
  }
});

alunoRoute.put("/alunos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const modifiedAluno = req.body;
    modifiedAluno.id = id;
    await updateAluno(modifiedAluno);
    res.status(200).send();
  } catch (err) {
    console.log(err);
  }
});

alunoRoute.delete("/alunos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await removeAluno(id);
    res.status(200).send();
  } catch (err) {
    console.log(err);
  }
});
