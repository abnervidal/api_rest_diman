import Sequelize from 'sequelize';
import CarInspection from '../models/CarInspection';

class InspectionController {
  // Index

  async index(req, res) {
    try {
      const result = await CarInspection.findAll();

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
      const inspection = await CarInspection.create(req.body);
      return res.json(inspection);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new InspectionController();
