import Sequelize from 'sequelize';
import OccurrenceCar from '../models/OccurrenceCar';

class ProviderController {
  // Index

  async index(req, res) {
    try {
      const result = await OccurrenceCar.findAll();

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
      const occurrence = await OccurrenceCar.create(req.body);
      return res.json(occurrence);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
