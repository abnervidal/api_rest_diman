import CarOccurrence from '../models/CarOccurrence';

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

      const result = await CarOccurrence.findAll();

      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
