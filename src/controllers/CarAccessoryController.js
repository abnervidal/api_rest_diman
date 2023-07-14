import CarAccessory from '../models/CarAccessory';
import CarAccessorytype from '../models/CarAccessorytype';

class CarAccessoryController {
  // Index
  async index(req, res) {
    try {
      const result = await CarAccessory.findAll({
        include: [CarAccessorytype],
      });
      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }

  async store(req, res) {
    try {
      const accessory = await CarAccessory.create(req.body);
      return res.json(accessory);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) { // verificação se id foi enviado
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const accessory = await CarAccessory.findByPk(id);

      if (!accessory) {
        return res.status(400).json({
          errors: ['ID não existe'],
        });
      }

      const newData = await accessory.update(req.body);
      return res.json(newData);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CarAccessoryController();
