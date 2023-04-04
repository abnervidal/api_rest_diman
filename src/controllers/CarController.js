import Sequelize from 'sequelize';
import Car from '../models/Car';
import CarFueltype from '../models/CarFueltype';
import Cartype from '../models/Cartype';
import CarPhoto from '../models/CarPhoto';

class ProviderController {
  // Index

  async index(req, res) {
    try {
      // const result = await Provider.findAll({
      //   attributes: {
      //     include: [],
      //   },
      //   order: [['id', 'ASC']],
      // });

      const result = await Car.findAll({

        include: [CarFueltype, Cartype],

      });

      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }

  // Store
  async store(req, res) {
    try {
      const car = await Car.create(req.body);
      return res.json(car);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
