require('dotenv').config();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        "port": process.env.DB_PORT,
        ssl: false,
        operatorsAliases: Op,
        dialectOptions: {
            ssl: false
        }
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        ssl: false,
        operatorsAliases: Op,
        dialectOptions: {
            ssl: false
        }
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
        ssl: false,
        operatorsAliases: Op,
        dialectOptions: {
            ssl: false
        }
    }

};