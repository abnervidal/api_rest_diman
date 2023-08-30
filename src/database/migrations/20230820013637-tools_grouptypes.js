module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tools_grouptypes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      is_equipment: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
