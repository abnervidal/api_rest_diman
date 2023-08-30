module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tools_acquisitions_uses_occurrences_photos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tool_acquisition_use_occurrence_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tools_acquisitions_uses_occurrences',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      original_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      with_px: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      height_px: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
