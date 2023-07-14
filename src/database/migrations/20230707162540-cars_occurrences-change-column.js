module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('cars_occurrences', 'car_occurrencetype_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cars_occurrencestypes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down() {
  },
};
