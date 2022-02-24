const express = require("express");
const alunoRoute = require("./routes/aluno.route");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(alunoRoute);

app.get("/", (req, res, next) => {
  res.status(200).send("Rodando");
});

app.listen(port, () => {
  console.log(`Api rodando na porta ${port}`);
});

module.exports.app;
