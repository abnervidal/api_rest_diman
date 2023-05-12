import Sequelize from 'sequelize';
import { extname } from 'path';
import CarInspection from '../models/CarInspection';
import CarInspectionPhoto from '../models/CarInspectionPhoto';
import { random_5 } from '../asset/script/getRandomNumber';

class InspectionController {
  // Index

  async index(req, res) {
    try {
      const result = await CarInspection.findAll({
        include: [CarInspectionPhoto],
      });

      return res.json(result);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }

  // Store
  async store(req, res, next) {
    try {
      if (req.files) {
        // If has file --->
        req.body.CarInspectionPhotos = [];

        // POVOANDO O ARRAY DOS ARQUIVOS
        // eslint-disable-next-line guard-for-in, no-restricted-syntax
        for (const i in req.files) {
          const fileExtension = extname(req.files[i].originalname);
          req.files[i].newName = `${Date.now()}_${random_5()}${fileExtension}`;
          req.body.CarInspectionPhotos.push({
            filename: req.files[i].newName,
            originalName: req.files[i].originalname,
            order: Number(i) + 1,
          });
        }
      }

      const carInspection = await CarInspection.create(req.body, {
        include: [CarInspectionPhoto],
      });

      if (req.files) {
        req.result = carInspection;
        return next(); // go to uploadController
      }

      return res.json(carInspection);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new InspectionController();
