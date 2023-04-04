import multer from 'multer';
import CarPhoto from '../models/CarPhoto';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('carPhoto');
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

  // Store

  async store(req, res) {
    return upload(req, res, async (err) => {
      console.log('aqui', req);
      if (err) {
        return res.status(400).json({
          error: [err.code],
        });
      }
      try {
        const {
          originalName, filename, order, CarId,
        } = req.body;
        // const { car_id } = req.body;
        const photo = await CarPhoto.create({
          originalName, filename, order, CarId,
        });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: [e.message],
        });
      }
    });
  }
}

export default new ProviderController();
