import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      console.log(req.body);
      const newUser = await User.create(req.body);
      const {
        id, name, username, email,
      } = newUser;
      return res.json({
        id, name, username, email,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'username', 'email'],
      }); // retornar só esses 3 atributos
      return res.json(users);
    } catch (e) {
      return res.json(e);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const {
        id, name, username, email,
      } = user;
      return res.json({
        id, name, username, email,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update

  async update(req, res) {
    try {
      if (!req.userId) { // verificação se id foi enviado
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['ID não existe'],
        });
      }
      const newData = await user.update(req.body);
      const {
        id, name, username, email,
      } = newData;
      return res.json({
        id, name, username, email,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['ID não existe'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
