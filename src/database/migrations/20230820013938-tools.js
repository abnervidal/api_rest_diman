module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tools', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tool_grouptypes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tools_grouptypes',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specification: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_sipac_db: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      id_sipac: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      id_catmat: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      group_sipac: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      filename_photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_nactive: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      filename_catalog: {
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
