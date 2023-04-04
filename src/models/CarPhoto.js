import Sequelize, { Model } from 'sequelize';

export default class CarPhoto extends Model {
  static associate(models) {
    this.belongsTo(models.Car);
  }

  static init(sequelize) {
    super.init(
      {
        filename: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        originalName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        order: {
          type: Sequelize.INTEGER,
          allowNull: false,
          timestamps: false,
        },
      },

      { sequelize, tableName: 'cars_photos', timestamps: false },
    );
    return this;
  }
}
