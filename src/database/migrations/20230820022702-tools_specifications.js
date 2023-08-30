module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tools_specifications', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tool_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tools',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
      model: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      filename_photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      filename_catalog: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_set: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Sequelize.NOW,
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
