const { Model, DataTypes } = require('sequelize')
const sequelize = require('../index.js')

class Word extends Model {}

Word.init({
  text: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Word',
  timestamps: false
})

module.exports = Word