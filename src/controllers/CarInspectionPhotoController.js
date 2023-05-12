import multer from 'multer';
import CarInspectionPhoto from '../models/CarInspectionPhoto';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('carInspectionPhoto');
class CarInspectionPhotoController {
  // Index

  async index(req, res) {
    try {
      const result = await CarInspectionPhoto.findAll();

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
      // console.log('aqui', req);
      if (err) {
        return res.status(400).json({
          error: [err.code],
        });
      }
      try {
        const { originalName, filename } = req.body;
        const { car_inspection_id } = req.body;
        const photo = await CarInspectionPhoto.create({
          originalName, filename, car_inspection_id,
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

export default new CarInspectionPhotoController();
