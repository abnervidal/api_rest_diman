module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tools_acquisitions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tool_specification_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tools_specifications',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
      tombamento: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      n_serie: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      cod_diman: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      tool_origin_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      obs: {
        type: Sequelize.TEXT,
        allowNull: true,
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
