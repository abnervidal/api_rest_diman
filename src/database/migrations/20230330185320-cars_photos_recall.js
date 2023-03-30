module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('cars_photos', 'cartype_id', {
        primaryKey: false,
      }),
      queryInterface.changeColumn('cars_photos', 'filename', {
        primaryKey: true,
      }),
    ]);
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
