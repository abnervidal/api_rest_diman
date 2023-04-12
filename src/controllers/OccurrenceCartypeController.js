import OccurrenceCartype from '../models/OccurrenceCartype';

class ProviderController {
  // Index

  async index(req, res) {
    try {
      const result = await OccurrenceCartype.findAll();

      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
