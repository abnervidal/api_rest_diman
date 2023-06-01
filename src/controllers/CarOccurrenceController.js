import Sequelize from 'sequelize';
import { extname } from 'path';
import { random_5 } from '../asset/script/getRandomNumber';
import CarOccurrence from '../models/CarOccurrence';
import CarOccurrencetypes from '../models/CarOccurrencetypes';
import CarOccurrencePhoto from '../models/CarOccurrencePhoto';

class OccurrenceController {
  // Index

  async index(req, res) {
    try {
      const result = await CarOccurrence.findAll({
        include: [CarOccurrencetypes, CarOccurrencePhoto],
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
        req.body.CarOccurrencePhotos = [];

        // POVOANDO O ARRAY DOS ARQUIVOS
        // eslint-disable-next-line guard-for-in, no-restricted-syntax
        for (const i in req.files) {
          const fileExtension = extname(req.files[i].originalname);
          req.files[i].newName = `${Date.now()}_${random_5()}${fileExtension}`;
          req.body.CarOccurrencePhotos.push({
            filename: req.files[i].newName,
            originalName: req.files[i].originalname,
            order: Number(i) + 1,
          });
        }
      }

      const carOccurrence = await CarOccurrence.create(req.body, {
        include: [CarOccurrencePhoto],
      });

      if (req.files) {
        req.result = carOccurrence;
        return next(); // go to uploadController
      }

      return res.json(carOccurrence);
    } catch (e) {
      return res.status(400).json({
        errors: [e.message],
      });
    }
  }
}

export default new OccurrenceController();
