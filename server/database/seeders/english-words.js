module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Words', [{
      text: 'nieco',
      code: 123,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Words', null, {})
  }
}
