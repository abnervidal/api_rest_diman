module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'cars', // table name
        'chassi', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
  },

  down() {
  },
};
