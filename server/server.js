const Sequelize = require('sequelize');
const cors = require('cors');
const requireDir = require('require-dir');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

const connection = new Sequelize('nodeapi', 'root', 'Wpr83485', {
    host: 'localhost',
    dialect: 'mysql'
});
connection.sync();
module.exports = connection;

requireDir('./src/models');

app.use('/api/', require('./src/routes.js'));

app.listen(3001);
