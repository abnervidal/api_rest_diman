import CarOccurrencetype from '../models/CarOccurrencetype';

class ProviderController {
  // Index

  async index(req, res) {
    try {
      const result = await CarOccurrencetype.findAll();

      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
