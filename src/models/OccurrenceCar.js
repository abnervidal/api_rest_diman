import Sequelize, { Model } from 'sequelize';

export default class OccurrenceCar extends Model {
  static associate(models) {
    this.belongsTo(models.OccurrenceCartype);
    // this.belongsTo(models.Car);
    // this.belongsTo(models.Worker);
  }

  static init(sequelize) {
    super.init(
      {
        data: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        obs: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },

      { sequelize, tableName: 'occurrences_cars' },
    );
    return this;
  }
}
