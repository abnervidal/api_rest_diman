import Sequelize from 'sequelize';
import CarOccurrence from '../models/CarOccurrence';

class ProviderController {
  // Index

  async index(req, res) {
    try {
      const result = await CarOccurrence.findAll();

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
      const occurrence = await CarOccurrence.create(req.body);
      return res.json(occurrence);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
