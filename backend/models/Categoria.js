const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Categoria = db.define('Categoria', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Categoria;