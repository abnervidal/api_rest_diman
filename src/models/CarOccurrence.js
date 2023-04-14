import Sequelize, { Model } from 'sequelize';

export default class CarOccurrence extends Model {
  static associate(models) {
    this.belongsTo(models.CarOccurrencetype);
    this.belongsTo(models.Car);
    this.belongsTo(models.Worker);
  }

  static init(sequelize) {
    super.init(
      {
        carId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        workerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        carOccurrencetypeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        data: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        obs: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },

      { sequelize, tableName: 'cars_occurrences' },
    );
    return this;
  }
}
