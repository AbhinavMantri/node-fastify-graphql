const Sequelize = require('sequelize');
const models = require('../models');

const connection = new Sequelize('car-shop', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

models.forEach(m => {
    m.model.init(m.colDefs, { sequelize: connection, ...m.otherAttrs });
});

module.exports = connection;