import Sequelize, { Model } from 'sequelize';

export default class CarOccurrences extends Model {
  static associate(models) {
    this.hasMany(models.Car);
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

      { sequelize, tableName: 'cars_occurrences', timestamps: false },
    );
    return this;
  }
}
