const Sequelize = require("sequelize");

const sequelize = new Sequelize("estacionamento", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize,
    sequelize
};
