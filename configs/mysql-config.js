module.exports = {
  host: "localhost",
  username: "root",
  password: "",
  database: "gacha",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 30000
  }
};