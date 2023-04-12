import Sequelize, { Model } from 'sequelize';

export default class OccurrenceCartype extends Model {
  static associate(models) {
    this.hasMany(models.OccurrenceCar);
  }

  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },

      { sequelize, tableName: 'occurrence_carstypes', timestamps: false },
    );
    return this;
  }
}
