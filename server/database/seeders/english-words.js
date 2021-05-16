const csvParser = require('csv-parser')
const fs = require('fs')
const {wordToNumber} = require('../../../client/src/utils')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const words = []
    return new Promise((resolve) => fs.createReadStream('english_words.csv')
      .pipe(csvParser())
      .on('data', (data) => words.push({text: data.word, code: wordToNumber(data.word)}))
      .on('end', async () => {
        await queryInterface.bulkInsert('Words', words)
        resolve(true)
      }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Words', null, {})
  }
}
