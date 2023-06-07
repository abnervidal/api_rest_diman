import Sequelize, { Model } from 'sequelize';

export default class BuildingSipac extends Model {
  static associate(models) {
    this.belongsTo(models.PropertySipac, {
      sourceKey: 'id',
      foreignKey: 'propertySipacId',
    });
    this.hasMany(models.BuildingSection, {
      foreignKey: 'BuildingSipacSubRip',
    });
    this.hasMany(models.WorkerTask, {
      sourceKey: 'subRip',
      foreignKey: 'buildingSipacSubRip',
    });
  }

  static init(sequelize) {
    super.init(
      {
        subRip: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: {
            msg: 'O ID cadastrado já existe',
          },
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        geo: {
          type: Sequelize.GEOMETRY('POINT'),
          allowNull: true,
        },
        zone: {
          type: Sequelize.INTEGER(1),
          allowNull: true,
        },
        numInfra: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        area: {
          type: Sequelize.DECIMAL(8, 2),
          allowNull: true,
        },
        floors: {
          type: Sequelize.INTEGER(2),
          allowNull: true,
        },
        inauguratedAt: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
      },
      { sequelize, tableName: 'buildings_sipac', timestamps: false }
    );
    return this;
  }
}
