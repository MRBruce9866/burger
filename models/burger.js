var Sequelize = require('sequelize');
var sequelize = require('../config/connection');


var Burgers = sequelize.define('burgers', {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
}, 
{
    timestamps: false
})

Burgers.sync();

module.exports = Burgers;