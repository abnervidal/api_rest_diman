module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tools_acquisitions_uses_relations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tool_acquisition_use_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tools_acquisitions_uses',
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
      // authorizer_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'authorizers',
      //     key: 'id',
      //   },
      //   onDelete: 'RESTRICT',
      //   onUpdate: 'RESTRICT',
      // },
      worker_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'workers_contracts',
          key: 'worker_id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
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
