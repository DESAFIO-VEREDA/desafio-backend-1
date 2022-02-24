const sql = require("mssql");

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

const connStr = `mssql://${process.env.USER}:${process.env.PASS}@${process.env.SERVER}:${process.env.PORT}/studentbase`;

//const connStr =
("Server=192.239.240.59,11433;Database=studentsbase;testeVereda Id=username;Password=Vereda99;Encrypt=true");

async function findAllAlunos() {
  try {
    await sql.connect(connStr);
    const result = await sql.query`select * from studentbase `;
    console.dir(result);
  } catch (err) {
    console.log("erro " + err);
  }
}

async function findOneAluno(id) {
  try {
    await sql.connect(connStr);
    const result = await sql.query`select aluno from studentbase where id = $1`;
    const values = [id];
    const { rows } = await sql.query(result, values);
    const [aluno] = rows;

    return aluno;
  } catch (err) {
    console.log(err);
  }
}

async function createAluno() {
  try {
    await sql.connect(connStr);
    await sql.query`insert into studentbase () set ()`;
  } catch (err) {
    console.log(err);
  }
}

async function updateAluno(id) {
  try {
    await sql.connect(connStr);
    const query = await sql.query`update studentbase set () where id = $1`;
    const values = [id];
    await sql.query(query, values);
  } catch (err) {
    console.log(err);
  }
}

async function removeAluno(id) {
  try {
    await sql.connect(connStr);
    const query = await sql.query`delete from studentbase where id = $1`;
    const values = [id];

    await sql.query(query, values);
  } catch (err) {
    console.log(err);
  }
}

findAllAlunos();

module.exports = {
  findAllAlunos,
  findOneAluno,
  createAluno,
  updateAluno,
  removeAluno,
};
