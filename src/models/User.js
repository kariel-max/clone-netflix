const database = require('../intances/postgres')
const Sequelize = require('sequelize')

const User = database.define('users', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    tableName: 'users',
    timestamps: false

});

module.exports = User;