import Sequelize, { Model } from 'sequelize';

export default class Contract extends Model {
  static associate(models) {
    this.belongsToMany(models.Worker, {
      through: models.WorkerContract,
    });
    this.belongsToMany(models.ContractValidytype, {
      through: models.ContractValidy,
    });
    this.hasMany(models.WorkerContract);
    this.belongsTo(models.Provider);
  }

  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        provedorId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        codigoSipac: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        value: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        objeto: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        start: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        maxEnd: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
      },

      { sequelize, tableName: 'contracts', timestamps: false }
    );
    return this;
  }
}
