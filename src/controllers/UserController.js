import User from '../models/User';

const UserController = {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  },

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      const { id: idUser, nome, email } = user;
      return res.json({ idUser, nome, email });
    } catch (e) {
      return res.json(null);
    }
  },

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      const newDate = await user.update(req.body);

      const { id, nome, email } = newDate;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  },

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      await user.destroy();

      return res.status(205).json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  },
};

export default UserController;
