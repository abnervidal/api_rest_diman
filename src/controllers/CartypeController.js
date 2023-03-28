import Cartype from '../models/Cartype';

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

      const result = await Cartype.findAll();

      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new ProviderController();
