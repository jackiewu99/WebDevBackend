const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200"
  },

  gpa:{
    type: Sequelize.FLOAT,
    defaultValue: 0.0,
    len: [0.0,4.0]
  },


});

module.exports = Student;