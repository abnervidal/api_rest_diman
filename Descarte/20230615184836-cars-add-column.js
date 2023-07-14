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
      queryInterface.addColumn(
        'cars', // table name
        'payload', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'cars', // table name
        'weight', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'cars', // table name
        'fuel_volume', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'cars', // table name
        'people_capacity', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      ),
    ]);
  },

  down() {
  },
};
