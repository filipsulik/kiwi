'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
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
    }
  }, {
    sequelize,
    modelName: 'Word',
  })
  return Word
}