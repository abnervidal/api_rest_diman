module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tools_acquisitions_uses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tool_acquisition_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tools_acquisitions',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
      tool_acquisition_usetype_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tools_acquisitions_usestypes',
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
      //     model: 'authorizer',
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
      req_maintenance: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      // servant_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'servants',
      //     key: 'id',
      //   },
      //   onDelete: 'RESTRICT',
      //   onUpdate: 'RESTRICT',
      // },
      // unidade_id: {
      //   ttype: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'unidades',
      //     key: 'id',
      //   },
      //   onDelete: 'RESTRICT',
      //   onUpdate: 'RESTRICT',
      // },
      building_sipac_sub_rip: {
        type: Sequelize.STRING(45),
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
