import Sequelize, { Model } from 'sequelize';

export default class CarInspection extends Model {
  static associate(models) {
    this.belongsTo(models.Car);
    this.belongsTo(models.User);
  }

  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        milage: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        data: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        internal: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        external: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        obs: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },

      { sequelize, tableName: 'cars_inspections' },
    );
    return this;
  }
}
