import Sequelize, { Model } from 'sequelize';

export default class Car extends Model {
  static associate(models) {
    this.belongsTo(models.Cartype);
    this.belongsTo(models.CarFueltype);
    this.belongsTo(models.CarOccurrences);
    this.hasMany(models.CarPhoto);
  }

  static init(sequelize) {
    super.init(
      {
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        alias: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        plate: {
          type: Sequelize.STRING(7),
          allowNull: false,
          validate: {
            len: [7, 7],
          },
        },
        renavan: {
          type: Sequelize.INTEGER(12),
          allowNull: false,
        },
        year: {
          type: Sequelize.INTEGER(4),
          allowNull: false,
        },
        obs: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },

      { sequelize, tableName: 'cars' },
    );
    return this;
  }
}
