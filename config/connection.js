var Sequelize = require('sequelize');

var sequelize = new Sequelize("burgers_db", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  });

module.exports = sequelize;