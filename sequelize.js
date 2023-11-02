const Sequelize = require('sequelize');
const config = require('config');
const mysql = require('mysql2/promise');

const {host,port, database, user, password} = config.database
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
});

sequelize.sync({
  force: false
}).then(() => {
  console.log(`vehicle db and table have been created`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Mysql connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const vehicleModel = require('./schemas/vehicle.schema');
const vehicle = vehicleModel(sequelize, Sequelize);

module.exports = {
  vehicle
};