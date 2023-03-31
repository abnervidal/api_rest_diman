import CarPhoto from '../models/CarPhoto';

class ProviderController {
  // Index

  async index(req, res) {
    try {
      const result = await CarPhoto.findAll();

      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
